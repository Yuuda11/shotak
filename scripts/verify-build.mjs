import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve, extname } from 'node:path';
import assert from 'node:assert/strict';
const root = resolve('dist');
const required = ['index.html','about/index.html','projects/index.html','contact/index.html','projects/rocket-airbrake/index.html','projects/embedded-iot/index.html','projects/electrochemical-machining/index.html','projects/face-tracking-laser-gimbal/index.html','projects/autonomous-mini-pupper/index.html','projects/rube-goldberg-machine/index.html','projects/undergraduate-research-fluid-mechanics/index.html','resume/index.html','documents/rocket-final-report/index.html','documents/rocket-poster/index.html','404.html'];
for(const page of required) assert((await stat(join(root,page))).isFile(),`Missing ${page}`);
const files=[];
async function walk(dir){for(const file of await readdir(dir,{withFileTypes:true})){const path=join(dir,file.name);if(file.isDirectory())await walk(path);else files.push(path);}}
await walk(root);
const base=(process.env.BASE_PATH || '/').replace(/\/$/,'');
let links=0;
for(const file of files.filter(f=>extname(f)==='.html')){
 const html=await readFile(file,'utf8');
 assert(/<html[^>]*lang="en"/.test(html),`Missing language: ${file}`);
 assert(/<title>.+?<\/title>/.test(html),`Missing title: ${file}`);
 for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){
  const link=match[1];
  if(/^(https?:|mailto:|data:|tel:|\/\/)/.test(link))continue;
  const path=decodeURIComponent(link.split(/[?#]/)[0]);
  if(!path.startsWith('/'))continue;
  assert(!base || path===base || path.startsWith(`${base}/`),`Link lacks base ${base}: ${path}`);
  const local=resolve(root,`.${path.slice(base.length)}`);
  assert(local.startsWith(`${root}/`)||local===root,`Link escapes build: ${path}`);
  const candidates=[local,join(local,'index.html')];
  let found=false;for(const candidate of candidates){try{if((await stat(candidate)).isFile())found=true;}catch{}}
  assert(found,`Broken local link in ${file}: ${path}`);links++;
 }
}
// A draft must never gain a public route.
for(const file of await readdir('src/content/projects')){
 if(!file.endsWith('.md'))continue;
 const source=await readFile(join('src/content/projects',file),'utf8');
 if(/^status:\s*draft\s*$/m.test(source)){
  let exists=false;try{await stat(join(root,'projects',file.replace(/\.md$/,''),'index.html'));exists=true;}catch{}
  assert(!exists,`Draft was published: ${file}`);
 }
}
if(process.env.SITE_URL) assert((await stat(join(root,'sitemap-index.xml'))).isFile(),'Sitemap not generated');
console.log(`Verified ${required.length} required pages and ${links} local asset/navigation links. Draft routes excluded.`);

// Guard against listing regressions: evidence media belong inside case studies.
const expectedCovers = {
 'rocket-airbrake':'/images/projects/covers/rocket.webp',
 'embedded-iot':'/images/projects/covers/chamber-spools.webp',
 'face-tracking-laser-gimbal':'/images/projects/covers/face-tracking-laser-gimbal-cover-v2.png',
 'autonomous-mini-pupper':'/images/projects/covers/autonomous-mini-pupper-cover-v2.png',
 'rube-goldberg-machine':'/images/projects/covers/rube-goldberg-technical.webp',
 'electrochemical-machining':'/images/projects/covers/ecm.webp',
 'undergraduate-research-fluid-mechanics':'/images/projects/covers/undergraduate-research-fluid-mechanics.svg',
};
for (const page of ['index.html','projects/index.html']) {
 const html=await readFile(join(root,page),'utf8');
 const cards=[...html.matchAll(/<article\b[^>]*data-project="([^"]+)"[\s\S]*?<\/article>/g)];
 assert.equal(cards.length,page==='index.html'?3:7,`Unexpected project count in ${page}`);
 for(const [card,id] of cards){
  assert(card.includes(`src="${base}${expectedCovers[id]}"`),`Wrong listing cover for ${id} in ${page}`);
  assert(card.includes('concept illustration'),`Missing concept label for ${id}`);
  assert(!card.includes('project CAD'),`CAD mislabeled as listing art: ${id}`);
 }
}
const rocket=await readFile(join(root,'projects/rocket-airbrake/index.html'),'utf8');
assert(rocket.includes('/images/projects/rocket-airbrake/assembly.webp'),'Rocket CAD evidence removed');
for(const slug of ['rocket-final-report','rocket-poster']) assert(rocket.includes(`/documents/${slug}/`),`Missing rocket document link ${slug}`);
const resume=await readFile(join(root,'resume/index.html'),'utf8');
assert(/<object[^>]*type="application\/pdf"/.test(resume),'Missing embedded PDF preview');
assert(/<a[^>]*href="[^"]+\.pdf"[^>]*>Open PDF/.test(resume),'Missing direct PDF fallback');
assert(!/<a[^>]*download[^>]*>Open PDF/.test(resume),'Primary PDF action forces download');
console.log('Verified all seven listing illustrations, selected-work covers, rocket evidence, document links and resume viewer.');

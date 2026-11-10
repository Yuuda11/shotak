// Local pixel edit explicitly authorized by the site owner. No generative service.
// Remove length along the body axis, preserving transverse width and both ends.
import sharp from 'sharp';
import {readFileSync} from 'node:fs';
// Supply the baseline WebP exported from checkpoint 9a0a7cd as the first argument.
if (!process.argv[2]) throw new Error('Usage: node scripts/assets/refine-rocket.mjs /path/to/baseline-rocket.webp');
const source=readFileSync(process.argv[2]);
const {data,info}=await sharp(source).removeAlpha().raw().toBuffer({resolveWithObject:true});
const {width:w,height:h,channels:c}=info;
const out=Buffer.alloc(data.length);
const tail=[255,880],nose=[1480,58];
const length=Math.hypot(nose[0]-tail[0],nose[1]-tail[1]);
const ux=(nose[0]-tail[0])/length,uy=(nose[1]-tail[1])/length;
const reduction=length*.15;
const cx=(tail[0]+nose[0])/2,cy=(tail[1]+nose[1])/2;
const translation=[-100,-50];
function sample(x,y,k){x=Math.max(0,Math.min(w-1.001,x));y=Math.max(0,Math.min(h-1.001,y));const a=Math.floor(x),b=Math.floor(y),fx=x-a,fy=y-b;return data[(b*w+a)*c+k]*(1-fx)*(1-fy)+data[(b*w+a+1)*c+k]*fx*(1-fy)+data[((b+1)*w+a)*c+k]*(1-fx)*fy+data[((b+1)*w+a+1)*c+k]*fx*fy;}
for(let y=0;y<h;y++)for(let x=0;x<w;x++){
 const px=x-translation[0],py=y-translation[1];
 const t=(px-cx)*ux+(py-cy)*uy;
 // Smooth overlap at the join blends the uniform cylindrical finish, avoiding a seam.
 let blend=Math.max(0,Math.min(1,(t+24)/48));blend=blend*blend*(3-2*blend);
 for(let k=0;k<c;k++)out[(y*w+x)*c+k]=Math.round(sample(px-ux*reduction/2,py-uy*reduction/2,k)*(1-blend)+sample(px+ux*reduction/2,py+uy*reduction/2,k)*blend);
}
await sharp(out,{raw:{width:w,height:h,channels:c}}).webp({quality:94}).toFile('public/images/projects/covers/rocket.webp');
console.log(`Removed ${reduction.toFixed(1)} axial pixels (~15%); preserved end geometry and transverse width.`);

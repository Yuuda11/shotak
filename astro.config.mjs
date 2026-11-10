import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import projectMarkdown from './scripts/remark-projects.mjs';
import tailwindcss from '@tailwindcss/vite';
// Static portfolio configuration; collection media are local permanent assets.
// Set SITE_URL to https://USERNAME.github.io before publishing. No username is assumed.
const site = process.env.SITE_URL;
if (process.env.GITHUB_ACTIONS && !site) throw new Error('Set the SITE_URL repository variable before deploying.');
export default defineConfig({
  site: site || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  output: 'static', trailingSlash: 'always', compressHTML: true,
  markdown: { processor: unified({ remarkPlugins: [[projectMarkdown, {base: process.env.BASE_PATH || '/'}]] }) },
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] },
});

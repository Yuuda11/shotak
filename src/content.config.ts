import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const projects = defineCollection({
 loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
 schema: z.object({
   title: z.string(), subtitle: z.string(), summary: z.string(), category: z.string(),
   highlightPhrase: z.string().optional(), highlightTone: z.enum(['blue','sage','lavender','cream']).optional(),
   filters: z.array(z.enum(['Hardware','Manufacturing','Controls','Research'])),
   year: z.string().optional(), role: z.string().optional(),
   teamContext: z.string().optional(), projectStatus: z.string().optional(),
   cardNote: z.string().optional(), featured: z.number().optional(), previewTools: z.array(z.string()).optional(),
   mediaKind: z.enum(['concept','diagram','photo','cad','platform']).default('concept'), tools: z.array(z.string()).default([]),
   illustration: z.object({src:z.string(),alt:z.string()}).optional(),
   documents: z.array(z.enum(['rocket-final-report','rocket-poster'])).default([]),
   cover: z.string(), coverAlt: z.string(), status: z.enum(['draft','published']).default('draft'),
   order: z.number().default(99), documentation: z.enum(['starter','complete']).default('starter'),
   gallery: z.array(z.object({src:z.string(),alt:z.string(),caption:z.string().optional()})).default([]),
   links: z.array(z.object({label:z.string(),url:z.url()})).default([]),
 }),
});
export const collections = { projects };

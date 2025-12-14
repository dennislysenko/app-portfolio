import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tagline: z.string().optional(),
    primaryColor: z.string().default('#3B82F6'),
    tag: z.string().optional(),
    badge: z.string().optional(),
    storeLinks: z.object({
      appStore: z.string().optional(),
      playStore: z.string().optional(),
    }).optional(),
    screenshots: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })).optional(),
    featuredScreenshot: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    order: z.number().default(0),
  }),
});

export const collections = { projects };

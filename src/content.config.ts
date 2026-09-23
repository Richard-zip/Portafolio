import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tagline: z.string().optional(),
    stack: z.array(z.string()),
    year: z.string(),
    featured: z.boolean().default(false),
    role: z.string().default('Backend Developer'),
    links: z.object({
      repo: z.string().optional(),
      demo: z.string().optional(),
      docs: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  proyectos,
};

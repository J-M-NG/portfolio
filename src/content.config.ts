import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    stage: z.enum(['polyp', 'bud', 'branch', 'reef']),
    species: z.enum(['staghorn', 'fan', 'anemone', 'kelp', 'brain']),
    spriteVariant: z.enum(['default', 'alt']).optional().default('default'),
    posX: z.number().min(5).max(95),
    posY: z.number().min(55).max(95),
    plantedDate: z.string(),
    summary: z.string(),
    takeaways: z.array(z.string()).optional().default([]),
    tools: z.array(z.string()).optional().default([]),
    githubRepo: z.string().nullable().optional(),
    demoUrl: z.string().url().nullable().optional(),
    screenshotImage: z.string().nullable().optional(),
    screenshotCaption: z.string().optional(),
    relatedNote: z.string().nullable().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tag: z.string(),
    projectSlug: z.string().nullable().optional(),
  }),
});

export const collections = { projects, notes };

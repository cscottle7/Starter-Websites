// Astro Content Collections Configuration
// Defines type-safe schemas for pages and blog posts

import { defineCollection, z } from 'astro:content';

// Pages collection schema
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
  }),
});

// Blog posts collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Staff Writer'),
    publishDate: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default(['uncategorized']),
  }),
});

// Export collections
export const collections = {
  pages: pagesCollection,
  blog: blogCollection,
};

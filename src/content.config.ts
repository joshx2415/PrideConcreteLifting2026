import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

//const blog = defineCollection({
//	// Load Markdown and MDX files in the `src/content/blog/` directory.
//	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
//	// Type-check frontmatter using a schema
//	schema: ({ image }) =>
//		z.object({
//			title: z.string(),
//			description: z.string(),
//			// Transform string to Date object
//			pubDate: z.coerce.date(),
//			updatedDate: z.coerce.date().optional(),
//			heroImage: image().optional(),
//		}),
//});

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    city: z.string(),
    county: z.string(),
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    heroImage: image().optional(),
    gallery: z.array(image()).optional(),
    draft: z.boolean().default(false),
    faqItems: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { services, locations };

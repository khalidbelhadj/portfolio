import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // description: z.string(),
    // // Transform string to Date object
    // pubDate: z.coerce.date(),
    // updatedDate: z.coerce.date().optional(),
    // heroImage: z.string().optional(),
  }),
});

const images = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
    }),
});

const projects = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      link: z.string(),
      description: z.string(),
      images: z.array(image()),
      date: z.string(),
    }),
});

export const collections = { blog, images, projects };

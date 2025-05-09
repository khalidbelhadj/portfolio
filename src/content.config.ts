import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = { posts };

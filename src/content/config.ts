import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    link: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

export const collections = { projects };

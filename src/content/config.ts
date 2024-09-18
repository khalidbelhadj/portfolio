import { defineCollection, z } from "astro:content";

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

export const collections = { projects };

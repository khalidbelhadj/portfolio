import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://khalidbelhadj.com",
  base: "/",
  output: "static",
  integrations: [mdx(), sitemap(), tailwind(), react()],
});

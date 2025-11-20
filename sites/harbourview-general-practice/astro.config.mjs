import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://harbourviewgp.com.au',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory',
  },
});

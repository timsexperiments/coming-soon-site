import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind(), react()]
});
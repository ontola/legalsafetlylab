// @ts-check
import { defineConfig, envField } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  experimental: {
    env: {
      schema: {
        ATOMIC_SERVER_URL: envField.string({
          context: 'client',
          access: 'public',
          optional: false,
        }),
        ATOMIC_WEBSITE_SUBJECT: envField.string({
          context: 'client',
          access: 'public',
          optional: false,
        }),
      },
    },
  },
});

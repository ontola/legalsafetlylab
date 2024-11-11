// @ts-check
import { defineConfig, envField } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  prefetch: {
    prefetchAll: true
  },
  experimental: {
    env: {
      schema: {
        CACHE_MAX_AGE: envField.number({
          context: 'server',
          access: 'public',
          optional: true,
          default: 86400, // 1 day
        }),
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

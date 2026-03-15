import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';

export default defineConfig({
  site: 'https://www.kerneldev.com.ar',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap(), react(), tailwind({ applyBaseStyles: false, configFile: './tailwind.config.js' })],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      minify: 'terser',
      cssMinify: true,
    },
  },
});
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kernel-rosario.vercel.app',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
    },
  },
});

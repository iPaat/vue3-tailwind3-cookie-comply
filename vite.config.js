import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import minimist from 'minimist';

const { f } = minimist(process.argv.slice(2));

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/VueCookieComply', import.meta.url)),
    },
  },

  build: {
    emptyOutDir: false,

    lib: {
      formats: f === 'iife' ? ['iife'] : ['es', 'umd'],
      entry: resolve(__dirname, 'src', 'entry.esm.ts'),
      name: 'VueCookieComply',
      fileName: (format) => `vue3-tailwind3-cookie-comply.${format}.js`,
    },

    rollupOptions: {
      external: ['vue'],

      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});

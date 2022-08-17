import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/VueCookieComply', import.meta.url)),
    },
  },

  build: {
    lib: {
      formats: ['es', 'umd'],
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

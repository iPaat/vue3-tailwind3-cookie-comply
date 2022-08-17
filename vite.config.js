import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'vue3-tailwind3-cookie-comply',
      fileName: 'vue3-tailwind3-cookie-comply',
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

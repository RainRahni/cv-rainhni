import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
};
export default defineConfig({
  base: "/cv-rainhni/",
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

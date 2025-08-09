import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/tic-index-2/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          gsap: ['gsap'],
          glightbox: ['glightbox']
        }
      }
    }
  },
  define: {
    global: 'globalThis',
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  },
  base: './',
  resolve: {
    alias: [
      { find: '@components', replacement: resolve('src/components') },
      { find: '@pages', replacement: resolve('src/pages') },
      { find: '@utils', replacement: resolve('src/utils') },
    ]
  }
})

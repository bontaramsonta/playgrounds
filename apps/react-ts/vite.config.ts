import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'node:path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //@ts-ignore
    tsconfigPaths()
  ],
  mode: process.env.MODE ?? 'development',
  server: {
    port: 8080,
    strictPort: true,
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

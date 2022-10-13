import { buildSync } from 'esbuild'

buildSync({
  entryPoints: ['./dist/main.js'],
  format: 'cjs',
  bundle: true,
  platform: 'node',
  outfile: './bin/out.js',
  minify: true,
  // keepNames: false,
})
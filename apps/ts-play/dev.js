import nodemon from 'nodemon'
import c from 'chalk'
import { resolve, join } from 'path'
import { rm } from 'fs/promises'

(async () => {
  const l = (color, msg) => c[color].bold(msg) // colored label
  try {
    if (process.env.FRESH === 1) {
      await rm(join(resolve(), 'dist'), { recursive: true, force: true })
    }
    nodemon({
      exec: 'tsc && node -e \'import("./dist/main.js").then(module=>module.main())\'',
      verbose: false,
      ext: 'js,ts',
      watch: './src/**/*.ts',
      colours: true
    })
      .on('quit', () => {
        console.log(l('red', '[nodemon quiting] '))
        process.exit(0)
      })
      .on('watching', files => {
        console.log(
          l('green', '[watching] '),
          files.substring(files.lastIndexOf('/') + 1)
        )
      })
      .on('exit', () => {
        console.log(l('red', '[nodemon exiting]'))
      })
      .on('restart', files => {
        console.log(
          l(
            'red',
            '[nodemon restarted] '
          ),
          'files changed',
          files
            .map(file => file.substring(file.lastIndexOf('/') + 1))
            .join(', ')
        )
        // console.clear() // if you want clear console on restarts
      })
  } catch (err) {
    console.log(err)
  }
})()

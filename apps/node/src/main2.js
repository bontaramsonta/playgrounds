function readline() {
  return new Promise((resolve) => {
    process.stdin.on('data', (data) => {
      resolve(data.toString().trim())
    })
  })
}

async function main() {
  let x = parseInt(await readline())
}
main()

const fs = require('fs')

let str = ''

new Array(10000).fill('async').map((o, index) => {
  if (index % 10 === 0) {
    str += '\n'
  }
  str += `${o} `
})

fs.writeFile('./txt', str, err => {})

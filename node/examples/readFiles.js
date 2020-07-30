const fs = require('fs')

const files = fs.readdirSync('d:/watermark', {
  withFileTypes: true
})

files.forEach(file => {
  if (file.isFile()) {
    console.log(file)
  }
})

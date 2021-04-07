var { readFiles, statLines } = require('./file')

var files = readFiles('/Users/dascomsoft/Desktop/v10/admin', file => {
  return file.isDirectory() && (file.name === 'node_modules' || file.name === 'public')
}, file => {
  return file.isFile() && !/(vue|js|md|scss|css)$/.test(file.name)
})

var total = 0
var run = 0, need = files.length
files.forEach(file => {
  statLines(file.path, (err, count) => {
    total += count
    if (++run >= need) {
      console.log(total)
    }
  })
})
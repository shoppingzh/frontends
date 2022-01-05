var fs = require('fs')

// console.log(fs)

fs.stat('hello.json', (err, stats) => {
  if (err) throw err
  console.log(stats)
})

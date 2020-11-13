var fs = require('fs')
var { join } = require('path')
var { exec } = require('child_process')

function readFiles(path, ...filters) {

  var allFiles = []
  doRead(path)

  function doRead(path) {
    var files = fs.readdirSync(path, {
      withFileTypes: true
    })
    files.forEach(file => {
      var pass = filters.some(filter => filter(file))
      if (!pass) {
        if (file.isDirectory()) {
          doRead(join(path, file.name))
        } else {
          allFiles.push({
            path: join(path, file.name)
          })
        }
      }
    })
  }

  return allFiles
}

function statLines(path, callback) {
  exec(`wc ${path}`, (err, result) => {
    if (err) {
      callback(err)
    }
    console.log(result)
    var regExp = new RegExp(/\s*(\d+)\s*/, 'g')
    var exec = regExp.exec(result)
    if (!exec) {
      callback(null, 0)
    } else {
      callback(null, parseInt(exec[1]))
    }
  })
}

module.exports = {
  readFiles,
  statLines
}
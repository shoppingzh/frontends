var fs = require('fs')
var { join } = require('path')
var readline = require('readline')

/**
 * 读取项目中的所有文件（除符合过滤条件的文件外）
 * @param {String} path 项目路径
 * @param  {...any} filters 过滤条件，符合的条件将会过滤，可过滤目录或文件
 */
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

/**
 * 统计文件行数
 * @param {String} path 文件路径，如d:/1.txt
 * @param {Function} callback 回调
 */
function statLines(path, callback) {
  let total = 0
  const rl = readline.createInterface({
    input: fs.createReadStream(path)
  })
  rl.on('line', line => {
    if (line.trim().length < 3) {
      return
    }
    total++
  })
  rl.once('close', () => {
    callback(null, total)
  })
}

module.exports = {
  readFiles,
  statLines
}
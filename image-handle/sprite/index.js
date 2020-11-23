const spritesmith = require('spritesmith')
const fs = require('fs')

spritesmith.run({
  src: [
    './images/icons/pic.png',
    './images/icons/word.png'
  ]
}, function(err, result) {
  console.log(err)
  console.log(result)
  fs.writeFileSync(`./sprite.png`, result.image)
})

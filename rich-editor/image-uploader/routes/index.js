var express = require('express');
var multer = require('multer');
var path = require('path');

var router = express.Router();

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './upload')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
});

var upload = multer({
  storage: storage
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/file/upload', upload.single('file'), function(req, res, next) {
  res.send({
    name: req.file.originalname,
    url: 'http://localhost:3000/upload/' + req.file.originalname,
    location: 'http://localhost:3000/upload/' + req.file.originalname,
  })
})

// router.get('/upload/:filename', function(req, res, next){
//   var filename = req.param('filename');
//   console.log('下载文件：' + filename);
//   res.download(path.join(__dirname, `../upload/${filename}`), function(err){
//     console.error(err);
//   })
// })

module.exports = router;

var express = require('express');
var multer = require('multer');

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

router.post('/image/upload', upload.single('image'), function(req, res, next) {
  res.send('http://localhost:3000/upload/' + req.file.originalname)
})

module.exports = router;

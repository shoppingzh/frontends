var express = require('express');
var Mock = require('mockjs')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data= Mock.mock({
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
  })
  res.send(data)
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
  var callback = req.query.callback;
  var data = [1, 2, 3, 4, 5, 6, 7];
  if (callback) {
    data = `${callback}(${JSON.stringify(data)})`;
  }
  res.send(data);
});

module.exports = router;

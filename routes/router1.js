var express = require('express');
var router = express.Router();
var mysql = require('../mysql.js');  //调用MySQL模块
var arr = [];
var options = {};//mysql链接参数
mysql.setOptions(options);
mysql.query('SELECT * from work', function (err, rows, fields) {
  if (err) {
    console.log('[query] - :' + err);
    return;
  }
  arr = rows;
  console.log(rows);
});
/* GET home page. */
router.get('/a', function (req, res, next) {
  res.render('router1/index', { "title": "test", "title1": "test111", "comments": arr });
});

module.exports = router;  
var express = require("express");
var http = require("http");
var app = express();

////////////////////// 设置模板 /////////////////////////////  
var ejs = require("ejs");
//使用set方法，为系统变量“views”和“view engine”指定值。  
app.set("views", __dirname + "/views");
// 指定模板文件的后缀名为html  
app.set('view engine', 'html');
// 运行hbs模块  
app.engine('html', ejs.__express);

var router = express.Router();
var router1 = require('./routes/router1');

app.use(express.static(__dirname + '/'));
app.use('/router1', router1);
app.listen(3000);  
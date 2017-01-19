var express = require("express");
var http = require("http");
var app = express();

app.all("*", function (request, response, next) {
    response.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
    next();
});

app.get("/", function (request, response) {
    response.end("欢迎进入主页!");
});

app.get("/about", function (request, response) {
    response.end("欢迎进去about!");
});

app.get("*", function (request, response) {
    response.end("404!木有找到页面");
});
http.createServer(app).listen(1337);
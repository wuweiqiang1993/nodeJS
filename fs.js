var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open('inputs.md', 'a', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    fs.writeFileSync('inputs.md', 'Hello Node');
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    var data = fs.readFileSync('inputs.md');
    console.log("同步读取: " + data.toString());
    fs.closeSync(fd);
    console.log("文件关闭成功");
    console.log("准备删除文件！");
    fs.unlinkSync('inputs.md');
    console.log("文件删除成功！");
});

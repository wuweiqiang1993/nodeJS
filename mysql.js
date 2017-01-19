var db = {};
var mysql = require('mysql');  //调用MySQL模块
var arr = [];
var options = {
    host: '127.0.0.1',       //主机
    user: 'root',               //MySQL认证用户名
    password: '12345678',
    port: '3306',                   //端口号
    database: 'test',
};

db.setOptions = function (option) {
    var util = require('util');
    if (util.isError(option)) {
        return;
    }
    for (value in option) {
        if (!util.isError(option[value])) {
            options[value] = option[value];
        }
    }
}
db.query = function (sql, callback) {
    var connection = mysql.createConnection(options);
    connection.connect();
    //执行SQL语句
    connection.query(sql, function (err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        //关闭connection
        connection.end();
        callback(err, rows, fields);
    });

}
module.exports = db; 
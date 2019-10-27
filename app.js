/**  time:2019/10/23
 *   作者:农村的师傅
 *   功能:开启一个服务器
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(8090, function () {
    console.log('Example app listening on port 8090!');
});

{/* <script src='./http'></script> */}
// require 关键字 引入一个模块, COMMONJS引入模块的机制定义 规则
const http = require('http');
let i =0;
http
// 创建一个服务器 接收一个回调函数
    .createServer(function(request, response){
        response.end(`Hello World!${++i}`);
    })
    //3000 端口 localhost:3000
    .listen(3000);
    
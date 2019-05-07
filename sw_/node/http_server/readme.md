npm init -y ->新建package.json
- MVVM 前端新贵
    Model 数据 page({data:{
        legends:[]
    }})
    View 视图
    WXML 
    VM   模型层里面的 {{}} wx:for......  占位符 编译

- MVC 经典的Web开发模式
    Model => SQL
    View  => 静态页面
    Controller  =>路由 ,变量计算..

- WebServer 软件程序
    Web 服务器硬件运行WebServer(具有HTTP的功能)程序的
    ip地址 http协议 比特流 request 用户请求 response 回应
    http 协议的本质 不是常连接 断开 -> 又启动一个HTTP访问.....
    http://127.0.0.1:3000  ip+端口号
    端口 不只一个服务
    3306 MYSQL 
    80 Web服务
    http
        .creatServerfunction((request, response){
            response.end('hello')
        });
        .listen(3000)



request 用户 N  Web Server 一直在3000端口上
request 就能找到店, 每位用户到达, 触发 事件, 调用createServer 回调函数 , request 用户身份, response 响应请求
http 响应之后就断开 response.end()
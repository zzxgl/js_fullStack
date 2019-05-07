.readdir
    读取目录内容 IO操作 打开文件 读取到内存 是异步(Async)的
    readdirSync 同步 
    同步 阻塞执行

    js 是单线程的, 用回调或Promise, 释放主线程的控制权,  主要因为js 在早期是前端DOM的编程,用户交互比较多, 等到执行完之后再通过event-loop机制, 拿回控制权(callback resolve)
    来到了node ,js获取了服务器端的能力,
     readdirSync()
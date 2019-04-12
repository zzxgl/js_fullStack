node 让 js 来到了后端

服务器,  Linux  
文件系统操作 fs
连接数据库 bd
js是单线程语言 异步会导致页面的僵化
没有DOM

1. node执行js 后端的方式执行js
2. utf8 指定文件输出的格式为中文
3. readFile(path,'utf8',function(err,data){}) 读取文件内容API  
文件读取是需要花时间(定位文件参数1, 打开文件 , 将文件内容读到内存中,输出到命令行)  是异步的  文件越大的时间越多
js里面的异步 
异步的解决方案:
1. callback() 回调函数 走完之后,执行函数
2. Promise (类)  用与处理异步耗时异步问题,为了防止回调地狱,看到耗时问题就用出一个promise实例
            封装一个异步(耗时任务),但是并没有执行
            .then() API 将内部的耗时内务运行起来
            在多个文件嵌套时具有优势
            resolve 控制权(之前在主线程上面)交付给then后(保证了异步问题的同步化) resolve(data)传给then, .then()才会执行
            reject 失败 catch(e){      }
fileAPromise
    .then(data => {
        console.log(data);
        return fileBPromise;
    })
    .then(data=>{
        console.log(data);
    })

//fs文件模块 node后端开发的一部分
const fs = require('fs');
//读文件是异步的 使用回调函数解决异步的问题
// fs.readFile('./a.txt', 'utf8', function (err, data) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
//     fs.readFile('./b.txt', 'utf8', function (err, data) {
//         console.log('---------------------', data);
//     })
// })

// 将callback处理异步的方案抛弃
const fileAPromise = new Promise((resolve, reject) => {
    // 花时间的承诺 实例化一个promise 耗时任务放置在promise里面 resolve兑现
    fs.readFile('./a.txt', 'utf8', (err, data) => {
        // 流程的控权怎么移交 (代码执行的控制权怎么交接的问题) 控制权交给
        resolve(data);
    })
});
const fileBPromise = new Promise((resolve, reject) => {
    fs.readFile('./b.txt', 'utf8', (err, data) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(data);
        }
    })
})
fileAPromise
    .then(data => {
        console.log(data);
        return fileBPromise;
    })
    .then(data=>{
        console.log(data);
    })
// fileBPromise
//     .then(data =>{
//         console.log(data);
//     })
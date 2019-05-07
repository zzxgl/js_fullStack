const fs = require('fs');
const files = [];
//一步步走下去
const walk = function (path) {
    fs//链式调用
        .readdirSync(path)
        .forEach(file => {
            const newPath = path + '/' +file;
            const stat = fs.statSync(newPath);//得到文件的状态信息
            // console.log(stat);
            if(stat.isFile()) {
                if(/\.js$.test/(file)) {
                    file.push(file);
                }
            } else if(stat.isDirectory()){
                walk(newPath);
            }
            //文件?
            //  js文件?正则
            //目录?
            //  递归
            // console.log(item);
        })
    // fs.readdir(path, function (err, items) {
    //     console.log(items);
    // })
    // 回调函数
    // console.log('啦啦啦啦')
}
walk('./src');
console.log(files);
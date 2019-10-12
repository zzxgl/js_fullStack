const err = (message) =>{
    throw new Error(message)
}
function sum(num = err('first param is not defined'), otherNum = err('second param is not defined')) {
    console.log(num+otherNum);
}
sum(10,10)
// console.log(1,2) 3 
// console.log(undefined, 10 ) 报错 第一个参数没有定义
// console.log(10) 报错 第二个参数没有定义
//  参数里面设置默认值  js里面的参数可以是任意类型 

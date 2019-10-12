// 解构es6 {}参数部分解构  将一个大对象里面的一部分按照key解出来
// 1. userObj 一个参数带来了新的问题 代码的函数编写者,
// 对于user里面的key 要去了解 只需要用一部分, 解构可以帮助提高代码的可读性 
// 
function information({name,age,height}) {
    console.log(name, age, height)
}
const user = {
    name:'杨鹏',
    age:22,
    height:1.8,
    sex:'男',
    hobbies:['打游戏']
}
information(user);

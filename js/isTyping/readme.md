类型检测是js 的考点
1. Object.prototype.toString() 弥补typeof不足 []  返回值"[object object]" 
2. 通过.call 借给Array 用 
Object.prototype.toString.call([])  函数运行时内部this指向[]   
3. js 的面向对象
 Type{isString}
4. 立即执行函数 +  嵌套函数定义 形成闭包 type就在这些嵌套函数被调用时可以引用
# Object 复杂数据类型的顶层  
- Array 可遍历的对象 []
- JSON object 对象字面量 可枚举的对象 for(key in )
- function  是一等对象 
 typeof 不靠谱 
 toString 字符串化   
 call 和 apply 函数上的API  动态指定内部this的指向
 简单类型没有prototype 不是对象
 
 - 立即执行函数 (function (type) { console.log(type)})('String')  

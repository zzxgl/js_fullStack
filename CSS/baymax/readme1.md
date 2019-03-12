# 作用域 scope
document DOM
getElementsByTagname
getElementsByClassName
querySelector
querySelectorAll
window BOM
全局定义了var name = "liyu";
全局变量 前端 js window（顶级对象）
局部变量 function(){}
window js 是一个脚本语言，内嵌在浏览器中的脚本语言，与其他语言不一样的地方在于他有一个顶级的window 全局变量挂载在window 上
console.log(name); console.log
(window.name) ;
window类型 typeof window 
数字，字符串，null,undefined ,布尔值
symbol object
const let 比var 优秀的地方 遵守块级作用域

const 遵守块级作用域
全局-函数局部-块级作用域
scope 范围
settimeout 定时器， 异步内置函数 
<!-- 表达多久之后去做什么。 -->
for循环 立即同步执行
1000s 之后 i var 变成了10
let 块级作用域 for {
块级作用域 let }
1000 后，

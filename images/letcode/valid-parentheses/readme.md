数值类型  字符串 null undefined 布尔值 基本类型
其他都是对象 object Array可遍历的对象  for（）
JSON Object 对象字面量 可枚举的对象
function 也是对象
document,querySelectorAll('a');伪数组/类数组
arr.push()调用对象的方法
- 字符串是字符的数组具有
.length str[0]
- 运算符匹配的问题的时候，选择数组作为数据结构
只在顶部做操作(push pop) 栈 stack
算法+数据结构 “（）”
sta = []表示这个栈为空
1. ( sta.push("(")) 入栈 sta.length = 1
sta[0] = ")"
2. )栈不为空， 跟顶部元素进行比较，如果是一对，
顶部的元素pop（）
或者 Push 为新的顶部
3. sta 为空 true| false


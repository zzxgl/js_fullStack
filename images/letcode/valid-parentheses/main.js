// let arr = []; //数据集合
// arr.push("{");
// console.log (arr,arr.length);
// console.log(typeof arr);
// arr.push("}");
// console.log(arr);
// arr.pop();
// // 要删除并返回数组的最后一个元素，请使用 pop() 方法。
// console.log(arr);
// arr.shift("[");
// // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
// console.log(arr);
// arr.unshift("]"); 
// // unshift()  向数组的开头添加一个或更多元素，并返回新的长度。
// console.log(arr,arr.length);
// arr.shift("[");
// console.log("---------",arr);
// arr.forEach(item => {
//     console.log(item);
// })


// 如何来做匹配规则？
let obj = {};
obj["{"] = "}"; //匹配
obj["("] = ")";
obj["["] = "]";
//"()"; sta[0]= "(" ")"
let stack = ["("];
let str = ")";
if(obj[stack[stack.length-1]] === str ){
    stack.pop();
}
if(stack.isEmpty === true ){
 //如果栈是空的
 stack.push(str[i]);
} 
console.log(stack.length);                   
                                         // 思想
                                         // 1. 空栈先入栈
                                         // 2.将栈顶元素匹配的消除规则元素与待入栈相比较，相同则pop，栈顶元素。否则入栈
                                         // 3. 重复2
                                         // 4. 判断数组的长度，返回bool







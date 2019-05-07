// 计算年终奖    会计 
// 绩效 S  5
//      A  3
//      B  2
//      C  1
//      D  
// 一个个策略  
var performanceX = function () {
    return 60;
}
var performanceS = function () {
    return 5;
}
var performanceA = function () {
    return 3;
}
var performanceB = function () {
    return 2;
}
var performanceC = function () {
    return 1;
}
var performanceD = function () {
    return 0;
}
var calculateBounce = function (performancelevel, salary) {
    let level = 0;
    switch (performancelevel) {
        case "X":
            level = performanceX();
            break;
        case "S":
            level = performanceS();
            break;
        case "A":
            level = performanceA();
            break;
        case "B":
            level = performanceB();
            break;
        case "C":
            level = performanceC();
            break;
        case "D":
            level = performanceD();
            break;
        default:
            break;
    }
    return salary * level;
}
// 可以如何优化? 分支太多  计算策略太简陋了
// 会计发钱的,制定发钱的策略区分开来
console.log(calculateBounce('X', 30000));
console.log(calculateBounce('S', 20000));
console.log(calculateBounce('B', 10000));

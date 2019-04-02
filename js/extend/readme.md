- Person 由prototype属性来解决它自身构造器之外的原型上的属性或方法
- 原型对象会有它的构造函数 Person.prototype.constructor属性
- 第三者? 实例
# 实例 跟Person 有什么关系, Person.prototype 有关系 
 1. Person函数运行 new的方式运行 this=>new Object();
 2. zl 怎么拿到Person.prototype原型对象上定义的方法   __proto__属性指向Person的原型对象 原型继承的关系
    zl.__proto__=== Person.prototype
 3. 方法有prototype属性, 值为对象  开支
 4. 任何对象都一定有__proto__属性指向它的原型对象  zl
 5. 原型对象上有一个额外的construct 属性 指向谁是它的构造函数
 
 原型链  
 
 
 
 - js的实例和类其实不是java等语言的血缘关系 
 - zl 实例是怎么来的呢? 是new Person()出来的
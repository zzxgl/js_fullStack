class 类 js 现在也有了,
es5 没有class 关键字 .怎么做面向对象呢?
js 是面向对象的, Function 就是一等对象
普通函数 Player()
new Player(); 作为类的构造函数被运行.
function Player(){this } 即使构造函数也是类本身  this一直都在,是函数里面的常在,指针
this 指向一个object { } this.name =name 

函数运行方式的不同,里面的this的指向不同
  - 普通函数被运行的时候,里面的this指针没有使命,全局(前端window,node指向global) undefined
  - 函数作为构造函数被运行时, newPlayer(); this会指向 实例化的对象, 构造函数需要的过程,
- 函数可以用来构造类 js 借,通过this
- this 一直存在的 ,指针
  函数的运行方式,会导致this的指向不一样
  普通函数 this =>全局(window||global)
  如果代码启动严格模式("use strict"; ), 可规避this乱指的问题    作为普通函数被运行undefined
- new 初始化过程之中发生了什么
  new Player(); 将函数作为构造函数运行,this 指向object {}
  this=> { } construct
  this.name=name
- 构造函数(construct)    
- win 函数, 作为对象的方法被调用
player1.win();
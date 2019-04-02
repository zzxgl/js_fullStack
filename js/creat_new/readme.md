#new 的时候发生了什么?
1. 实例化一个新的对象,并且是这个类的实例
2. 构造函数被执行,this指向实例 
constructor 运行慢半拍 
 - 在面向对象里面是构造函数为他人服务的, 为this服务 this由函数的运行方式决定
 this->实例   this->任何对象 call  eg:Otaku.call(obj,'yh', 18);
3. Otaku.prototype 值是对象
- 原型对象
 任何函数都拥有一个 prototype属性 才能构建类
  火车 constructor 车头 
  车头勾着车身 原型链
#构造函数的运行方式是以new的方式被运行,内部的this 动态的指向实例化的this

 #空对象? 
 开始是空的 
 之后通过运行构造函数 拿到了构造函数里面的属性
 最后又拿到了prototype上定义的属性和方法

#对象? 由属性和方法构成 

 #instanceof 
 xf instanceof Otaku 一个对象实例
 typeof 类型

 # __proto__ 私有属性  
 任何对象都有这个属性
 可以让对象私有的指向
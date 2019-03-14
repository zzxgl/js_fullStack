//Player类 构造函数
"use strict"; //使用严格模式
function Player(name) {
    //constructor
    //全局||指向的对象
    console.log(this); //打印Player {}
    this.name =name;
    this.enemy=null;  //null 定义了,但是没有赋值
}
//js 类的方法要定义在prototype上
Player.prototype.win=function(){ //原型上面添加一个方法  prototype 可以理解成一个接口集合Player类都能调用win() 对象
  console.log(this.name+" win");
}
Player.prototype.lose=function(){
    console.log(this.name + " lose");
}
//Player("皮蛋");//普通函数调用
//object{} =>player1
var player1 = new Player ("皮蛋");//  new 开辟了一个存储空间 然后将地址给了player1
var player2 = new Player("小乖");
player1.enemy=player2; //
player2.enemy=player1;
//console.log(player1.name);

player1.win(); //win()函数,作为对象的方法被调用    this会指向对象本身
player2.lose(); 


//Player类 构造函数
function Player(name) {
    //constructor
    console.log(this);
    this.name =name;
}
var player1 = new Player ("皮蛋");
var player2 = new Player("小乖");
console.log(player1.name);

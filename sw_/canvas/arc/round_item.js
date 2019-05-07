/**
 * @author 郭琳
 * @desc 画星
 * 一个功能一个类 封装
 * 多人协作 模块化
 * 业务代码(查找元素 监听事件等等 每天都得做) 要抽离 要封装
 */ 
function RoundItem(index, x ,y, ctx){
    this.index = index;
    this.x = x;
    this.y =y;
    this.ctx =ctx;
    this.r = Math.random()*2 +1;
    let alpha = Math.floor(Math.random()*10+1)/10/1.5;
    this.color = `rgba(255, 255, 255 , ${alpha})`;
}
RoundItem.prototype.draw = function(){
    this.ctx.fillStyle = this.color;
    this.ctx.shadowblur = this.r*2;
    this.ctx.beginPath();//本次绘制的开始
    this.ctx.arc(this.x, this.y, this.r, 0 ,2*Math.PI , false);
    this.ctx.closePath();//本次绘制的结束
    this.ctx.fill();
}
RoundItem.prototype.move = function(){
    this.y -=0.15;
    this.draw();
}
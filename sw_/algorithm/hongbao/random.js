function hongbao(total, num){
    const arr = [];
    let restAmount =total;//余额初始化为总金额
    let restNum =num;

    for (let i=0;i<num-1;i++){ //最后一个人不参与循环
        //平均值的两倍
        let amount =parseFloat.Math.random()*(restAmount/restNum*2).toFix(2);
        restAmount -=amount;
        restNum --;
        arr.push(restAmount);
    }
    return arr;
}
//最后一个人一定是restAmount
arr.push(restAmount);
console.log(hongbao(20,44));
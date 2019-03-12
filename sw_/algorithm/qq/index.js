/*let qq_number="631798524";
//函数表达式
/** 
 * @param qq type String
 * @return type Boolean
 * @功能 判断QQ号是否合格
 * @desc 只能是数字 长度5位号以上,13位以内
 */
/*const is_valid_qq=(qq)=>{ //箭头函数,省去function 左边是参数,右边是函数体
    if(!qq) return false;//qq没有传入
    if(/^[0-9]{5,13}$/.test(qq)){
        return true;
    }
    else{
        return false;
    }
    //console.log(qq);
    //'length
    return true; //先写return 
};
console.log(is_valid_qq(qq_number));*/


//选择了一种数据结构,数组
let enc_qq = [6,3,1,7,5,8,9,2,4],     //定义变量
qq=[],
head=0,                             //指针  star 开始
tail=enc_qq.length;                //指针 end 尾部
while(head<tail){                 //拿到一个正确数字
    qq.push(enc_qq[head]);       //数组用下标访问
    head++;                     //指针往后一个 
                               //第二个数移到队尾?
    enc_qq[tail]=enc_qq[head];
    tail++;
    head++;
}
console.log(qq);
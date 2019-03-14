如何实现红包算法
固定的金额的红包,由若干人来抢 ,规则?

1. 抢到的金额之和等于红包金额,不能超过也不能少.
2. 手气王 0.01至少
3. 金额随机,随机数,公平,每个人抢到金额的概率要相同

计算过程, 变量计算的本质
发钱? total restAmount-- (total和restAmount初始值是相等的)  restNum-- ==num(人数)
- 随机一次,restAmount = total-随机数
........ restAmount -=随机数
restNum--
最后一个人, 拿剩下的钱(没有办法随机)  for(i=0;i< num-1;i++)
每次随机,钱数就是我们需要的,push 到数字里面
总合,  剩下的金额 

- Math 是数学对象
Math.random()
parseFloat() 解析为浮点数
Math.random().toFixed(2) 随机数只保留两位小数
类型转换"23.1"=> 23.1 parseFloat
       "23.1"=> 23 parseInt 
       2.123.toFix(2);   2.12
0-9之间的整数
最小值和最大值之间的数
Math.random()*(max-min)+min
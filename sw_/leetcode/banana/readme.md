蜗牛爱吃香蕉

N piles bananas 每pile bananas 有不同数量的bananas

[3,6,7,11]
[30,11,23,4,20]
每个小时可以吃某一pile里的n只香蕉,规定H小时内一定要吃完,吃每把的时候,要不就是吃 m 只,要不就吃剩的


koko bananas
1. 把香蕉吃完函数 canEatAllBananas  
 h 来自于吃法规则 一小时mid 一次只吃一把
 return h>=H 
2. while 去疯狂的尝试 lo 
1,2,3,4,5,6,7,8,......Math.max(...piles)
能拿到,但是太慢了
最大的来吗?
中间 最大概率最快的,二分查找 优化查找的效率


简单查找 时间开销是n  
二分查找的写法是有规律的
x  y 要找的最小的可以的min 可以来优化的
找中间 (mid = x+(y-x)>>1),中间的值小了,mid+1 为新的x 中间值大了, mid-1 为y
log2N

... 展开数组
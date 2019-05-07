LRU 缓存(不用每次都去硬盘里面找, 在内存中缓存)  最近最少使用原则
Least Recently Used
操作系统 
node fs  硬盘, 内存
内存精贵  有空间限制的
  硬盘 用不完

内存是代码的运行空间 空间是有限的  
 假设内存空间单位为2 存放变量 3个?

  <!-- 1   put(1)
  2   put(2)
  3   放不下了   1  2   -->
  [] 内存  maxlength为2
  原则: 最近最少使用

  <!-- 
  1  put(1,1)
  2  put(2,2)
  3  get(1) 返回1  1最近使用,2最近最少使用
  4  put(3,3) 3 进去了 2丢掉
  5  get(2)  找不到  
  6  put(4,4) 4 进去了  1丢了
  7  get(1)  找不到  -1
  8  get(3)  3
  9  get(4)  4
   -->

- cache(缓存) LRUCache
  get
  set 

- JSON 可以根据key获取value 和数组不同(下标)
- 对象字面量有利于get 和set 方法的实现
- 最近最少使用, JSON 搞不定
  数组可以 [0] [length - 1]
  在一头进行操作
  一半的工作交给数组, 一半的工作交给对象字面量
  让它们成为LRUCache两个属性

  - get set arr+obj 组织在LRUCache里面
  indexOf()
  pop()
  unshift()
  splice()
  
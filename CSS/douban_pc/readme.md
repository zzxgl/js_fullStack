pc 相对于 mobile 更复杂
强调布局layout
文档流 从上到下 ,从左到右
flex 要使用前思考一下 , 最新css技术 
兼容性问题  


#float 是魔鬼,使用float会影响其他相邻的元素 
离开文档流 float 跟 position:absolute 绝对定位不能用来做布局

#PC端 先布局layout 一般使用float
#或者inline-block 行内块级元素  有Bug 兄弟间的间隔  相对年轻一些,ie8以下不支持
1. <div class="col-8"></div><div class="col-4"></div>
2.  父容器font-size:0;  所以空格的长度也为零
- display: inline; 行内元素没有宽高,只能根据内容撑起

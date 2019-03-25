#界面
水平方向禁止滚动条,垂直方向出现滚动条
- max-width: 960px;
 非 pc 100% pc 960px
margin: 0 auto;
   左右居中    
   
- min-height: 100%
- 弹性布局
 flex: 1; 等比例分布  父元素是弹性的 子元素是固定的
 flex-grow:1  分配剩余空间 
 flex-grow 放大 flex-basis flex-shrink缩小 flex-wrap 
 当网页由Pc到mobile时,缩小阵仗  






经验:简单的适配PC到mobile 照顾所以的用户 
在PC端大手大脚一点 ,max-width  magin:auto 
padding margin  页面显示比较空旷简约
在mobile flex-shrink 让关键部分坚挺一点   其他的部分缩,关键的地方shrink为0不缩小
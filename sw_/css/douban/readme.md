- 前端该做的,盒子模型
  html结构写好,
- 要有一定的才css命名词汇量
  feed-items feed-item  
- 标签的语义化
a 代替div 
- 内容隐藏
 -webkit-line-clamp:3;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;


高度用padding-top 宽高比










#界面,切分 切图
- 按模块来切 .feed-item 词汇量
- 取名块级元素 利用块级元素来做盒子 不要在意那些细节
从外到内,从上到下,从左到右 
写良好结构及语意化的html,
.feed-content>.photos+h3
.author
两列式 main 和aside
盒子的大小一样 可以设置一样的类名
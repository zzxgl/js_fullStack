#BFC是什么　Block Formatting Context
BFC 块级格式化上下文
# BFC原理（渲染规则）
1. 正常的文档流会存在边距折叠的问题（父子元素，兄弟元素），水平方向的外边距不存在折叠的情况（因为水平方向不存在块级元素）BCF可以防止外边距重叠 
2. BFC容器不会与浮动的box重叠
3. BFC在页面上是一个独立的容器,最显著的效果就是建立一个隔离的空间,外面的元素不会影响容器的元素,反之,里面的容器夜也不会影响到外面的元素

#哪些属性可以将正常容器变为BFC容器
1. float的值不为none; 默认创建为BFC容器,
2. 绝对定位元素 position的值不是static或者relative
3. display的值是inline-block、table-cell、flex、table-caption或者inline-flex   表格单元都会使容器变为BFC容器
4. overflow的值不是visible

计算BFC容器的高度时,浮动元素也会参与计算(也是通常清除浮动的原理)
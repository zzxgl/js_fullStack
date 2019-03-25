#浮动(只有左右) 导致脱离文档流 不占据父容器的高度 父容器的高度塌陷 影响页面的布局
 float:left; 1234         float:right;        4321
#清除浮动  五种方法
- <div style="clear:left"></div> 清除左浮动  both 清除左右都行
  在父容器的底部加上

- 利用 BFC(块级格式化上下文)
 在父容器增加属性overfloat:hidden;可以触发bfc 抵消子容器浮动造成的父容器高度坍塌
 overfloat 属性的值 hidden, scroll, auto
- 伪元素  给父元素添加一个类名clearfix 使用css 中的伪元素对父容器进行清除浮动
  .clearfix::after{
      content:'';
       clear:both;
       diaplay:block;
  }
- 给父容器添加一行css  
.content{
    float:left;
}
不建议使用 会影响后面子元素的布局
- 一个更优雅的改进  --尼古拉斯大师 方法
把display设置为table, 默认创建一个表格单元,这个匿名的表格单元可以直接触发BFC

.clearfix::after{
    content:'';
    display:table;  会默认直接触发BFC
}
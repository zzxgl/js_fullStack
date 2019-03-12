# WEUI
来自于微信的前端开发框架，
- 微信生态 公众号 小程序
weui.css在基础上做开发
- APP生态
内嵌的HTML
- PC  传统网站 bootstrap

- 界面的编写过程
 - HTML 结构，独立于样式
 DOM文档流，从左右， 从上到下
  - 取类名很重要
  BME 规范
  weui-cell__hd
  weui-cell__bd
  weui-cell__ft
  通用的词汇 hd+bd+ft
 - 在写样式

- 离开文档流
    里面的元素不再受影响，before absolut 脱离了正常的文档流
    weui-cells border-top 使用盒子模型，元素在页面上的占位，是需要综合考虑，内容w*h padding border border margin position
    - 1px 边框
    css 像素 1px 在手机里
    硬件物理像素 retina 2px 3倍retina 3px
    transform scaleY(.5)压一下
    浏览器不会处理小数点像素 transform-origin :基点，那个点不动上边线，从下往上，scaleY


    - flex 不受块级的约束，他的内部是一个新世界 弹性布局是父与子们一起的布局
    好用的对齐方式 align-items 纵轴对齐 居中 justify-content 横轴在一堆子元素，只给一个元素设置flex:1; 这个元素成为主元素
    其他元素占完自己该占的盒子模型的内容后，余下的空间都交给主体元素
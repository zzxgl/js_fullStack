- 小程序开发工具, 初始化了一个项目框架
  小程序是架构在微信(原生APP),使用前端技术和思想,来快速开发,一份代码,到处运行
  不用下载
  不用写两次
  快速高效
- html =>wxml (新标签)
  weixin wxml? xml? 为了它的性能以及新功能,有些新的标签 view = div 
  css  =>wxss 
  js   => js bindtap =>onclick
  page = wxml + wxss + js
  小程序就是一个个page组成,每个page又由这三部分组成



- MVVM 
  只要你有了数据, Model,在js中用的data声明
  page({
      data:{
          legends:[]
      }
  })
  view 视图层 WXML 等着数据编译输出的html模板 {{}}
  指令,wx:for
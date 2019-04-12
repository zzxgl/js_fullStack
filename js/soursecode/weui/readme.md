stylus
1. @import 文件引入,一个文件只做一件事,有利于维护代码的维护及管理 多人协作
/base/reset 基础的reset任务 
2. base 核心  widget 前端的一个插件
@import 让我们可以做文件的分离和管理 多人协作,目录让我们看到了思想及野心
variable 当是个大项目时,有大量的变量要维护,variable 目录
 -webkit-text-size-adjust 100% 禁止浏览器改变字体大小

 weui.styl 入口文件 单点入口
 @import 负责串起各个部分
 base / widget 两大组成部分  
 fn 枢纽 将文件组织起来 
 - reset.styl
 - variable 配置文件
  - global.styl
  - weui-button.styl
 - weui-button
 mixin 混合 实现代码的复用
box-sizing border-box border以内都算盒子的宽高
unit()内置函数
行高 height/fontsize 
&选择上一级的选择器
:not(.weui-btn_disabled) 选择器 not排除 
 transform scale(0.5)
    transform-origin 0 0 默认中心 0 0 左上角
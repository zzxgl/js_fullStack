- wxml 是模板, {{}} 是要被编译的,  MVVM 
用户看到的view  不是wxml  是wxml被js里面的data填充编译后的页面(page 状态会改变的) 是 wxml+js+wxss 合体 compile
- setDate({
    数据
}) 触发 重新compile
- 我们会在wxml里面把所有的逻辑及对数据的渴求都表达出来,在某一刻页面之后显示当前状态的页面状态 跟数据相关  
状态 由数据决定
改变数据, setData 界面自动变
数据驱动界面 MVVM 
数据要和界面状态唯一

- todos
健身 
表单
js dom编程加todos [] appendChild
data:{
    todos:[]
}
form submit
this.setData()

- {{js 运行区域 }}
- input 有意思? => todos
- wx     小程序API
wx:if  设置运行逻辑
- bind   小程序事件
bindgetuserinfo  
- block区块 不会出现在页面上



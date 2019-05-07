Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    //用户信息是否给你  wx.canIUse() 是否可以使用按钮上面的开放类型 获取用户信息
    addShow: false,
    addText: '',
    todos: []
  },
  addInput: function (event) {
    console.log(event)
    this.setData({
      addText: event.detail.value,
    })
  },
  getUserInfo: function (event) {
    // console.log(event)
    this.setData({
      // MVVM编程 响应式(js) 状态改变
      userInfo: event.detail.userInfo,
      hasUserInfo: true
    })
  },
  addTodo: function (event) {
    //-输入框有内容 -todos setData()重新绘制页面  - 退出输入状态
    if (!this.data.addText.trim()) {
      return;
    }
    let todos = this.data.todos;
    todos.push({
      id: new Date().getTime(),
      title: this.Data.addText,
      status: '0'
    })
    this.setData({
      todos
    });
    this.addTodoHide();
  },

  addTodoShow: function (event) {
    this.setData({
      addShow: true
    })
  },
  addTodoHide: function (event) {
    this.setData({
      addShow: false
    })
  }
})
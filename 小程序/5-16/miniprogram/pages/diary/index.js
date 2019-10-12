// miniprogram/pages/diary/index.js
// 引入全局变量 app.json
const app = gettApp()
const globalData = app.globalData
import {
  jscode2session, getEmotionByOpenidAndDate, addEmotion
} from'../../lib/api.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeEmotion: 'serene',
    todayEmotion: '',
    avatarUrl: globalData.avatarUrl,
    // globalData全局变量  avatarUrl存在全局变量
    nickname: globalData.nickname,
    emotions: ['serene', 'hehe', 'ecstatic', 'sad', 'terrified'],
    colors: {
      serene: '#64d9fe',
      hehe: '#d3fc1e',
      ecstatic: '#f7dc0e',
      sad: '#ec238a',
      terrified: '#ee1aea'
    },
    daysStyle: [],
    auth: -1,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 封装一下获取用户权限的方法
  getScope(success, fail, name='scope.userInfo'){
    wx.getSetting({
      success:(res) =>{
        if(res.authSetting[name]) {
          typeof success === 'function'
        }
      },
      fail:() =>{},
      complete:() =>{}
    })
  },
  getUserInfo(){
    if(!globalData.nickname || globalData.avatarUrl){
      this._getUserInfo((res) =>{
        this.setData({
          nickname:res.nickname,
          avatarUrl:res.avatarUrl
        })
        globalData.nickname = res.nickname
        globalData.avatarUrl = res.avatarUrl
      })
    }
    const that = this
    let openid = wx.getStorageSync('openid')
    function callback(){

    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
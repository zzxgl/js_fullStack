// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    // indicatorDots: true,
    // autoplay: true,
    // interval: 5000,
    // duration: 1000,
    // indicatorColor:"red",
    // current:1,
    city:"南昌",
    items:[]
  },
  onLoad(){
    let that = this;
    wx.request({
      url: "https://www.easy-mock.com/mock/5cbeb41dd2955f5e587f9355/movie/",
      data: {},
      method: "GET",
      header: {"Content-type": "application/json"},
      success: function(res){
        console.log(res);
        that.setData({
          items: res.data.data.movieList
        })
      }
    })
  },
})


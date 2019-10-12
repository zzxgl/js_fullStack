const app = getApp()

Page({
  data:{
    files:[]
  },
  chooseImage(){
    let that = this
    wx.chooseImage({
      sizeType:['original','compressed'],
      // 原图和压缩图都行
      sourceType:['album','camera'],
      // 指定可以调用相册和摄像头
      success(res) {
        console.log(res)
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        })
        const filePath = res.tempFilePaths[0]
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)
        wx.cloud.uploadFile({
          filePath,
          cloudPath,
          success(res) {
            console.log('上传成功',res)
          }
        })
      }
    })
  },
  previewImage(e) {
    console.log(e)
    wx.previewImage({
      // 当前图片的http链接
      current: e.currentTarget.id,
      // 需要预览的图片链接列表
      urls:this.data.files
    })
  }
})
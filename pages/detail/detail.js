// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoInfo:[],
    // 推荐视频
    otherList:[],
    // 评论列表
    commentList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // console.log(options)
    let videoId=options.id;
    this.getCurrentVideo(videoId)
    this.getOtherList(videoId)
    this.getCommentList(videoId)

  },
  // 根据视频的id获取视频的详情
  getCurrentVideo(videoId){
    let that=this
   wx.request({
     url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/videoDetail?id='+videoId,
     data: {},
     method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     // header: {}, // 设置请求的 header
     success: function(res){
       // success
       //console.log(res)
       if(res.statusCode===200){
         that.setData({
          videoInfo:res.data
         })
         
       }

     },
     fail: function() {
       // fail
     },
     complete: function() {
       // complete
     }
   })
  },
  // 根据推荐id获取视频
  getOtherList(videoId){
    let that = this
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/otherList?id=' + videoId,
      success(res){
        console.log(res)
        if (res.statusCode===200){
          that.setData({
            otherList:res.data
          })
        }
      }
    })
  },
  // 评论列表
  getCommentList(videoId){
    let that = this;
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/commentLIst?id='+videoId,
      success(res){
        console.log(res)
        if(res.statusCode===200){
          that.setData({
            commentList:res.data
          })
        }
      }
    })
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
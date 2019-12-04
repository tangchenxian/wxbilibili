Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的首页导航的索引
    currentIndexNav:0,
    // 首页导航栏数据
    navList:[],
    // 轮播图数组
    swiperList:[],
    // 视频列表数据
    videosList:[]
    
  },
  // 点击首页导航按钮
  activeNav(e){
// console.log(111)
this.setData({
currentIndexNav:e.target.dataset.index 

})

  },
  // 获取首页导航数据
  getNavList(){
    let that=this
wx.request({
  url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList',
  data: {},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
   
    //console.log(res)
    if(res.data.code===0){
      that.setData({

       navList:res.data.data.navList

      })
    }
    // success
  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
})

  },
  // 获取轮播图数据
  getSwiperList(){
let that=this
wx.request({
  url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/Swiper',
  data: {},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    // success
    if(res.data.code===0){
      console.log(res.data.data.swiperList)
      that.setData({

        swiperList:res.data.data.swiperList
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
  // 获取视频列表
  getVideoList(){
    let that=this
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/videoList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res)
        // success
        if (res.statusCode === 200) {
          that.setData({
            videosList: res.data
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1. 获取首页导航数据
    this.getNavList();
    // 2获取轮播图数据
    this.getSwiperList();
    // 获取视频列数数据
    this.getVideoList();
    
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
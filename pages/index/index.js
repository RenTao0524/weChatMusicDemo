//index.js
//获取应用实例
const app = getApp()
Page({
  // 下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    wx.stopPullDownRefresh()
    this.onLoad()
    setTimeout(function () { wx.hideNavigationBarLoading() }, 2000)
  },
  data: {
    navigationBarData: [
      {
        text: '音乐',
        url: 'music',
        color: 'red'
      },
      {
        text: '视频',
        url: 'video',
        color: ''
      },
      {
        text: '电台',
        url: 'radio',
        color: ''
      }
    ],
    navItem: 'music',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  tapName: function (event) {
    console.log(event)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickMe: function() {
    this.setData({ msg: 'demo'})
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 导航栏切换 
  changeNav(event) {
    // for (var i = 0; i < this.data.navigationBarData.length; i++) {
    //   console.log(this.data.navigationBarData[i])
    //   if (event.currentTarget.dataset.url === this.data.navigationBarData[i].url) {
    //     this.setData({ 'navigationBarData[i].color': 'red' })
    //   }
    // }
    this.setData({ navItem: event.currentTarget.dataset.url})
    
    console.log(event)
  }
})

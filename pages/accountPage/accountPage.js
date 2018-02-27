// pages/accountPage/accountPage.js
const app = getApp()
Page({
  data: {
    userInfo: {
      avatarUrl: '',
      nickName: ''
    },
    userList: [
      {
        label: '动态',
        amount: '3'
      },
      {
        label: '关注',
        amount: '7'
      },
      {
        label: '粉丝',
        amount: '13'
      },
      {
        label: '我的资料',
        amount: '',
        icon: 'icon-weibiaoti1'
      }
    ],
    modules: [
      {
        children: [
          {
            label: '我的消息',
            icon: 'icon-xiaoxi',
            line: true
          }
        ]
      },
      {
        children: [
          {
            label: 'VIP会员',
            icon: 'icon-vip'
          },
          {
            label: '商城',
            icon: 'icon-shangcheng'
          },
          {
            label: '在线听歌免流量',
            icon: 'icon-zaixian',
            line: true
          }
        ]
      },
      {
        children: [
          {
            label: '设置',
            icon: 'icon-shezhi'
          },
          {
            label: '扫一扫',
            icon: 'icon-saoyisao'
          },
          {
            label: '个性换肤',
            icon: 'icon-yifuhuanfu'
          },
          {
            label: '夜间模式',
            icon: 'icon-dengpaoyejianmoshi',
            switchButton: true
          },
          {
            label: '定时关闭',
            icon: 'icon-erji-dingshirenwu'
          },
          {
            label: '音乐闹铃',
            icon: 'icon-alarmnaoling'
          },
          {
            label: '驾驶模式',
            icon: 'icon-qiche',
            line: true
          }
        ]
      },
      {
        children: [
          {
            label: '分享网易云音乐',
            icon: 'icon-fenxiang'
          },
          {
            label: '关于',
            icon: 'icon-guanyu',
            line: true
          }
        ]
      }
    ]
  },

  onLoad: function (options) {
    this.setData({
      'userInfo.avatarUrl': app.globalData.userInfo.avatarUrl,
      'userInfo.nickName': app.globalData.userInfo.nickName
    })
  },
  // 换头像
  changeAvatar: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.previewImage({
          urls: tempFilePaths
        })
      }
    })
  },
  // 退出登录
  logOut: function () {
    wx.showToast({
      title: '退出成功',
      icon: 'success',
      duration: 2000
    })
  },
  // 夜间模式切换
  switchChange: function (e) {
    console.log(e)
    wx.showLoading({
      title: '夜间模式切换中',
      mask: true
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
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
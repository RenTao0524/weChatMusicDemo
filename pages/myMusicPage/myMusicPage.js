// pages/myMusicPage/myMusicPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerData: [
      {
        icon: 'icon-yinyue',
        name: '本地音乐',
        count: 126,
        url: '/pages/myMusicPage/localMusicPage/index'
      },
      {
        icon: 'icon-bofang',
        name: '最近播放',
        count: 100,
        url: '/pages/myMusicPage/recentPlayPage/index'
      },
      {
        icon: 'icon-diantai1',
        name: '我的电台',
        count: 0,
        url: '/pages/myMusicPage/myRadioPage/index'
      },
      {
        icon: 'icon-collection-b',
        name: '我的收藏',
        count: 5,
        url: '/pages/myMusicPage/myCollectPage/index'
      }
    ],
    "playlist": [
      {
        "subscribers": [],
        "subscribed": false,
        "creator": {
          "defaultAvatar": false,
          "province": 310000,
          "authStatus": 0,
          "followed": false,
          "avatarUrl": "http://p1.music.126.net/SedRdMCY6NfxPRvb1z-cnA==/18578447976389039.jpg",
          "accountStatus": 0,
          "gender": 1,
          "city": 310113,
          "birthday": -2209017600000,
          "userId": 445564930,
          "userType": 0,
          "nickname": "努力望天的蚂蚁",
          "signature": "",
          "description": "",
          "detailDescription": "",
          "avatarImgId": 18578447976389039,
          "backgroundImgId": 109951163087462540,
          "backgroundUrl": "http://p1.music.126.net/ZMn0Jiz0fykJU9omWCcVjQ==/109951163087462540.jpg",
          "authority": 0,
          "mutual": false,
          "expertTags": null,
          "experts": null,
          "djStatus": 0,
          "vipType": 0,
          "remarkName": null,
          "backgroundImgIdStr": "109951163087462540",
          "avatarImgIdStr": "18578447976389039",
          "avatarImgId_str": "18578447976389039"
        },
        "artists": null,
        "tracks": null,
        "playCount": 250,
        "status": 0,
        "ordered": false,
        "tags": [],
        "cloudTrackCount": 0,
        "adType": 0,
        "trackNumberUpdateTime": 1518161510463,
        "coverImgUrl": "http://p1.music.126.net/q45277EUM3eTW2fUhqQ4PQ==/18936888765699015.jpg",
        "subscribedCount": 0,
        "description": null,
        "trackUpdateTime": 1519443626963,
        "trackCount": 210,
        "updateTime": 1518161510463,
        "commentThreadId": "A_PL_0_642508834",
        "newImported": false,
        "privacy": 0,
        "anonimous": false,
        "totalDuration": 0,
        "highQuality": false,
        "specialType": 5,
        "userId": 445564930,
        "coverImgId": 18936888765699015,
        "createTime": 1490527541524,
        "name": "我喜欢的音乐",
        "id": 642508834,
        "coverImgId_str": "18936888765699015"
      },
      {
        "subscribers": [],
        "subscribed": false,
        "creator": {
          "defaultAvatar": false,
          "province": 310000,
          "authStatus": 0,
          "followed": false,
          "avatarUrl": "http://p1.music.126.net/SedRdMCY6NfxPRvb1z-cnA==/18578447976389039.jpg",
          "accountStatus": 0,
          "gender": 1,
          "city": 310113,
          "birthday": -2209017600000,
          "userId": 445564930,
          "userType": 0,
          "nickname": "努力望天的蚂蚁",
          "signature": "",
          "description": "",
          "detailDescription": "",
          "avatarImgId": 18578447976389039,
          "backgroundImgId": 109951163087462540,
          "backgroundUrl": "http://p1.music.126.net/ZMn0Jiz0fykJU9omWCcVjQ==/109951163087462540.jpg",
          "authority": 0,
          "mutual": false,
          "expertTags": null,
          "experts": null,
          "djStatus": 0,
          "vipType": 0,
          "remarkName": null,
          "backgroundImgIdStr": "109951163087462540",
          "avatarImgIdStr": "18578447976389039",
          "avatarImgId_str": "18578447976389039"
        },
        "artists": null,
        "tracks": null,
        "playCount": 0,
        "status": 0,
        "ordered": false,
        "tags": [],
        "cloudTrackCount": 0,
        "adType": 0,
        "trackNumberUpdateTime": 1517397583668,
        "coverImgUrl": "http://p1.music.126.net/Qbm5xA7zKTuFVKWufgk8Mg==/80264348840397.jpg",
        "subscribedCount": 0,
        "description": null,
        "trackUpdateTime": 1517397583695,
        "trackCount": 1,
        "updateTime": 1517397583668,
        "commentThreadId": "A_PL_0_2081886629",
        "newImported": false,
        "privacy": 0,
        "anonimous": false,
        "totalDuration": 0,
        "highQuality": false,
        "specialType": 0,
        "userId": 445564930,
        "coverImgId": 80264348840397,
        "createTime": 1517397518394,
        "name": "动",
        "id": 2081886629
      },
      {
        "subscribers": [],
        "subscribed": false,
        "creator": {
          "defaultAvatar": false,
          "province": 310000,
          "authStatus": 0,
          "followed": false,
          "avatarUrl": "http://p1.music.126.net/SedRdMCY6NfxPRvb1z-cnA==/18578447976389039.jpg",
          "accountStatus": 0,
          "gender": 1,
          "city": 310113,
          "birthday": -2209017600000,
          "userId": 445564930,
          "userType": 0,
          "nickname": "努力望天的蚂蚁",
          "signature": "",
          "description": "",
          "detailDescription": "",
          "avatarImgId": 18578447976389039,
          "backgroundImgId": 109951163087462540,
          "backgroundUrl": "http://p1.music.126.net/ZMn0Jiz0fykJU9omWCcVjQ==/109951163087462540.jpg",
          "authority": 0,
          "mutual": false,
          "expertTags": null,
          "experts": null,
          "djStatus": 0,
          "vipType": 0,
          "remarkName": null,
          "backgroundImgIdStr": "109951163087462540",
          "avatarImgIdStr": "18578447976389039",
          "avatarImgId_str": "18578447976389039"
        },
        "artists": null,
        "tracks": null,
        "playCount": 0,
        "status": 0,
        "ordered": false,
        "tags": [],
        "cloudTrackCount": 0,
        "adType": 0,
        "trackNumberUpdateTime": 1519290726496,
        "coverImgUrl": "http://p1.music.126.net/cmvsHFnVKXO409hZdrbacA==/102254581395221.jpg",
        "subscribedCount": 0,
        "description": null,
        "trackUpdateTime": 1519290726496,
        "trackCount": 6,
        "updateTime": 1519290726496,
        "commentThreadId": "A_PL_0_2081863896",
        "newImported": false,
        "privacy": 0,
        "anonimous": false,
        "totalDuration": 0,
        "highQuality": false,
        "specialType": 0,
        "userId": 445564930,
        "coverImgId": 102254581395221,
        "createTime": 1517397274078,
        "name": "伤",
        "id": 2081863896
      },
      {
        "subscribers": [],
        "subscribed": false,
        "creator": {
          "defaultAvatar": false,
          "province": 310000,
          "authStatus": 0,
          "followed": false,
          "avatarUrl": "http://p1.music.126.net/SedRdMCY6NfxPRvb1z-cnA==/18578447976389039.jpg",
          "accountStatus": 0,
          "gender": 1,
          "city": 310113,
          "birthday": -2209017600000,
          "userId": 445564930,
          "userType": 0,
          "nickname": "努力望天的蚂蚁",
          "signature": "",
          "description": "",
          "detailDescription": "",
          "avatarImgId": 18578447976389039,
          "backgroundImgId": 109951163087462540,
          "backgroundUrl": "http://p1.music.126.net/ZMn0Jiz0fykJU9omWCcVjQ==/109951163087462540.jpg",
          "authority": 0,
          "mutual": false,
          "expertTags": null,
          "experts": null,
          "djStatus": 0,
          "vipType": 0,
          "remarkName": null,
          "backgroundImgIdStr": "109951163087462540",
          "avatarImgIdStr": "18578447976389039",
          "avatarImgId_str": "18578447976389039"
        },
        "artists": null,
        "tracks": null,
        "playCount": 0,
        "status": 0,
        "ordered": false,
        "tags": [],
        "cloudTrackCount": 0,
        "adType": 0,
        "trackNumberUpdateTime": 1517189099079,
        "coverImgUrl": "http://p1.music.126.net/JJMYd0O3NNP4UHr_n54bwA==/109951162881447478.jpg",
        "subscribedCount": 0,
        "description": null,
        "trackUpdateTime": 1519475630259,
        "trackCount": 6,
        "updateTime": 1517189099079,
        "commentThreadId": "A_PL_0_2074247310",
        "newImported": false,
        "privacy": 0,
        "anonimous": false,
        "totalDuration": 0,
        "highQuality": false,
        "specialType": 0,
        "userId": 445564930,
        "coverImgId": 109951162881447478,
        "createTime": 1516935033796,
        "name": "DJ",
        "id": 2074247310,
        "coverImgId_str": "109951162881447478"
      },
      {
        "subscribers": [],
        "subscribed": false,
        "creator": {
          "defaultAvatar": false,
          "province": 310000,
          "authStatus": 0,
          "followed": false,
          "avatarUrl": "http://p1.music.126.net/SedRdMCY6NfxPRvb1z-cnA==/18578447976389039.jpg",
          "accountStatus": 0,
          "gender": 1,
          "city": 310113,
          "birthday": -2209017600000,
          "userId": 445564930,
          "userType": 0,
          "nickname": "努力望天的蚂蚁",
          "signature": "",
          "description": "",
          "detailDescription": "",
          "avatarImgId": 18578447976389039,
          "backgroundImgId": 109951163087462540,
          "backgroundUrl": "http://p1.music.126.net/ZMn0Jiz0fykJU9omWCcVjQ==/109951163087462540.jpg",
          "authority": 0,
          "mutual": false,
          "expertTags": null,
          "experts": null,
          "djStatus": 0,
          "vipType": 0,
          "remarkName": null,
          "backgroundImgIdStr": "109951163087462540",
          "avatarImgIdStr": "18578447976389039",
          "avatarImgId_str": "18578447976389039"
        },
        "artists": null,
        "tracks": null,
        "playCount": 87,
        "status": 0,
        "ordered": false,
        "tags": [],
        "cloudTrackCount": 0,
        "adType": 0,
        "trackNumberUpdateTime": 1519288004099,
        "coverImgUrl": "http://p1.music.126.net/84FJjDgb51TmRqixaUpshg==/109951163094476391.jpg",
        "subscribedCount": 0,
        "description": null,
        "trackUpdateTime": 1519303489961,
        "trackCount": 74,
        "updateTime": 1519292447651,
        "commentThreadId": "A_PL_0_2074223497",
        "newImported": false,
        "privacy": 0,
        "anonimous": false,
        "totalDuration": 0,
        "highQuality": false,
        "specialType": 0,
        "userId": 445564930,
        "coverImgId": 109951163094476391,
        "createTime": 1516934064031,
        "name": "随身听",
        "id": 2074223497,
        "coverImgId_str": "109951163094476391"
      },
      {
        "subscribers": [],
        "subscribed": false,
        "creator": {
          "defaultAvatar": false,
          "province": 310000,
          "authStatus": 0,
          "followed": false,
          "avatarUrl": "http://p1.music.126.net/SedRdMCY6NfxPRvb1z-cnA==/18578447976389039.jpg",
          "accountStatus": 0,
          "gender": 1,
          "city": 310113,
          "birthday": -2209017600000,
          "userId": 445564930,
          "userType": 0,
          "nickname": "努力望天的蚂蚁",
          "signature": "",
          "description": "",
          "detailDescription": "",
          "avatarImgId": 18578447976389039,
          "backgroundImgId": 109951163087462540,
          "backgroundUrl": "http://p1.music.126.net/ZMn0Jiz0fykJU9omWCcVjQ==/109951163087462540.jpg",
          "authority": 0,
          "mutual": false,
          "expertTags": null,
          "experts": null,
          "djStatus": 0,
          "vipType": 0,
          "remarkName": null,
          "backgroundImgIdStr": "109951163087462540",
          "avatarImgIdStr": "18578447976389039",
          "avatarImgId_str": "18578447976389039"
        },
        "artists": null,
        "tracks": null,
        "playCount": 0,
        "status": 0,
        "ordered": false,
        "tags": [],
        "cloudTrackCount": 0,
        "adType": 0,
        "trackNumberUpdateTime": 1519288053061,
        "coverImgUrl": "http://p1.music.126.net/UAgXkK9Buq7NcFJ2fy0KhA==/84662395351539.jpg",
        "subscribedCount": 0,
        "description": null,
        "trackUpdateTime": 1519288053061,
        "trackCount": 2,
        "updateTime": 1519288053061,
        "commentThreadId": "A_PL_0_2074216252",
        "newImported": false,
        "privacy": 0,
        "anonimous": false,
        "totalDuration": 0,
        "highQuality": false,
        "specialType": 0,
        "userId": 445564930,
        "coverImgId": 84662395351539,
        "createTime": 1516932819930,
        "name": "Jay",
        "id": 2074216252
      },
      {
        "subscribers": [],
        "subscribed": false,
        "creator": {
          "defaultAvatar": false,
          "province": 310000,
          "authStatus": 0,
          "followed": false,
          "avatarUrl": "http://p1.music.126.net/SedRdMCY6NfxPRvb1z-cnA==/18578447976389039.jpg",
          "accountStatus": 0,
          "gender": 1,
          "city": 310113,
          "birthday": -2209017600000,
          "userId": 445564930,
          "userType": 0,
          "nickname": "努力望天的蚂蚁",
          "signature": "",
          "description": "",
          "detailDescription": "",
          "avatarImgId": 18578447976389039,
          "backgroundImgId": 109951163087462540,
          "backgroundUrl": "http://p1.music.126.net/ZMn0Jiz0fykJU9omWCcVjQ==/109951163087462540.jpg",
          "authority": 0,
          "mutual": false,
          "expertTags": null,
          "experts": null,
          "djStatus": 0,
          "vipType": 0,
          "remarkName": null,
          "backgroundImgIdStr": "109951163087462540",
          "avatarImgIdStr": "18578447976389039",
          "avatarImgId_str": "18578447976389039"
        },
        "artists": null,
        "tracks": null,
        "playCount": 0,
        "status": 0,
        "ordered": false,
        "tags": [],
        "cloudTrackCount": 0,
        "adType": 0,
        "trackNumberUpdateTime": 1516933508919,
        "coverImgUrl": "http://p1.music.126.net/tGHU62DTszbFQ37W9qPHcg==/2002210674180197.jpg",
        "subscribedCount": 0,
        "description": null,
        "trackUpdateTime": 1516948194358,
        "trackCount": 0,
        "updateTime": 1516948194348,
        "commentThreadId": "A_PL_0_2074193527",
        "newImported": false,
        "privacy": 0,
        "anonimous": false,
        "totalDuration": 0,
        "highQuality": false,
        "specialType": 0,
        "userId": 445564930,
        "coverImgId": 2002210674180197,
        "createTime": 1516932559332,
        "name": "JJ",
        "id": 2074193527
      },
      {
        "subscribers": [],
        "subscribed": false,
        "creator": {
          "defaultAvatar": false,
          "province": 310000,
          "authStatus": 0,
          "followed": false,
          "avatarUrl": "http://p1.music.126.net/SedRdMCY6NfxPRvb1z-cnA==/18578447976389039.jpg",
          "accountStatus": 0,
          "gender": 1,
          "city": 310113,
          "birthday": -2209017600000,
          "userId": 445564930,
          "userType": 0,
          "nickname": "努力望天的蚂蚁",
          "signature": "",
          "description": "",
          "detailDescription": "",
          "avatarImgId": 18578447976389039,
          "backgroundImgId": 109951163087462540,
          "backgroundUrl": "http://p1.music.126.net/ZMn0Jiz0fykJU9omWCcVjQ==/109951163087462540.jpg",
          "authority": 0,
          "mutual": false,
          "expertTags": null,
          "experts": null,
          "djStatus": 0,
          "vipType": 0,
          "remarkName": null,
          "backgroundImgIdStr": "109951163087462540",
          "avatarImgIdStr": "18578447976389039",
          "avatarImgId_str": "18578447976389039"
        },
        "artists": null,
        "tracks": null,
        "playCount": 0,
        "status": 0,
        "ordered": false,
        "tags": [],
        "cloudTrackCount": 0,
        "adType": 0,
        "trackNumberUpdateTime": 1519288043887,
        "coverImgUrl": "http://p1.music.126.net/GGYQjJ-zDEivv9l6QgJUFg==/109951163020567917.jpg",
        "subscribedCount": 0,
        "description": null,
        "trackUpdateTime": 1519288043887,
        "trackCount": 2,
        "updateTime": 1519288043887,
        "commentThreadId": "A_PL_0_2074158974",
        "newImported": false,
        "privacy": 0,
        "anonimous": false,
        "totalDuration": 0,
        "highQuality": false,
        "specialType": 0,
        "userId": 445564930,
        "coverImgId": 109951163020567917,
        "createTime": 1516932543865,
        "name": "eason",
        "id": 2074158974,
        "coverImgId_str": "109951163020567917"
      }
    ],
    songListShow: false
  },

  // 下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
    console.log('xxx')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  showSongList: function () {
    var that = this;
    // 回复form隐藏、展示切换
    if (that.data.songListShow == true) {
      that.setData({
        songListShow: false     //展示回复框
      })
    } else {
      that.setData({
        songListShow: true     //隐藏回复框
      })
    }
  },
  songEdit: function () {
    wx.showActionSheet({
      itemList: ['新建歌单', '管理歌单', '回复歌单'],
      itemColor: '#e42929',
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  songMenu: function (event) {
    var songListUrl = '/pages/myMusicPage/songListPage/index' + '?' + 'title=' + event.currentTarget.dataset.songmenu
    wx.navigateTo({
      url: songListUrl
    })
  }
})
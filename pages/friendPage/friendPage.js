// pages/friendPage/friednPage.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageTopList: [
      {
        text: '发动态',
        icon: 'icon-wodefabu',
        url: '/pages/friendPage/releaseMessage/index'
      },
      {
        text: '发布视频',
        icon: 'icon-shipinzhibo',
        url: '/pages/friendPage/releaseVideo/index'
      }
    ],
    dynamicDataList: [
      {
        "id": 5838157,
        "cover": "http://p4.music.126.net/_etNLgy8dIbj2CtEHAQ-SA==/109951163160812021.jpg",
        "videoSrc": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
        "name": "Ref:rain",
        "playCount": 47248,
        "briefDesc": "Aimer新单《Ref:rain》MV公开！",
        "desc": null,
        "artistName": "Aimer",
        "artistId": 16152,
        "duration": 0,
        "mark": 0,
        "subed": false,
        "artists": [{
          "id": 16152,
          "name": "Aimer"
        }]
      },
      {
        "id": 5841127,
        "cover": "http://p4.music.126.net/Tkb2ks9bOU6Mdn6pE1Y-HA==/109951163159726724.jpg",
        "videoSrc": "http://v4.music.126.net/20180225065916/46016125a8acb7ce03e254abf82451b6/web/cloudmusic/mv/20180223110342/3f598206-e9c7-411a-92b5-e1766f9ca71e/29b4e19339f08e666200eb37bb43f2c9.mp4",
        "name": "Don't Stay",
        "playCount": 3666,
        "briefDesc": "X Ambassadors新单《Don't Stay》MV公开！",
        "desc": null,
        "artistName": "X Ambassadors",
        "artistId": 780159,
        "duration": 0,
        "mark": 0,
        "subed": false,
        "artists": [{
          "id": 780159,
          "name": "X Ambassadors"
        }]
      },
      {
        "id": 5841144,
        "cover": "http://p3.music.126.net/OZcY5t3Hoic-Zsnwxe0giw==/109951163161197758.jpg",
        "videoSrc": "http://v4.music.126.net/20180225070042/377192840d2e978821ef9bf3579e005d/web/cloudmusic/mv/20180224094755/0630f9a1-7b1a-4a5f-9a87-6667b141d38d/01d34b8e6e50885cb849ae187a1eb38f.mp4",
        "name": "HAVANA",
        "playCount": 15562,
        "briefDesc": "Pentatonix翻唱卡妹Camila Cabello热单《Havana》",
        "desc": null,
        "artistName": "Pentatonix",
        "artistId": 99292,
        "duration": 0,
        "mark": 0,
        "subed": false,
        "artists": [{
          "id": 99292,
          "name": "Pentatonix"
        }]
      },
      {
        "id": 5810988,
        "cover": "http://p3.music.126.net/u1GNLmGYPbiq4GZbtsJw-w==/109951163160293522.jpg",
        "videoSrc": "http://v4.music.126.net/20180225070239/6a69261691ac4a0d370739ea344ec72c/web/cloudmusic/IDEhMmEiYCQgZCMwIDAgMA==/mv/5810988/9eadcdda20e28ecd93e711f700d694ba.mp4",
        "name": "끌어줘+Dancing With The Devil KBS音乐银行 18/02/23 现场版",
        "playCount": 2780,
        "briefDesc": "THE UNI+带来《拉着我+Dancing With The Devil》精彩舞台！",
        "desc": null,
        "artistName": "THE UNI+",
        "artistId": 12741180,
        "duration": 0,
        "mark": 0,
        "subed": false,
        "artists": [{
          "id": 12741180,
          "name": "THE UNI+"
        }]
      },
      {
        "id": 5810983,
        "cover": "http://p3.music.126.net/Hca75nbey35V8-IXVr4iRw==/109951163160243632.jpg",
        "videoSrc": "http://v4.music.126.net/20180225070340/58a300ac42ae797765b81cf7e2494503/web/cloudmusic/YCAgIDE4ICBgMTAwMCRgIA==/mv/5810983/8af036dad6eaccf06de04e9cfbbe71a5.mp4",
        "name": "Trickery 狡辩",
        "playCount": 81381,
        "briefDesc": "Higher Brothers最新MV《Trickery 狡辩》",
        "desc": null,
        "artistName": "Higher Brothers",
        "artistId": 12002201,
        "duration": 0,
        "mark": 0,
        "subed": false,
        "artists": [{
          "id": 12002201,
          "name": "Higher Brothers"
        }]
      },
      {
        "id": 5839149,
        "cover": "http://p4.music.126.net/g6wpM63ibXEfI6uF5TdVXQ==/109951163160232139.jpg",
        "videoSrc": "http://v4.music.126.net/20180225070429/bb8dad13359058c021d9e65fde2701ef/web/cloudmusic/mv/20180223025212/fc2e6b78-2738-49d9-96b9-667c336b0f05/c20d6965d2dfec7013b11e7c4c9865bc.mp4",
        "name": "My My My! (Acoustic)",
        "playCount": 180407,
        "briefDesc": "Troye Sivan《My My My!》不插电版MV公开！",
        "desc": null,
        "artistName": "Troye Sivan",
        "artistId": 45129,
        "duration": 0,
        "mark": 0,
        "subed": false,
        "artists": [{
          "id": 45129,
          "name": "Troye Sivan"
        }]
      },
      {
        "id": 5810985,
        "cover": "http://p3.music.126.net/vpXwU70NjgND6F0ck1VODw==/109951163160245188.jpg",
        "videoSrc": "http://v4.music.126.net/20180225070528/4f02d0f3519b29f324a5b9bfec9535ce/web/cloudmusic/OCAwMCIwYSEmMCQgMCAgIA==/mv/5810985/43c604fb18628205f4a146cb3deb8334.mp4",
        "name": "Cold",
        "playCount": 91211,
        "briefDesc": "说唱新星Rich Brian新专主打曲《Cold》MV公开！",
        "desc": null,
        "artistName": "Rich Brian",
        "artistId": 12024301,
        "duration": 0,
        "mark": 0,
        "subed": false,
        "artists": [{
          "id": 12024301,
          "name": "Rich Brian"
        }]
      },
      {
        "id": 5841129,
        "cover": "http://p3.music.126.net/9S9lq1Q0uiHlcYlRF40hYA==/109951163159752341.jpg",
        "videoSrc": "http://v4.music.126.net/20180225070604/958ffe04600106b880ad4672260ddbd7/web/cloudmusic/mv/20180223113147/21c9b418-7c42-4fac-ba93-948568a629b1/7115c56c8b67364a87a11132be251a90.mp4",
        "name": "Vegetable (ベジタボー)",
        "playCount": 368374,
        "briefDesc": "桃色幸运草Z与PIKO太郎合作曲MV公开！",
        "desc": null,
        "artistName": "ももくろちゃんZ",
        "artistId": 12450088,
        "duration": 0,
        "mark": 0,
        "subed": false,
        "artists": [{
          "id": 12450088,
          "name": "ももくろちゃんZ"
        }, {
          "id": 12132301,
          "name": "PIKO太郎"
        }]
      },
      {
        "id": 5840126,
        "cover": "http://p3.music.126.net/xopUPiqOY6bYoLJKfrKnPg==/109951163159970630.jpg",
        "videoSrc": "http://v4.music.126.net/20180225070648/01e48db815a1793532761786b3173dc4/web/cloudmusic/mv/20180223021307/01a33968-da16-44b7-b0b0-0e5303dab197/9d0878fccaaeefbaab0471c174c97c87.mp4",
        "name": "明星和我的歌单 : 梁耀燮 – 没有你的地方 (中字)",
        "playCount": 1616,
        "briefDesc": "和梁耀燮一起做歌单！",
        "desc": null,
        "artistName": "梁耀燮",
        "artistId": 124209,
        "duration": 0,
        "mark": 0,
        "subed": false,
        "artists": [{
          "id": 124209,
          "name": "梁耀燮"
        }]
      },
      {
        "id": 5841119,
        "cover": "http://p4.music.126.net/kk1vPEg7Eu7ZghxzBMofPg==/109951163159674646.jpg",
        "videoSrc": "http://v4.music.126.net/20180225070731/e6e0a25fab9f911ccd1190d0515deac9/web/cloudmusic/mv/20180223102134/0c09f018-edc2-48cc-87a6-f1f78e6220dd/41a482cecd5342d614fad55dee9dbb27.mp4",
        "name": "BRAND NEW GIRL",
        "playCount": 26688,
        "briefDesc": "TWICE日文单曲《BRAND NEW GIRL》",
        "desc": null,
        "artistName": "TWICE",
        "artistId": 1161043,
        "duration": 0,
        "mark": 0,
        "subed": false,
        "artists": [{
          "id": 1161043,
          "name": "TWICE"
        }]
      }
    ]
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app)
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
    console.log('pull down refresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('bottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('share')
  }
})
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'MiHome_Store',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    "banner_list": [
      {
        "banner": [
          {
            "pic_url": "../../images/banner1.jpg",
          },
          {
            "pic_url": "../../images/banner2.jpg",
          },
          {
            "pic_url": "../../images/banner3.jpg",
          }
        ]
      }
    ],
    hotgoods: [
      {
        "name": "河洛群侠传",
        "pic_url": "../../images/h1.jpg"
      },
      {
        "name": "仙剑奇侠传",
        "pic_url": "../../images/h2.jpg",
        "url": "http://home.mi.com/shop/detail?gid=95"
      },
      {
        "name": "武侠",
        "pic_url": "../../images/h3.jpg"
      },
      {
        "name": "破东荒",
        "pic_url": "../../images/h4.jpg"
      }
      
    ],
    gamelist: [{
      "name": "幻想三国志",
      "pic_url": "../../images/g1.jpg"
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      that.update()
    })
  }
})

//index.js
//获取应用实例
var postData = require("index-config.js");
var app = getApp();
Page({
  data: {
    // height: "",
    showModalStatus: false,
    gameListShow: true,
    postList: postData.postList,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    bannerList: postData.bannerList,
    newList: postData.newList
  },
  //事件处理函数
  showModal: function(e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu);
  },
  util: function(currentStatu) {
    if (currentStatu == "open") {
      this.setData({
        showModalStatus: true
      });
    };
    if (currentStatu == "close") {
      this.setData({
        showModalStatus: false
      });
    }
  },
  download: function (e) {
    var image = "images/qrcode.png";
    wx.saveImageToPhotosAlbum({
      filePath: image,
      success: function (e) {
        wx.showModal({
          title: "保存成功",
          // content: '',
          showCancel: !1,
          success: function (e) { }
        });
      },
      fail: function (e) {
        wx.getSetting({
          success: function (e) {
            t.authSetting["scope.writePhotosAlbum"] ? wx.showModal({
              title: "保存失败",
              showCancel: !1,
              success: function (e) { }
            }) : wx.showModal({
              title: "保存失败",
              content: "是否打开保存相册权限？",
              success: function (e) {
                t.confirm && wx.openSetting({});
              }
            });
          }
        });
      }
    });
  },
  goToTop: function() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      that.update()
    })
  }
})
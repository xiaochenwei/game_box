//index.js
//获取应用实例
var postData = require("index-config.js");
var app = getApp();
var IMG_URL = "../../images/qrcode.png";
Page({
  data: {
    // height: "",
    image_url: IMG_URL,
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
  viewHeight: function(e) {
    var winW = wx.getSystemInfoSync().windowWidth;
    var viewH = (winW <= 320 ? 350 : (winW <= 360 ? 305 : (winW <= 375 ? 295 : 265))) + "rpx";
    this.setData({
      height: viewH
    })
  },

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
  download: function() {
    wx.saveImageToPhotosAlbum({
      success(res) {}
    })
  },
  saveImgToPhotosAlbumTap: function() {
    wx.downloadFile({
      url: IMG_URL,
      success: function(res) {
        console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function(res) {
            console.log(res)
          },
          fail: function(res) {
            console.log(res)
            console.log('fail')
          }
        })
      },
      fail: function() {
        console.log('fail')
      }
    })
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
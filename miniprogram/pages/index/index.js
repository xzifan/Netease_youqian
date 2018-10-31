// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accounts:[{
        bankName:"中国银行",
        type:"借记卡",
        end:"****",
        amount:100.00
      },{
        bankName:"中国农业银行",
        type:"借记卡",
        end:"****"
      },{
        bankName:"浦发银行",
        type:"借记卡",
        end:"****"
      },{
        bankName:"浦发银行",
        type:"借记卡",
        end:"****"
      },{
        bankName:"浦发银行",
        type:"借记卡",
        end:"****"
      },{
        bankName:"浦发银行",
        type:"借记卡",
        end:"****"
      }],
    recentBills:{
      today:[{
         title:"其他",
         desc:"转账 ",
         amount:100,
      },{
        title:"购物",
        desc:"商品 可乐",
        amount:3
      }],
      dayB1:[{

      }],
      dayB2:[{

      }]
    }

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

  }
})
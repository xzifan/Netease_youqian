// miniprogram/pages/login/addBill/addBill.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  onShow:function(){
    console.log(app.globalData.data)
    this.setData({
      data:app.globalData.data
    })
  },
  bindReplaceInput:function(e){
    var value = e.detail.value;
    console.log(value)
    if(value.charAt(0) != '￥')
      value='￥'+value
    console.log(value.indexOf('.'))
    if (value.indexOf('.')!=-1){
      if (value.length>value.indexOf('.')+3) {
        value= value.slice(0,value.indexOf('.')+3)
      }
    }
    return value
  },
  bindSetAmount:function(e){
    let amount = e.detail.value;
    if (e.detail.value=="￥")
      amount = "￥0.00"
    else if(amount.indexOf('.')==-1)
      amount += ".00"
    else if(amount.indexOf('.')!=-1 && amount.length-amount.indexOf('.')<2)
      
    this.setData({
      amount:amount
    })
  },
  bindSetTitle:function(e) {
    this.setData({
      title:e.detail.value
    })
  },
  bindSetDesc:function(e) {
    this.setData({
      desc:e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  buttons_addMore:function(){
    this.buttons_saveBill();
    // if (getCurrentPages().length != 0) {
    //   //刷新当前页面的数据
    //   getCurrentPages()[getCurrentPages().length - 1].onLoad()
    // }
    wx.navigateTo({
      url: '/pages/index/addBill/addBill'
    })
  },
  buttons_saveBill:function(){
    console.log()
    wx.navigateBack({
      delta:5
    })
  }

})
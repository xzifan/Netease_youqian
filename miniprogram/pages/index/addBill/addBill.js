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
    console.log(this.data.data.id.accounts[0].icon)
  },
  bindReplaceInput:function(e){
    var value = e.detail.value;
    if(value.charAt(0) != '￥')
      value='￥'+value
    if (value.indexOf('.')!=-1){
      if (value.length>value.indexOf('.')+3) {
        value= value.slice(0,value.indexOf('.')+3)
      }
    }
    return value
  },
  bindSetAmount:function(e){
    let amount = e.detail.value;
    console.log("get amount: " +amount)
    if (e.detail.value=="￥"||e.detail.value=="")
      amount = "￥0.00"
    else if(amount.indexOf('.')==-1)
      amount += ".00"
    else if(amount.indexOf('.')!=-1 && amount.length-amount.indexOf('.')==1)
      amount += "0"
    else if(amount.indexOf('.')!=-1 && amount.length-amount.indexOf('.')==0)
      amount+="00"
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
    console.log(app.globalData.data.id.bills.length)
    let idx = app.globalData.data.id.bills.length;
    let bill = 'data.id.bills['+idx+']'
    this.setData({
      [bill+'.type']:1,
      [bill+'.title']:this.data.title||null,
      [bill+'.time']:this.data.date+this.data.time||null,
      [bill+'.desc']:this.data.desc||null,
      [bill+'.total']:this.data.amount||"0.00"
      
    })
    Object.assign(app.globalData, this.data)
    let data = wx.setStorageSync('data',this.data)
    console.log(this.data)

    wx.navigateBack({
      delta:5
    })
  }

})
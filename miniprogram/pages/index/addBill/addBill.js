// miniprogram/pages/login/addBill/addBill.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden:true,
    selectedAccount:0
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
    if(value.charAt(0) != '￥')
      value='￥'+value
    if (value.indexOf('.')!=-1){
      if (value.length>value.indexOf('.')+3) {
        value= value.slice(0,value.indexOf('.')+3)
      }
    }
    this.setData({
      amount:value.slice(1)
    })
    return value
  },
  bindSetAmount:function(e){
    let amount = e.detail.value;
    console.log("get amount: " +amount)
    if (e.detail.value=="￥"||e.detail.value=="")
      amount = "￥0.00"
    else if(amount.indexOf('.')==-1)
      amount += ".00"
    else if(amount.indexOf('.')!=-1 && (amount.length-amount.indexOf('.'))==1)
      amount += "0"
    else if(amount.indexOf('.')!=-1 && (amount.length-amount.indexOf('.'))==0)
      amount+="00"
    console.log(typeof amount,amount)
    this.setData({
      amount:amount.slice(1)
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
    let idx = app.globalData.data.id.bills.length;
    let bill = 'data.id.bills['+idx+']'
    let accountIdx = this.data.selectedAccount-0
    console.log(accountIdx)
    let updateAccount = 'data.id.accounts['+accountIdx+']'
    this.setData({
      [bill+'.type']:1,
      [bill+'.title']:this.data.title||null,
      [bill+'.time']:this.data.date+this.data.time||null,
      [bill+'.desc']:this.data.desc||"",
      [bill+'.total']:this.data.amount||"0.00",
      [bill+'.account']:accountIdx,
      [bill+'.icon']:accountIdx!=1&&accountIdx!=0 ? "bank" : (accountIdx==0 ? "zhifubaozhifu" : "weixinzhifu"),
      [updateAccount+'.amount']:(app.globalData.data.id.accounts[accountIdx].amount-this.data.amount).toFixed(2)

    })
    Object.assign(app.globalData.data, this.data.data)
    wx.setStorageSync('data',this.data)
    console.log(this.data)

    wx.navigateBack({
      delta:5
    })
  },
  showAccounts:function(){
    this.setData({
      modalHidden:false
    })
  },
  hideAccounts:function(){
    this.setData({
      modalHidden:true
    })
  },
  selectAccount:function(e){
    let idx = e.currentTarget.dataset.account
    console.log(idx)
    this.setData({
      selectedAccount:idx
    })
    this.hideAccounts();
  }

})
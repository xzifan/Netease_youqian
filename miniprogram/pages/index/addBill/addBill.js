// miniprogram/pages/login/addBill/addBill.js
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
  bindReplaceInput:function(e){
    var value = e.detail.value;
      if(value.charAt(0) != '￥')
        value='￥'+value
      console.log(value.indexOf('.'))
      if (value.indexOf('.')!=-1)
        if (value.length>value.indexOf('.')+3) {
          value= value.slice(0,value.indexOf('.')+3)
        }
      return value
  }

})
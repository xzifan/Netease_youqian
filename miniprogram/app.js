
App({
  globalData: {
    appid: 'wx37bd8c039572adcb	',//appid需自己提供，此处的appid我随机编写
    secret: "46377c2e6036460307f16c1c03a8a739",
    data:null
  },
  onLaunch: function () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5be37ffe1a0b241d97ce4425/youqian/accounts#!method=get',
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log(res.data)
        Object.assign(this.globalData, res.data)//将原有值替换更新
        wx.setStorageSync("data", res.data)
        console.log("original data:",this.globalData)
      }
    })
  },
})
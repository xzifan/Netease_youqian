// miniprogram/pages/index/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    accounts:[{
        bankName:"中国银行",
        type:"借记卡",
        end:"8666",
        amount:100.00
      },{
        bankName:"中国农业银行",
        type:"借记卡",
        end:"2333"
      },{
        bankName:"浦发银行",
        type:"借记卡",
        end:"6666"
      },{
        bankName:"浦发银行",
        type:"借记卡",
        end:"2888"
      }],

    recentBills:[
      [{time:"20181101_081900",
      title:"其他",
      desc:"转账 ",
      total:100.00},
      {time:"20181101_081800",
      title:"购物",
      desc:"可乐 ",
      total:3.00,
      platform:"支付宝"}],
      ,
      [{"time":"20181031_081800",
        "title":"餐饮",
        "desc":"大碗燃面",
        "total":10.00
      }]
    ],
    
    numOfBills:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    if (wx.getStorageSync('user')) {
      wx.login({
        success: function (res) {
          if (res.code) {
            console.log(res.code)
            wx.getUserInfo({
              success: function (res) {
                console.log(res)
                var objz = res.userInfo;
                app.globalData.userInfo = res.userInfo;
                wx.setStorageSync('userInfo', objz);//存储userInfo
              }
            })
          }
        }
      })

      console.log("已获取id")
      this.setData({
        userInfo:wx.getStorageSync('userInfo'),
        openid:wx.getStorageSync('user')
      })
    }else wx.navigateTo({
      url: '../login/login',
      success: function() {
        console.log("跳转成功")
      },
      fail: function() {
        console.log("跳转失败")
      }
    })
    
    // let bills = app.globalData[11561180].map((item,index)=>{
    //     if (item[time].slice(0,8))
    // })
    let numOfBills =0;
    this.data.recentBills.forEach(element => {
      if (element) {
        numOfBills+=element.length
      }
    });

      this.setData({
        numOfBills: numOfBills
      })
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
    let dataID = wx.getStorageSync('data')
    console.log("data:",dataID.data.id)
    this.setData({
      accounts:dataID.data.id.accounts,
      recentBills:dataID.data.id.bills
    })
  },
  onReachBottom: function(){
    console.log("bottom")
  },
  goToAddBill:function(){
    wx.navigateTo({
      url: './addBill/addBill'
    })
  }
})
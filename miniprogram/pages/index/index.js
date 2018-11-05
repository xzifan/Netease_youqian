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
      [{time:"20181031_081800",
        title:"餐饮",
        desc:"大碗燃面",
        total:10.00
      }]
    ],
    
    numOfBills:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getSetting({
      success (res) {
        if (res.authSetting['scope.userInfo']){
          console.log("已获取信息授权",res)
          wx.getUserInfo({
            success: function(res) {
              var userInfo = res.userInfo
              that.setData({
                userInfo:userInfo
              })
            }
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
      }
    })
    
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
    if (app.globalData.userInfo) {
        this.setData({
        userInfo:app.globalData.userInfo
        })
    }   
  },
  goToAddBill:function(){
    wx.navigateTo({
      url: './addBill/addBill'
    })
  }
})
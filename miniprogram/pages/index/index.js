// miniprogram/pages/index/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    monthExp:0,
    monthIncome:0,
    myAsset:0,
    totalAsset:0,
    totalDept:0,
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
            wx.getUserInfo({
              success: function (res) {
                var objz = res.userInfo;
                app.globalData.userInfo = res.userInfo;
                wx.setStorageSync('userInfo', objz);//存储userInfo
              }
            })
          }
        }
      })
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
    let exp=0,income=0,asset=0,tasset=0,tdept = 0;
    dataID.data.id.bills.forEach(bill => {
      if(bill.type=="1") exp+=(bill.total-0)
      else if (bill.type=="0") income+=(bill.account-0)
    });
    dataID.data.id.accounts.forEach(account=>{
      asset += (account.amount-0)
    })
    tasset=asset-tdept;
    this.setData({
      accounts:dataID.data.id.accounts,
      recentBills:dataID.data.id.bills,
      monthExp:exp.toFixed(2),
      monthIncome:income.toFixed(2),
      myAsset:asset.toFixed(2),
      totalAsset:tasset.toFixed(2),
      totalDept:tdept.toFixed(2)
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
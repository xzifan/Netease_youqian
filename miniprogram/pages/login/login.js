// miniprogram/pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getUserInfo:function(res){
     var user=wx.getStorageSync('user') || {};  
     var userInfo=wx.getStorageSync('userInfo') || {}; 
     if(!user.openid ){ 
        wx.login({  
        success: function(res){ 
            if(res.code) {
              console.log(res.code)
                wx.getUserInfo({
                    success: function (res) {
                        var objz={};
                        objz.avatarUrl=res.userInfo.avatarUrl;
                        objz.nickName=res.userInfo.nickName;
                        //console.log(objz);
                        wx.setStorageSync('userInfo', objz);//存储userInfo
                    }
                });
                var d=app.globalData;//这里存储了appid、secret、token串  
                var l='https://api.weixin.qq.com/sns/jscode2session?appid='
                +d.appid+'&secret='+d.secret+'&js_code='+res.code+'&grant_type=authorization_code';  
                wx.request({  
                    url: l,  
                    data: {},  
                    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
                    // header: {}, // 设置请求的 header  
                    success: function(res){ 
                      console.log()
                        var obj={};
                        obj.openid=res.data.openid;  
                        obj.expires_in=Date.now()+res.data.expires_in;  
                        //console.log(obj);
                        wx.setStorageSync('user', obj);//存储openid  
                        wx.navigateBack({
                          delta:2
                        })
                    }  
                });
            }else {
                console.log('获取用户登录态失败！' + res.errMsg)
            }          
        }  
      }); 
    }
  }
})
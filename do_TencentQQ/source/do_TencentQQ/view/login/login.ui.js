//related to login.ui
nf=sm("do_Notification");
var qq=sm("do_TencentQQ");
var page=sm("do_Page");
var login=ui("login");
var logout=ui("logout ");
var close=ui("close");
var app=sm("do_App");

page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	page.on("back", function(data) {
		app.closePage();
	})
	login.on("touch", function(datal, e) {
		//appid   1104684313
		qq.login("1104684313", function(datal, e) {
			//登录QQ,显示返回的信息
			qq.getUserInfo({expires:datal.expires_in, openId:datal.openid, token:datal.access_token}, function(data, e){	
				nf.alert(data);
			});
		});
		
	});
	logout.on("touch", function(data, e) {
		
		qq.logout();
		nf.alert("退出登录");
		
	});
});

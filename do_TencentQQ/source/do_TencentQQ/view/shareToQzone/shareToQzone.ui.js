//related to shareToQzone.ui
page = sm("do_Page");
var close = ui("close");
var app = sm("do_App");
nf=sm("do_Notification");
var qq=sm("do_TencentQQ");
var bt=ui("do_Button_1");
var bt1=ui("do_Button_2");
page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	page.on("back", function(data) {
		app.closePage();
	})
	bt.on("touch",function(data,e){
		
		qq.shareToQzone("1104684313",0,"title:分享到QQ空间,0图文分享","http://www.baidu.com","scource://do_TencentQQ/iamge/close.png","摘要:分享到QQ空间，最长为600字符", function(data, e) {
			
		});
	});
	bt1.on("touch", function(data, e) {
		
		qq.shareToQzone("1104684313",1,"title:分享到QQ空间，1应用分享","http://www.hao123.com","scource://do_TencentQQ/image/2.jpg","摘要：分享到QQ空间，分享为应用，摘要最长为600字符", function(data, e) {
			
		});
	});

});
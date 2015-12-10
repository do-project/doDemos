//related to shareToQQ.ui
var page = sm("do_Page");
var close = ui("close");
var bt=ui("do_Button_1");
var bt1=ui("do_Button_2");
var bt2=ui("do_Button_3");
var bt3=ui("do_Button_4");
var app = sm("do_App");
nf=sm("do_Notification");
var qq=sm("do_TencentQQ");
page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	page.on("back", function(data) {
		app.closePage();
	})
	bt.on("touch", function(data, e) {
		qq.shareToQQ("1104684313", 0, "title:第三方应用QQ图文分享", "http://www.deviceone.net", "data://do_TencentQQ/1.jpg","摘要:qq分享方法的参数不能颠倒,参数最好写全","","qq图文", function(data, e) {
			
		});
		
	});
	bt1.on("touch", function(data, e) {
		
		qq.shareToQQ("1104684313",1,"title:第三方应用QQ纯图分享","http://www.baidu.com","data://do_TencentQQ/2.jpg","摘要:qq分享，纯图分享，摘要最长为40个字符","","qq纯图", function(data, e) {
			
		});
	}); 
	bt2.on("touch", function(data, e) {

	    qq.shareToQQ("1104684313",2,"title:第三方应用QQ音乐分享","http://www.hao123.com","data://do_TencentQQ/3.jpg","摘要：QQ音乐分享，音乐只支持网络音乐","http://staff2.ustc.edu.cn/~wdw/softdown/index.asp/0042515_05.ANDY.mp3","qq音乐", function(data, e) {
	    	
	    });

	});
	bt3.on("touch", function(data, e) {
		
		qq.shareToQQ("1104684313",3,"title:第三方应用QQ应用分享","http://www.deviceone.net","data://do_TencentQQ/1.jpg","","qq应用", function(data, e) {
			
		});
	});
});
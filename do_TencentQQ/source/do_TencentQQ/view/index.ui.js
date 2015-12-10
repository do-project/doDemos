/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var page = sm("do_Page");
var close = ui("close");
var listview = ui("listview");
var listdata = mm("do_ListData");
var root = ui("$");
var app = sm("do_App");


page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	page.on("back", function(data) {
		app.closePage();
	})
	var code = ui("code");
	code.on("touch", function() {
		app.openPage({
			source : "source://do_App/view/codeviewer/index.ui",
			statusBarState : "transparent"
		});
	});
	listdata.addData([ {
		"index" : "1",
		"name" : "登录"
	}, {
		"index" : "2",
		"name" : "分享到QQ好友"
	}, {
		"index" : "3",
		"name" : "分享到QQ空间"
	}]);
	listview.bindItems(listdata);
	listview.on("touch", function(index) {
		switch (index) {
		case 0:
			app.openPage({
				source : "source://do_TencentQQ/view/login/login.ui",
				statusBarState : "transparent"
			});
			break;
		case 1:
			app.openPage({
				source : "source://do_TencentQQ/view/shareToQQ/shareToQQ.ui",
				statusBarState : "transparent",
				id : "page1_id" 
			});
			break;
		case 2:
			app.openPage({
				source : "source://do_TencentQQ/view/shareToQzone/shareToQzone.ui",
				statusBarState : "transparent",
				id : "page1_id" 
			});
			break;
		
		}
	});
})

// //

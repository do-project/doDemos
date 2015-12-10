/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var page = sm("do_Page");
var close = ui("close");
var listview = ui("do_ListView_1");
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
			source : "source://do_UMengAnalytics/view/codeviewer/index.ui",
			statusBarState : "transparent"
		});
	});
	listdata.addData([ {
		"index" : "1",
		"name" : "友盟统计"
	}, {
		"index" : "2",
		"name" : "自定义事件"
	}]);
	listview.bindItems(listdata);
	listview.on("touch", function(index) {
		switch (index) {
		case 0:
			app.openPage({
				source : "source://do_UMengAnalytics/view/simple/tongji.ui",
				statusBarState : "transparent"
			});
			break;
		case 1:
			app.openPage({
				source : "source://do_UMengAnalytics/view/event/event.ui",
				statusBarState : "transparent"
				
			});
			break;
		
		
		}
	});
})



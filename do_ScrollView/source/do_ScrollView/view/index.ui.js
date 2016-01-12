/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");
var close = ui("close");
var code = ui("code");
var listview = ui("do_ListView_1");
var listdata = mm("do_ListData");
listview.bindItems(listdata);
page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	page.on("back", function(data) {
		app.closePage();
	})	
	code.on("touch", function() {
		app.openPage({
			source : "source://do_ScrollView/view/codeviewer/index.ui",
			statusBarState : "transparent"
		});
	});
	var data=[{"index":"1","name":"ScrollView下拉缩放背景图片动画效果"}];
	listdata.addData(data);
	listview.refreshItems({});
	listview.on("touch", function(index) {
		switch (index) {
		case 0:
			app.openPage({
				source : "source://do_ScrollView/view/pullAnimation/myself.ui",
				statusBarState : "transparent",
				animationType: "fade"
			});
			break;

		}

	});
})




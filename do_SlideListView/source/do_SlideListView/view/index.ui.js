/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
////返回按钮
var page = sm("do_Page");
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
// //
var code = ui("code");
code.on("touch", function() {
	app.openPage({
		source : "source://do_SlideListView/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});
// //
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "简单示例"
} ]);
listview.bindItems(listdata);

var root = ui("$");
var app = sm("do_App");
listview.on("touch", function(index) {
	if (index == 0) {
		app.openPage({
			source : "source://do_SlideListView/view/simple/index.ui",
			statusBarState : "transparent"
		});
	}
});

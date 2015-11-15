/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");

// //返回按钮
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
		source : "source://do_Animator/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});
// //
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "心形动画点赞展示"
} ]);
listview.bindItems(listdata);

listview.on("touch", function(index) {
	switch (index) {
	case 0:
		app.openPage({
			source : "source://do_Animator/view/heart/index.ui",
			statusBarState : "transparent",
			id : "page" // 表示page1.ui的id为page1_id
		});
		break;
	}
});

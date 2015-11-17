/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
// //返回按钮
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
		source : "source://do_ListView/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});
// //
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "ListView带缺省header和footer"
}, {
	"index" : "2",
	"name" : "ListView带自定义header和footer"
} , {
	"index" : "3",
	"name" : "购物车例子，示范从cell更新listdata"
}]);
listview.bindItems(listdata);

var root = ui("$");
var app = sm("do_App");
listview.on("touch", function(index) {
	switch (index) {
	case 0:
		app.openPage({
			source : "source://do_ListView/view/head_foot_view/index.ui",
			statusBarState : "transparent"
		});
		break;
	case 1:
		app.openPage({
			source : "source://do_ListView/view/custom_head_foot_view/index.ui",
			statusBarState : "transparent"
		});
		break;
	case 2:
		app.openPage({
			source : "source://do_ListView/view/cart/index.ui",
			statusBarState : "transparent",
			statusBarFgColor: "black",
			animationType: "push_r2l_1"
		});
		break;
	}
});

/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
// //
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
		source : "source://do_ImageView/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});
// //
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "正圆图片示例"
},{
	"index" : "2",
	"name" : "scale属性"
}]);
listview.bindItems(listdata);

var root = ui("$");
var app = sm("do_App");
listview.on("touch", function(index) {
	switch (index) {
	case 0:
		app.openPage({
			source : "source://do_ImageView/view/cycleimage/index.ui",
			statusBarState : "transparent"
		});
		break;
	case 1:
		app.openPage({
			source : "source://do_ImageView/view/scaletype/scaletype.ui",
			statusBarState : "transparent"
		});
		break;
	}
});
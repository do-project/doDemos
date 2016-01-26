//related to index.ui
var app = sm("do_App");
var page = sm("do_Page");

// 返回按钮
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})

//
var do_ALayout_8 = ui("do_ALayout_8");
var do_ALayout_9 = ui("do_ALayout_9");
do_ALayout_8.on("touch", function(data, e) {
	app.openPage({
		source : "source://BaiduMap/view/BaiduMap/index1.ui",
		statusBarState : "transparent"
	});
})
do_ALayout_9.on("touch", function(data, e) {
	app.openPage({
		source : "source://BaiduMap/view/BaiduMap/index2.ui",
		statusBarState : "transparent"
	});
})
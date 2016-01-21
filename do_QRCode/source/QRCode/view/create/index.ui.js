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
var do_ALayout_7 = ui("do_ALayout_7");
do_ALayout_7.on("touch", function(data, e) {
	app.openPage({
		source : "source://QRCode/view/create/index2.ui",
		statusBarState : "transparent"
	});
})
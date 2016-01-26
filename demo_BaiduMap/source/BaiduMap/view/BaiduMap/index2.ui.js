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

var do_BaiduPanoramaView_1 = ui("do_BaiduPanoramaView_1");
page.on("loaded", function() {
	do_BaiduPanoramaView_1.showPanoramaView("40.0591080000", "116.3075270000");
})

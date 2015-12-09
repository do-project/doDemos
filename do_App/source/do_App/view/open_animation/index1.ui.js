//related to index1.ui
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

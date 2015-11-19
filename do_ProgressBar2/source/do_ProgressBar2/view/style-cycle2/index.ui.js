//related to index.ui
var app = sm("do_App");
var page = sm("do_Page");

 //返回按钮
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})



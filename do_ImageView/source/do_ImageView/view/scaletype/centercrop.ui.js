var page=sm("do_Page");
var close=ui("close");
var app=sm("do_App")
page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	page.on("back", function(data) {
		app.closePage();
	})
});

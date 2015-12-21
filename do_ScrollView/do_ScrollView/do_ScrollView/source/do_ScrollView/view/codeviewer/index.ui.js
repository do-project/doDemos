/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
// //
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
// //
var webview = ui("do_WebView_1");
webview.url = "https://github.com/do-project/doDemos/tree/master/do_ScrollView";


/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
////
var page = sm("do_Page");
var close = ui("close");
close.on("touch",function(){
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
////
var button = ui("do_Button_1");
button.on("touch", function() {
	app.openPage({
		source : "source://do_App/view/closepage/page2.ui",
		statusBarState : "transparent"
	});
});
/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");

var button1 = ui("do_Button_1");
var button2 = ui("do_Button_2");
button1.on("touch", function() {
	app.closePage();
});
button2.on("touch", function() {
	app.openPage({
		source : "source://do_App/view/closepage/page3.ui",
		statusBarState : "transparent"
	});
});
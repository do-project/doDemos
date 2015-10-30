/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var global = sm("do_Global");
var app = sm("do_App");

var button = ui("do_Button_1");
button.on("touch", function() {
	app.closePage();
});
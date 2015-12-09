/**********************************************
 * Author : @小雪
 * Timestamp : @2015-12-04
 **********************************************/
var d1 = require("deviceone");
var app = d1.sm("do_App");

app.on("loaded", function () {

	this.openPage({
		source : "source://weibo/view/index.ui",
		statusBarState : "transparent"
	});
});
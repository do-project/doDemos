/**********************************************
 * Author : @Author
 * Timestamp : @Timestamp
 **********************************************/
var d1 = require("deviceone");
var app = d1.sm("do_App");

app.on("loaded", function () {
	this.openPage({
		source : "source://do_SeekBar/view/index.ui",
		statusBarState : "transparent"
	});
});
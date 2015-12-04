/*******************************************************************************
 * Author : and TimeStamp : 2015-10-26
 ******************************************************************************/
var d1 = require("deviceone");
var app = d1.sm("do_App");

app.on("loaded", function() {
	this.openPage({
		source : "source://do_BarcodeView/view/index.ui",
//		source : "source://do_BarcodeView/view/weixin/result/index0.ui",
		statusBarState : "transparent"
	});
});
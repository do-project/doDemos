/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");

var button1 = ui("do_Button_1");
var button2 = ui("do_Button_2");
var button3 = ui("do_Button_3");
button1.on("touch", function() {
	app.openPage("source://do_App/view/openpage_statusbar/page1.ui");
});
button2.on("touch", function() {
	app.openPage({
		source : "source://do_App/view/openpage_statusbar/page2.ui",
		statusBarState : "transparent",
		statusBarFgColor:"black"//修改缺省的状态栏字体颜色，只有white，black二种，只支持ios
	});
});
button3.on("touch", function() {
	app.openPage({
		source : "source://do_App/view/openpage_statusbar/page3.ui",
		statusBarState : "hide"
	});
});
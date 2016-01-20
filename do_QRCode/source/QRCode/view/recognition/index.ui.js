//related to index.ui
var app = sm("do_App");
var page = sm("do_Page");

// 返回按钮
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})

//
var do_Button_1=ui("do_Button_1");
var do_ImageView_4=ui("do_ImageView_4");
var target = sm("do_QRCode");
var do_WebView_3=ui("do_WebView_3");
var do_ALayout_4=ui("do_ALayout_4");
var do_Button_3=ui("do_Button_3");
var do_Button_2=ui("do_Button_2");
do_Button_1.on("touch", function(data, e) {
	do_ALayout_4.visible=true;
})
do_Button_3.on("touch", function(data, e) {
	target.recognition("data://a.jpg", function(data, e) {
	do_WebView_3.visible=true;
	do_WebView_3.url=data;
	do_ALayout_4.visible=false;
})
})
do_Button_2.on("touch", function(data, e) {
	do_ALayout_4.visible=false;
})

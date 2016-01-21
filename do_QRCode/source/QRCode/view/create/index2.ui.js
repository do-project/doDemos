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

// 生成二维码
var do_ImageView_4 = ui("do_ImageView_4");
var do_Button_1 = ui("do_Button_1");
var target = sm("do_QRCode");
do_Button_1.on("touch", function(data, e) {
	target.create("http://www.deviceone.net/", function(data, e) {
		deviceone.print(data, "生成的二维码地址");
		do_ImageView_4.source = data;
		do_Button_1.visible = false;
	})
})
//related to index.ui
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");

// 返回按钮
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})

//
var target = ui("do_SeekBar_1");
var timer = mm("do_Timer");
var nf = sm("do_Notification");
var up = ui("up1");
var down = ui("down1");
up.on("touch", function(data, e) {
	var a=target.progress;
	target.progress=a+10;
	nf.toast("增加声音");
})
down.on("touch", function(data, e) {
	var a=target.progress;
	a=a-10;
	target.progress=a;
	nf.toast("减弱声音");
})

 

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
var nf = sm("do_Notification");
var up = ui("up");
var down = ui("down");
up.on("touch", function(data, e) {
	nf.toast("上一曲");
})
down.on("touch", function(data, e) {
	nf.toast("下一曲");
})

//
var target = ui("do_SeekBar_1");
var a = ui("do_ALayout_6");
var image = ui("do_ImageView_4");
var timer = mm("do_Timer");

nf.toast("开始播放");
timer.start();
var i = 1;
timer.on("tick", function() {
	target.progress = i;
	if (i == 100) {
		timer.stop();
	}
	i++;
})

a.on("touch", function() {
	image.source = "source://do_SeekBar/image/4.png";
	nf.toast("暂停播放");
	timer.on("tick", function() {
		timer.stop();
	})
});
 

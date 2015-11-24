var nf = sm("do_Notification");

var bgmask = ui("maskbg");
bgmask.on("touch", function() {
	bgmask.visible = false;
});

var canel = ui("do_Button_canel");
canel.on("touch", function() {
	bgmask.visible = false;
});

var camera = ui("do_Button_1");
camera.on("touch", function() {
	nf.toast("拍照...");
})

var album = ui("do_Button_2");
album.on("touch", function() {
	nf.toast("相册...");
})
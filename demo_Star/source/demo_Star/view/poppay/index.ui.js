var page = sm("do_Page");
var nf = sm("do_Notification");

var bgmask = ui("maskbg");
bgmask.on("touch", "", 300, function() {
	this.visible = false;
});

var nlb = 0;
// 键盘
for (var d = 0; d < 11; d++) {
	var numb = ui("numb" + d);
	numb.on("touch", function() {
		if (nlb == 6)
			return;
		var lb = ui("lb" + (nlb + 1));
		lb.text = this.text;
		nlb++;
		if (nlb == 6) {
			nf.alert("ok了");
		}

	}).on("touchDown", function() {
		this.bgColor = "F0F0F0FF";
	}).on("touchUp", function() {
		this.bgColor = "FFFFFF00";
	});
}
// 退格
var backbtn = ui("bback");
backbtn.on("touch", function() {
	if (nlb == 0)
		return;
	nlb--;
	var lb = ui("lb" + (nlb + 1));
	lb.text = "●";
}).on("touchDown", function() {
	this.bgColor = "F0F0F0FF";
}).on("touchUp", function() {
	this.bgColor = "FFFFFF00";
});
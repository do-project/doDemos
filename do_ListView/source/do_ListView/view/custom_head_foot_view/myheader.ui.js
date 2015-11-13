//related to myheader.ui
var anim = mm("do_Animation");
var anim_imageview = ui("do_ImageView_1");
var imageview = ui("do_ImageView_2");
var label = ui("do_Label_1");
var cover = ui("do_Label_3");

// 旋转动画效果
anim.fillAfter = false;
anim.rotate({
	duration : 2000,
	fromDegree : 0,
	toDegree : 360,
	pivotX : 0.5,
	pivotY : 0.5,
	repeatCount : -1
}, "id");



var page = sm("do_Page");
page.on("mypull", function(data) {
	if (data.state == 2) {
		anim_imageview.animate(anim);
		anim_imageview.visible = true;
		imageview.visible = false;
		label.text = "刷新中...";
	} else {
		anim_imageview.visible = false;
		imageview.visible = true;
		var alpha = 200 - 2 * Math.ceil(data.offset);
		if (alpha < 0)
			alpha = 0;
		if (alpha < 16)
			cover.bgColor = "0000000" + alpha.toString(16);
		else
			cover.bgColor = "000000" + alpha.toString(16);
		if (data.state == 1) {
			label.text = "松手开始刷新";
		} else { // (data.state==0)
			label.text = "下拉刷新";
		}
	}
})
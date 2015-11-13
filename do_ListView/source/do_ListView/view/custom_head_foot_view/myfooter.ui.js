//related to myfooter.ui
var anim = mm("do_Animation");
var anim_imageview = ui("do_ImageView_1");

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
anim_imageview.animate(anim);
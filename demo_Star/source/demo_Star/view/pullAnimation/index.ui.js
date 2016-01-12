//related to pullAnimation.ui
var image=ui("do_ImageView_3");
var scroll=ui("do_ScrollView_1");
var nf=sm("do_Notification");
var list=ui("do_ListView_1");
var page=sm("do_Page");
var app=sm("do_App");
var close = ui("close1");
var do_Label_3=ui("do_Label_3");

close.on("touch", function() {
	app.closePage();
})
page.on("back", function() {
	app.closePage();
});

do_Label_3.show("slide_l2r", 3000);

var animator = mm("do_Animator");
var animatorB = mm("do_Animator");

		//顶部背景显示动画
		animator.append(5000, props, "EaseOut");
		var props = {bgColor:"0080FFFF"}
		animatorB.append(5000, propsB, "EaseOut");
		var propsB = {bgColor:"#ffFFFF00"}
		scroll.on("scroll", function(datas) {
			//根据返回的值，改变图片的高
			deviceone.print(JSON.stringify(datas));
			image.height = 500 -+ datas;
			image.redraw();
			
		});



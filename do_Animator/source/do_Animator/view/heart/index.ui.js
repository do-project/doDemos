//related to index.ui.ui
var root = ui("$");
var app = sm("do_App");
// //
var page = sm("do_Page");
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
// //
var button = ui("do_Button_1");
var idcount = 0;
button.on("touch", function() {
	var anim = mm("do_Animator");
	for (var i = 0; i < 70; i++) {
		anim.append(50 + 10 * i, {
			"x" : button.x + button.width / 2
					+ parseInt(Math.random() * 2 * i - i),
			"y" : button.y - 10 * i - parseInt(Math.random() * 10 + 1)
		})
	}
	root.add("id" + idcount, "source://do_Animator/view/heart/balloon.ui",
			button.x + button.width / 2, button.y);
	var image = ui("id" + idcount);
	idcount++;
	image.animate(anim, function() {
		image.remove();
		anim.release();
	})
});
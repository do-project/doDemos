var page = sm("do_Page");
var app = sm("do_App");

var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function() {
	app.closePage();
});

// switch切换开关
var swbox = ui("switch_box");
var swbg = ui("switch_bg");
var swbtn = ui("switch_btn");
swbox.on("touch", function() {
	if (swbg.bgColor == "AFAFAFFF") {
		swbtn.x = 65;
		swbtn.redraw();
		swbg.bgColor = "4DD965FF";
	} else {
		swbtn.x = 5;
		swbtn.redraw();
		swbg.bgColor = "AFAFAFFF";
	}
});
// switch切换开关END

// radio切换
var radio1, radio2, r1yes, r2yes;
radio1 = ui("do_ALayout_radio1");
radio2 = ui("do_ALayout_radio2"); // 点击的容器
r1yes = ui("radioyes1");
r2yes = ui("radioyes2"); // 点击后的样式
var radios = [ radio1, radio2 ];
var ryess = [ r1yes, r2yes ];
var radiotouch = function(index) {
	for (i = 0; i < radios.length; i++) {
		if (i == index) {
			ryess[i].visible = true;
		} else {
			ryess[i].visible = false;
		}
	}
};
radios.forEach(function(dl, i) {
	dl.on("touch", function(data, e) {
		radiotouch(i);
	});
});
// radio切换END

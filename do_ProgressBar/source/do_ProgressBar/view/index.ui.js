/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");

// //
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
// //
var code = ui("code");
code.on("touch", function() {
	app.openPage({
		source : "source://do_ProgressBar/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});
// //
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "简单使用展示"
} ]);
listview.bindItems(listdata);
var timer = mm("do_Timer");
timer.on("tick", function() {
		var simple = ui("simple");
		simple.visible = false;
		timer.stop();
})
listview.on("touch", function(index) {
	switch (index) {
	case 0:
		var simple = ui("simple");
		if (!simple) {
			addview("simple", "source://do_ProgressBar/view/simple/index.ui");
		} else {
			simple.visible = true;
		}
		// 启动一个定时器模拟一个耗时操作，过三秒结束
		timer.delay = 3000;
		timer.start();
		break;
	}
});

function addview(id, path) {
	var view = ui(id);
	if (!view) {
		root.add(id, path, 0, 128)
	} else {
		view.visible = true;
	}
}
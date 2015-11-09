/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");

// //返回按钮
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


listview.on("touch", function(index) {
	switch (index) {
	case 0:
		addSimple();
		break;
	}
});

////简单使用展示
var timer = mm("do_Timer");
timer.on("tick", function() {
	simple.visible = false;
	timer.stop();
})
var simple;
function addSimple() {
	if (!simple) {
		root.add("simple", "source://do_ProgressBar/view/simple/index.ui",0, 128);
		simple = ui("simple");
	} else {
		simple.visible = true;
	}
	// 启动一个定时器模拟一个耗时操作，过三秒结束
	timer.delay = 3000;
	timer.start();
}
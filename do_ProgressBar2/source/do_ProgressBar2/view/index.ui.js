/*******************************************************************************
 * Author :小雪 TimeStamp :2015-11-18
 ******************************************************************************/
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
// 关闭当前页
var code = ui("code");
code.on("touch", function() {
	app.openPage({
		source : "source://do_ProgressBar2/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});

//
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "普通进度条样式显示"
}, {
	"index" : "2",
	"name" : "环形进度条样式展示1"
}, {
	"index" : "3",
	"name" : "环形进度条样式展示2"
} ]);
listview.bindItems(listdata);

listview.on("touch", function(index) {
	switch (index) {
	case 0:
		app.openPage({
			source : "source://do_ProgressBar2/view/style-normal/index.ui",
			statusBarState : "transparent"
		});
		break;
	case 1:
		addstyle();
		break;
	case 2:
		app.openPage({
			source : "source://do_ProgressBar2/view/style-cycle2/index.ui",
			statusBarState : "transparent"
		});
		break;
	}

});

// 简单使用展示
var timer = mm("do_Timer");
timer.on("tick", function() {
	simple.visible = false;
	timer.stop();
})
var simple;
function addstyle() {
	if (!simple) {
		root.add("simple",
				"source://do_ProgressBar2/view/style-cycle/index.ui", 0, 128);
		simple = ui("simple");
	} else {
		simple.visible = true;
	}
	// 启动一个定时器模拟一个耗时操作，过三秒结束
	timer.delay = 3000;
	timer.start();
}

/*******************************************************************************
 * Author :小雪 TimeStamp :2015-11-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");

//返回按钮
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})

//跳到代码页
var code = ui("code");
code.on("touch", function() {
	app.openPage({
		source : "source://do_ProgressBar1/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});

//
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "普通进度条样式展示"
},
{
	"index" : "2",
	"name" : "缩放进度条样式展示"
}
]);
listview.bindItems(listdata);


listview.on("touch", function(index) {
	switch (index) {
	case 0:
		app.openPage({
			source : "source://do_ProgressBar1/view/style-normal/index.ui",
			statusBarState : "transparent"
		});
		break;
	case 1:
		app.openPage({
			source : "source://do_ProgressBar1/view/style-zoom/index.ui",
			statusBarState : "transparent"
		});
		break;
	}
});

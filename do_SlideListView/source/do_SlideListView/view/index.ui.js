/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");

var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "简单示例"
} ]);
listview.bindItems(listdata);

var root = ui("$");
var app = sm("do_App");
listview.on("touch", function(index) {
	if (index == 0) {
		app.openPage({
			source : "source://do_SlideListView/view/simple/index.ui",
			statusBarState : "transparent"
		});
	}
});

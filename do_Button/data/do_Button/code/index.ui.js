/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");

////
var close = ui("close");
close.on("touch",function(){
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
////
var code = ui("code");
code.on("touch",function(){
	app.openPage({
		source : "source://do_Button/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});
////
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "带背景图片的Button"
}, {
	"index" : "2",
	"name" : "带按下弹起事件的Button"
}, {
	"index" : "3",
	"name" : "button功能2"
}, {
	"index" : "4",
	"name" : "button功能2"
}, {
	"index" : "5",
	"name" : "button功能2"
}, {
	"index" : "6",
	"name" : "button功能2"
} ]);
listview.bindItems(listdata);

listview.on("touch", function(index) {
	if (index == 0) {
		addview("bgImage_id", "source://do_Button/view/bgImage/index.ui")
	} else if (index == 1) {
		addview("event_id", "source://do_Button/view/event/index.ui")
	} else if (index == 2) {

	} else if (index == 3) {

	} else if (index == 4) {

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
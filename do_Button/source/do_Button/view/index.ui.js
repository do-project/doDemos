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
		source : "source://do_Button/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});
// //
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "带背景图片的Button"
}, {
	"index" : "2",
	"name" : "带按下弹起事件的Button"
} ]);
listview.bindItems(listdata);
var bgImageView, eventView;
listview.on("touch",
		function(index) {
			switch (index) {
			case 0:
				addview(bgImageView, "bgImage_id",
						"source://do_Button/view/bgImage/index.ui")
				break;
			case 1:
				addview(eventView, "event_id",
						"source://do_Button/view/event/index.ui")
				break;
			}
		});

function addview(view, id, path) {
	if (!view) {
		root.add(id, path, 0, 128)
		view = ui(id);
	} else {
		view.visible = true;
	}
}
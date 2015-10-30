/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");

var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "update函数实现应用内升级"
}]);
listview.bindItems(listdata);

var root = ui("$");
var app = sm("do_App");
listview.on("touch", function(index) {
	if (index == 0) {
		app.openPage({
			source : "source://do_App/view/update/index.ui",
			statusBarState : "transparent"
		});
	} else if (index == 1) {
		
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
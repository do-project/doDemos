/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
////
var page = sm("do_Page");
var close = ui("close");
close.on("touch",function(){
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
////
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "update函数实现应用内升级"
},{
	"index" : "2",
	"name" : "closePage和closePageToID函数"
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
		app.openPage({
			source : "source://do_App/view/closepage/page1.ui",
			statusBarState : "transparent",
			id: "page1_id" //表示page1.ui的id为page1_id
		});
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
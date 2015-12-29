/**********************************************
 * Author : @Author
 * Timestamp : @Timestamp
 **********************************************/
var nf = sm("do_Notification");
var page = sm("do_Page");
var close = ui("close");
var code = ui("code");
var listview = ui("do_ListView_1");
var listdata = mm("do_ListData");
var app = sm("do_App");

page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	page.on("back", function(data) {
		app.closePage();
	})	
	code.on("touch", function() {
		app.openPage({
			source : "source://view/codeviewer/index.ui",
			statusBarState : "transparent"
		});
	});
	listdata.addData([ {
		"index" : "1",
		"name" : "base64转换上传的方式"
	}, {
		"index" : "2",
		"name" : "upload的方式"
	}]);
	listview.bindItems(listdata);
	listview.on("touch", function(index) {
		switch (index) {
		case 0:
			app.openPage({
				source : "source://view/do_Http/base64/upload.ui",
				statusBarState : "transparent"
			});
			break;
		case 1:
			app.openPage({
				source : "source://view/do_Http/http/upload.ui",
				statusBarState : "transparent",
				
			});
			break;
		}
	});

})





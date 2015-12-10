//related to event.ui
var nf = sm("do_Notification");
var page = sm("do_Page");
var close = ui("close");
var app = sm("do_App");
var listview=ui("do_ListView_1");
var listdata = mm("do_ListData");
page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	page.on("back", function(data) {
		app.closePage();
	})
   listdata.addData([ {
		"index" : "1",
		"name" : "计数事件"
	}, {
		"index" : "2",
		"name" : "计算事件"
	}]);
	listview.bindItems(listdata);
	listview.on("touch", function(index) {
		switch (index) {
		case 0:
			app.openPage({
				source : "source://do_UMengAnalytics/view/event/计数.ui",
				statusBarState : "transparent"
			});
			break;
		case 1:
			app.openPage({
				source : "source://do_UMengAnalytics/view/event/计算.ui",
				statusBarState : "transparent"
				
			});
			break;
		
		
		} 

});
})

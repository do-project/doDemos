//related to scaletype.ui
var nf = sm("do_Notification");
var page = sm("do_Page");
var close = ui("close1");
var listview = ui("do_ListView_1");
var listdata = mm("do_ListData");

page.on("loaded", function(data, e) {
	page.on("back", function(data) {
		app.closePage();
	})
	close.on("touch", function() {
	app.closePage();
    })
    listdata.addData([ {
    	"index" : "1",
    	"name" : "拉伸填充"
    }, {
    	"index" : "2",
    	"name" : "原图大小"
    },{
    	"index" : "3",
    	"name" : "缩放宽或高"
    },{
    	"index" : "4",
    	"name" : "居中裁剪"
    }]);
    listview.bindItems(listdata);
    listview.refreshItems({});
    var root = ui("$");
    var app = sm("do_App");
    listview.on("touch", function(index) {
    	switch (index) {
    	case 0:
    		app.openPage({
    			source : "source://do_ImageView/view/scaletype/fillxy.ui",
    			statusBarState : "transparent"
    		});
    		break;
    	case 1:
    		app.openPage({
    			source : "source://do_ImageView/view/scaletype/center.ui",
    			statusBarState : "transparent"
    		});
    		break;
    	case 2:
    		app.openPage({
    			source : "source://do_ImageView/view/scaletype/fillxory.ui",
    			statusBarState : "transparent"
    		});
    		break;
    	case 3:
    		app.openPage({
    			source : "source://do_ImageView/view/scaletype/centercrop.ui",
    			statusBarState : "transparent"
    		});
    		break;
    	}
    });

})






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
		source : "source://demo_Star/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});
// //
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "类似支付密码的输入界面"
}, {
	"index" : "2",
	"name" : "底部弹出一个菜单"
}, {
	"index" : "3",
	"name" : "RadioButton和SwitchView的实现"
}, {
	"index" : "4",
	"name" : "加载页面"
}, {
	"index" : "5",
	"name" : "组件动画及可下拉页面展示"
}, {
	"index" : "6",
	"name" : "下拉列表"
}, {
	"index" : "7",
	"name" : "圆形头像图标"
}]);
listview.bindItems(listdata);

var payView, popmenu;

listview.on("touch", function(index) {
	switch (index) {
	case 0:
		addview(payView, "payView_id",
				"source://demo_Star/view/poppay/index.ui");
		payView = ui("payView_id");
		break;
	case 1:
		addview(popmenu, "popmenu_id",
				"source://demo_Star/view/popmenu/index.ui");
		popmenu = ui("popmenu_id");
		break;
	case 2:
		app.openPage({
			source : "source://demo_Star/view/radiobutton_switch/index.ui",
			statusBarState : "transparent",
			animationType: "push_r2l_1",
		});
		break;
	case 3:
		app.openPage({
			source : "source://demo_Star/view/loading/index.ui",
			statusBarState : "transparent",
			animationType: "push_r2l_1",
		});
		break;
	case 4:
		app.openPage({
			source : "source://demo_Star/view/pullAnimation/index.ui",
			statusBarState : "transparent",
			animationType: "push_r2l_1",
		});
		break;
	case 5:
		app.openPage({
			source : "source://demo_Star/view/down_list/index.ui",
			statusBarState : "transparent",
			animationType: "push_r2l_1",
		});
		break;
	case 6:
		app.openPage({
			source : "source://demo_Star/view/round_picture/index.ui",
			statusBarState : "transparent",
			animationType: "push_r2l_1",
		});
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



//related to index.ui
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");

// //返回按钮
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})


var list=ui("do_ListView_1");
var listdata = mm("do_ListData");
list.bindItems(listdata);
var data=[{"$tag":0,"label1":"openPage1","label2":"页面效果：从左至右滑出"},
          {"$tag":1,"label1":"openPage2","label2":"页面效果：从右至左滑出"},
          {"$tag":2,"label1":"openPage3","label2":"页面效果：从底至上滑出"},
          {"$tag":3,"label1":"openPage4","label2":"页面效果：从上至底滑出"},
          {"$tag":4,"label1":"openPage5","label2":"页面效果：从左至右推出"},
          {"$tag":5,"label1":"openPage6","label2":"页面效果：从右至左推出"},
          {"$tag":6,"label1":"openPage7","label2":"页面效果：从底至上滑出"},
          {"$tag":7,"label1":"openPage8","label2":"页面效果：从上至底推出"},
          {"$tag":8,"label1":"openPage9","label2":"页面效果：淡入淡出"},
          {"$tag":9,"label1":"openPage10","label2":"页面效果：上翻页"},
          {"$tag":10,"label1":"openPage11","label2":"页面效果：下翻页"},
          {"$tag":11,"label1":"openPage12","label2":"页面效果：立体翻转"},
          {"$tag":12,"label1":"openPage13","label2":"页面效果：从左至右滑出（旧页淡出效果）"},
          {"$tag":13,"label1":"openPage14","label2":"页面效果：从右至左滑出（旧页淡出效果）"},
          {"$tag":14,"label1":"openPage15","label2":"页面效果：从左至右推出（旧页被遮盖）"},
          {"$tag":15,"label1":"openPage16","label2":"页面效果：从右至左推出（旧页被遮盖）"},
          ]

listdata.addData(data);
list.refreshItems({});

list.on("touch",function(index){
	var all = listdata.getOne(index);
	var tag = all.$tag;
	switch (tag){
		case 0:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui", animationType:"slide_l2r",statusBarState : "transparent"}, function(data, e){});
			break;	
		case 1:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "slide_r2l",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 2:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "slide_b2t",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 3:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "slide_t2b",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 4:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "push_l2r",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 5:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "push_r2l",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 6:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "push_b2t",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 7:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "push_t2b",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 8:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "fade",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 9:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "page_curl",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 10:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "page_uncurl",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 11:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "cube",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 12:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "slide_l2r_1",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 13:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "slide_r2l_1",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 14:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "push_l2r_1",statusBarState : "transparent"}, function(data, e) {});
			break;	
		case 15:
			app.openPage({source:"source://do_App/view/open_animation/index1.ui",animationType: "push_r2l_1",statusBarState : "transparent"}, function(data, e) {});
			break;	
			
	}
});
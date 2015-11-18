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
		source : "source://do_TextField/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});
// //
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "InputType属性展示"
},{
	"index" : "2",
	"name" : "简单表单示例"
}]);
listview.bindItems(listdata);
var formdata = {};//初始化表单数据
listview.on("touch",
		function(index) {
			switch (index) {
			case 0:
				app.openPage({
					source : "source://do_TextField/view/input/index.ui",
					statusBarState : "transparent"
				});
				break;
			case 1:
				app.openPage({
					source : "source://do_TextField/view/simple_form/index.ui",
					statusBarState : "transparent",
					animationType: "push_r2l_1",
					data:formdata
				});
				break;
			}
			
		});
page.on("result", function(data) {
	//从表单simple_form/index.ui返回的表单数据
	formdata = data;
})
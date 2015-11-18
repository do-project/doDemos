/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
// //
var page = sm("do_Page");
var close = ui("close");
close.on("touch", function() {
	app.closePage(getInputData());
})
page.on("back", function(data) {
	app.closePage(getInputData());
})
function getInputData() {
	var d = {
		"post" : post.text,
		"address" : address.text,
		"phone" : phone.text,
		"name" : name.text,
		"area" : area.text
	}
	return d;
}
// //

var main = ui("$");
var layout = ui("do_ALayout_8");
layout.on("touch", function() {
	page.hideKeyboard();// 点击空白处隐藏输入键盘
})

var post = ui("post");
var address = ui("address");
var name = ui("name");
var area = ui("area");
var phone = ui("phone");

var data = mm("do_HashData");
main.setMapping({
	"post.text" : "post",
	"address.text" : "address",
	"name.text" : "name",
	"area.text" : "area",
	"phone.text" : "phone"
});

main.bindData(data);
data.addData(page.getData());// 获取从上一级page返回过来的data数据
main.refreshData();
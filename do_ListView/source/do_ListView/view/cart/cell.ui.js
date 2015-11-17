//related to chat_cell.ui
var root = ui("$");
;// $是这个ui文件根节点组件的通配符，如果指定组件的id，也可以用id来获取对象

root.setMapping({
	"photo_imageview.source" : "photo",
	"name_label.text" : "name",
	"price_label.text" : "price",
	"checkbox.source" : "checked",
	"count_label.text" : "count",
	"count_label.tag" : "index"// 利用一个组件的tag属性来记录当前cell的索引
});
var page = sm("do_Page");
var checkedLayout = ui("do_ALayout_3");
var checkedImage = ui("checkbox");
var plus = ui("do_Button_1");
var subtract = ui("do_Button_2");
var count = ui("count_label");

checkedLayout.on("touch", function() {
	if (checkedImage.source==deviceone.checked) {
		checkedImage.source = deviceone.unchecked;
	} else {
		checkedImage.source = deviceone.checked;
	}
	fireMyorder();
})

plus.on("touch", function() {
	var c = count.text;
	count.text = (c * 1) + 1;
	fireMyorder();
});
subtract.on("touch", function() {
	var c = count.text;
	c = c - 1;
	if (c < 0)
		c = 0
	count.text = c;
	fireMyorder();
});

function fireMyorder() {
	var d = {
		"index" : count.tag,
		"count" : count.text,
		"checked" : checkedImage.source
	};
	page.fire("myorder", d);
}
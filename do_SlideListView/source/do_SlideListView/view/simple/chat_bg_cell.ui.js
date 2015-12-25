//related to chat_bg_cell.ui
var nf = sm("do_Notification");
var button1 = ui("do_Button_1");
var button2 = ui("do_Button_2");
var page = sm("do_Page");
//related to chat_cell.ui
var root = ui("$");;//$是这个ui文件根节点组件的通配符，如果指定组件的id，也可以用id来获取对象

root.setMapping({
	"do_Button_1.tag" : "id"
});
button1.on("touch",function(){
	nf.toast("取消关注"+button1.tag);
})


button2.on("touch",function(){
	page.fire("removeCell",button1.tag);
})
//related to chat_bg_cell.ui
var nf = sm("do_Notification");
var button1 = ui("do_Button_1");
var button2 = ui("do_Button_2");

button1.on("touch",function(){
	nf.toast("取消关注");
})


button2.on("touch",function(){
	nf.toast("删除");
})
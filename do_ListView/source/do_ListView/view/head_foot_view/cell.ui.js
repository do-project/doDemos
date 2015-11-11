//related to chat_cell.ui
var root = ui("$");;//$是这个ui文件根节点组件的通配符，如果指定组件的id，也可以用id来获取对象

root.setMapping({
	"photo_imageview.source" : "photo",
	"name_label.text" : "name",
	"time_label.text" : "time",
	"score_label.text" : "score",
	"buy_layout.bgColor" : "bgColor",
	"buy_button.text" : "buy",
	"buy_button.fontColor" : "bgColor",
});
var nf = sm("do_Notification");
var buy = ui("buy_layout");
buy.on("touch",function(){
	nf.toast("售罄");
})


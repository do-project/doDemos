//related to chat_cell.ui
var root = ui("$");;//$是这个ui文件根节点组件的通配符，如果指定组件的id，也可以用id来获取对象

root.setMapping({
	"photo_imageview.source" : "photo",
	"name_label.text" : "name",
	"lastmessage_label.text" : "lastmessage.message",
	"lasttime_label.text" : "lastmessage.time",
	"unread_label.visible" : "unread",
	"unread_label.text" : "unread-count",
	"name_label.fontColor" : "isgroup",
});
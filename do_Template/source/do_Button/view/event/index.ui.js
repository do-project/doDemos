//related to index.ui.ui
var root = ui("$");
root.on("touch", function() {
	root.visible = false;
});
var button = ui("do_Button_1");
var label = ui("do_Label_1");

var nf = sm("do_Notification");
button.on("touch", function() {
	nf.toast("touch事件触发");
});
button.on("touchDown", function() {
	button.text = "手指抬起"
	button.bgColor = "FF00FFFF";
	label.text = "手指移出按钮再抬起不会触发touch事件"
});
button.on("touchUp", function() {
	button.bgColor = "996633FF";
	button.text = "手指按下";
	label.text = "";
});
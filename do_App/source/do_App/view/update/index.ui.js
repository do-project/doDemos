/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");

var button = ui("do_Button_1");
button.on("touch", function() {
	// 通常做这个步骤之前是先从网络上下载一个zip文件，然后解压到data下一个目录，这个demo省去这个步骤
	app.update([ "data://do_App/update/index.ui",
			"data://do_App/update/index.ui.js" ],
			"source://do_App/view/update",function(){
		app.closePage();
	});
	
});
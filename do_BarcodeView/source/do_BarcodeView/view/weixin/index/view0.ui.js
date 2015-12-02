//related to view0.ui
var app = sm("do_App");
var page = sm("do_Page");

var back = ui("do_ImageView_1");
back.on("touch",function(){
	app.closePage();
})

var barcode = ui("do_BarcodeView_1");

page.on("start",function(){
	barcode.start(function(data, e) {
		var result = JSON.stringify(data);
		deviceone.print(result,"扫描结果");
		app.openPage("source://do_BarcodeView/view/weixin/result/index0.ui", data, function(data, e) {
			
		})
	})
}) 

var album = sm("do_Album");
var select = ui("do_Button_1");
var sh = ui("do_ALayout_3");

select.on("touch",function(){
	album.select(1, function(data, e) {
		var selected = JSON.stringify(data);
		deviceone.print(selected,"已选择");
		sh.visible = true;
	})
})
sh.on("touch",function(){
	sh.visible = false;
})
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
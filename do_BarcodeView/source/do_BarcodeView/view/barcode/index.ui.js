//related to view0.ui
var app = sm("do_App");
var page = sm("do_Page");
var device = sm("do_Device");
var nf = sm("do_Notification");

var back = ui("do_ImageView_1");
back.on("touch",function(){
	app.closePage();
})

var barcode = ui("do_BarcodeView_1");
page.on("loaded",function(){
	barcode.start(function(data, e) {
		var result = JSON.stringify(data);
		nf.alert(result, "扫描结果")
	})
}) 

var reStar = ui("do_ALayout_1");
reStar.on("touch",function(){
	barcode.start(function(data, e) {
		var result = JSON.stringify(data);
		nf.alert(result, "扫描结果")
	})
})

var flash = ui("do_ImageView_2");
var i = 0;
flash.on("touch",function(){
	i = i+1;
	var R = i%2;
	if(R == 1){
		flash.source = "source://do_BarcodeView/image/barcodeview/flash_"+R+".png";
		device.flash("on");
	}
	else if(R == 0){
		flash.source = "source://do_BarcodeView/image/barcodeview/flash_"+R+".png";
		device.flash("off");
	}
})


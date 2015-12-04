/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var external = sm("do_External");
var global = sm("do_Global");

var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})

var open = ui("do_ALayout_4");
var option = ui("do_ALayout_6");
var cancel = ui("do_ALayout_8");

open.on("touch",function(){
	option.show("slide_b2t", 500);
})
cancel.on("touch",function(){
	option.hide("slide_t2b", 500);
})

var seg1 = ui("do_SegmentView_1");
var seg2 = ui("do_SegmentView_2");

var listdata1 = mm("do_ListData");
var listdata2 = mm("do_ListData");

var data1 = [
     {"bgC":"FF0000FF","iS":"source://do_BarcodeView/image/barcodeview/1.png","$3":"发送给朋友"},
	 {"bgC":"FF0000FF","iS":"source://do_BarcodeView/image/barcodeview/2.png","$3":"分享到朋友圈"},
	 {"bgC":"FF0000FF","iS":"source://do_BarcodeView/image/barcodeview/3.png","$3":"收藏"},
	 {"bgC":"000000FF","iS":"source://do_BarcodeView/image/barcodeview/4.png","$3":"在Safari中打开"},
	 {"bgC":"FF0000FF","iS":"source://do_BarcodeView/image/barcodeview/5.png","$3":"分享到手机QQ"}
]
var data2 = [
	{"bgC":"000000FF","iS":"source://do_BarcodeView/image/barcodeview/7.png","$3":"复制链接"},
	{"bgC":"FF0000FF","iS":"source://do_BarcodeView/image/barcodeview/6.png","$3":"调整字体"},
	{"bgC":"FF0000FF","iS":"source://do_BarcodeView/image/barcodeview/5.png","$3":"阅读模式"},
	{"bgC":"000000FF","iS":"source://do_BarcodeView/image/barcodeview/4.png","$3":"刷新"},
	{"bgC":"FF0000FF","iS":"source://do_BarcodeView/image/barcodeview/3.png","$3":"举报"}
]

listdata1.addData(data1);
seg1.bindItems(listdata1);
seg1.refreshItems();

listdata2.addData(data2);
seg2.bindItems(listdata2);
seg2.refreshItems();

var getData = page.getData()
var url = getData.value;
var type = getData.code;

seg1.on("indexChanged",function(index){
	if(index==3){
		deviceone.print(index);
		external.openURL(url);
		
	}
})
seg2.on("indexChanged",function(index){
	if(index==0){
		global.setToPasteboard(url);
		nf.alert("已复制", title, function(data, e) {
			option.hide("slide_t2b", 500);
		})
	}
	if(index==3){
		global.setToPasteboard(url);
		option.hide("slide_t2b", 500);
	}
})

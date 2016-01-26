//related to index.ui
var app = sm("do_App");
var page = sm("do_Page");

// 返回按钮
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})

//
var do_BaiduMapView_1 = ui("do_BaiduMapView_1");
do_BaiduMapView_1.setCenter({
	latitude : "40.0535169017",
	longitude : "116.3013508598"
});
var mark1 = [ {
	"id" : "id1",
	"latitude" : "40.0535169017",
	"longitude" : "116.3013508598",
	"url" : "data://mark.png",
	"info" : "辉煌国际 一室一厅 精装修 商住两用"
}, ];
do_BaiduMapView_1.addMarkers({
	data : mark1
});

// 点击标记触发该事件
do_BaiduMapView_1.on("touchMarker", function(data, e) {
});

//
var do_Button_5 = ui("do_Button_5");
var do_Button_6 = ui("do_Button_6");
do_Button_5.on("touch", function(data, e) {
	do_BaiduMapView_1.mapType = "standard";
})
do_Button_6.on("touch", function(data, e) {
	do_BaiduMapView_1.mapType = "satellite";
})

var do_Button_1 = ui("do_Button_1");
var do_Button_2 = ui("do_Button_2");
do_Button_1.on("touch", function(data, e) {
	var b = do_BaiduMapView_1.zoomLevel + 1;
	if (b > 20) {
		b = 20;
	}
	do_BaiduMapView_1.zoomLevel = b;
})
do_Button_2.on("touch", function(data, e) {
	var a = do_BaiduMapView_1.zoomLevel - 1;
	if (a < 3) {
		a = 3;
	}
	do_BaiduMapView_1.zoomLevel = a;
})
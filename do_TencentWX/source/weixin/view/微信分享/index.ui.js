//related to index.ui
var app = sm("do_App");
var page = sm("do_Page");

 //返回按钮
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})

//显示分享页面
var ALayout1=ui("ALayout1");
var image1=ui("do_ImageView_1");
image1.on("touch", function(data) {
	ALayout1.visible="true";
})

//取消分享页面
var button=ui("do_Button_1");
button.on("touch", function(data) {
	ALayout1.visible="false";
})

//微信分享
var nf = sm("do_Notification");
var wx = sm("do_TencentWX");
var ALayout2=ui("do_ALayout_7");
ALayout2.on("touch", function(data) {
	wx.share({appId:"wxddba85b2f236c6bc", scene:"0", type:"0", title:"标题", content:"分享文本内容", url:"http://www.deviceone.net", image:"data://1.jpg"}, function(data, e){
		nf.alert({text:data, title:"分享返回结果"}, function(data, e){});
	});
})

var ALayout3=ui("do_ALayout_5");
ALayout3.on("touch", function(data) {
	wx.share({appId:"wxddba85b2f236c6bc", scene:"1", type:"0", title:"标题", content:"分享文本内容", url:"http://www.deviceone.net", image:"data://1.jpg"}, function(data, e){
		nf.alert({text:data, title:"分享返回结果"}, function(data, e){});
	});
})

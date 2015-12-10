//related to 计数.ui

var page=sm("do_Page");
var UM=sm("do_UMengAnalytics");
var nf=sm("do_Notification");
var button=ui("do_Button_2");
var button1=ui("do_Button_3");
var close=ui("close");
var hash = mm("do_HashData");
var nf = sm("do_Notification");
var app=sm("do_App");
var i=0;
var j=0;
page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	page.on("back", function(data) {
		app.closePage();
	})
	//自定义事件，无参数计数事件
	button.on("touch",function(data,e){
		//无参数的计数事件应用于微博、QQ、微信分享的统计，
		//只要把UM.eventLog("click", {});放到分享的回调中就可以统计分享的次数
		//这里只是统计一下button的点击次数
		UM.eventLog("click1", {});
		if(button.fire){
			
			i=i+1;
			nf.toast("无参数事件触发了"+i);
		}
		
		
	});
	
	
	//有参数计数事件
	button1.on("touch",function(data,e){
		//统计电商应用中“购买”事件发生的次数，以及购买的商品类型及数量
		var map=hash.addData({"type":"book"},{"quantity":"3"});
		UM.eventLog("Parameters", {"purchase":"map"});
		if(button1.fire){
			
			j=j+1;
			nf.toast("有参数事件触发了"+j);
		}
	});
	
});
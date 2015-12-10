//related to tongji.ui
var UM = sm("do_UMengAnalytics");
var nf = sm("do_Notification");
var page = sm("do_Page");
var close = ui("close");
var app = sm("do_App");
var listdata=mm("do_ListData");
var listview=ui("do_ListView_1");
var label=ui("do_Label_1");
var pagename=label.text;
//进入页面的统计
page.on("resume", function(data, e) {
	UM.beginPageLog({pageName:"pagename"});
});
//离开页面的统计
page.on("pause", function(data, e) {
	UM.endPageLog({pageName:"pagename"});
});
page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	page.on("back", function(data) {
		app.closePage();
	})
	listdata.addData([ {
		"index" : "1",
		"name" : "读取在线参数"
	}, {
		"index" : "2",
		"name" : "是否加密传输日志"
	},{
		"index" : "3",
		"name" : "是否支持后台模式"
	},{
		"index" : "4",
		"name" : "是否统计后异常信息"
	}]);
	listview.bindItems(listdata);
	listview.on("touch", function(index) {
		var D = listdata.getOne(index);
		
		if (index == 0)
		{
			//读取在线参数
			//在线参数使您可以在网站上动态配置预设好的参数的参数值。
			//例如： 动态修改应用的欢迎语，修改应用中开关选项的"on"或"off"，以及类似游戏中虚拟物品的价格等。
			var aa = UM.readConfig("touch");
			var b=typeof aa;
			nf.alert(aa,"读取在线参数");
			nf.alert(b,"值得类型");
		
		}else if (index == 1)
		{
			//如果enable为true，SDK会对日志进行加密。加密模式可以有效防止网络攻击，提高数据安全性。
			//如果enable为false，SDK将按照非加密的方式来传输日志。
			UM.setEncryptLog(true);
			nf.alert("加密传输日志");
		}else if (index == 2)
		{
			UM.setBackgroundTask(true);
			nf.alert("支持后台模式");
		}else if (index == 3)
		{
			//SDK通过Thread.UncaughtExceptionHandler捕获程序崩溃日志，并在程序下次启动时发送到服务器。 
			//如不需要错误统计功能，可通过此方法关闭 MobclickAgent.setCatchUncaughtExceptions(false);
			UM.setCrashReportEnabled(true);
			nf.alert("统计后异常信息");
		}
		
	});
});

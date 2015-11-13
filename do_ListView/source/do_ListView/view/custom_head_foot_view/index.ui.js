//related to index.ui
var storage = sm("do_Storage");
var listdata = mm("do_ListData");
var listview = ui("listview");
var nf = sm("do_Notification");
var root = ui("$");
var info ;

// /返回按钮
var page = sm("do_Page");
var close = ui("close");
var app = sm("do_App");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
// //

var json_path = "data://do_ListView/movie.json";// 本地缓存的数据

if (storage.fileExist(json_path)) {
	storage.readFile(json_path, function(data, e) {
		// deviceone.print(JSON.stringify(data));
		listdata.addData(data);
		listview.bindItems(listdata);
		listview.refreshItems();
	})
}
// 随便下载一个网络图片来模拟网络取数据
var http = mm("do_Http");
http.timeout = 30000;
http.contentType = "application/json";
http.url = "http://g.hiphotos.baidu.com/zhidao/pic/item/b17eca8065380cd79f8ccc3fa144ad3458828155.jpg";
var newdata = {
	"photo" : "source://do_ListView/image/movies/Masters_of_Sex.png",
	"name" : "Masters of Sex",
	"time" : "2016-06-01 22:10 儿童影院",
	"score" : "9.8",
	"buy" : "预售",
	"bgColor" : "0000FFFF"
}
var anim = mm("do_Animation");
// alpha动画效果
anim.fillAfter = true;
anim.alpha({
	delay: 500,
	duration : 500,
	alphaFrom : 1,
	alphaTo : 0
}, "id1");

http.on("success", function(data) {
	listview.rebound();
	listdata.addOne(newdata, 0)
	listview.refreshItems();
	//显示一个刷新数据个数的通知，动画再隐藏
	if(!info){
		root.add("info",
                 "source://do_ListView/view/custom_head_foot_view/refresh_notification.ui",
				 0, 128);
		info = ui("info");
	}else{
		info.visible = true;
	}
	info.animate(anim, function(data, e) {
		info.visible = false;
	})
});

listview.on("pull", function(data) {
	page.fire("mypull", data);//触发一个自定义事件给headerview
	if (data.state == 2) {// 下拉到一定位置松手开始刷新数据
		http.download("data://temp.png");
	}
})
var added = false;
listview.on("push", function(data) {
	page.fire("mypush", data);//触发一个自定义事件给footerview
	if (data.state == 2) {
		if (!added) {
			storage.readFile("data://do_ListView/moremovie.json", function(
					data, e) {
				listdata.addData(data);
				listview.refreshItems();
				added = true;
			})
		} else {
			nf.toast("数据已加载完！")
		}

		listview.rebound();
	}
})
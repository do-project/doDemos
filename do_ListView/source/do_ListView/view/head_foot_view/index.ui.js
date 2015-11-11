//related to index.ui
var storage = sm("do_Storage");
var listdata = mm("do_ListData");
var listview = ui("listview");
var nf = sm("do_Notification");

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
http.on("success", function(data) {
	listview.rebound();
	listdata.addOne(newdata, 0)
	listview.refreshItems();
});

listview.on("pull", function(data) {
	if (data.state == 2) {// 下拉到一定位置松手开始刷新数据
		http.download("data://temp.png");
	}
})
var added = false;
listview.on("push", function(data) {
	if (data.state == 2) {
		if (!added) {
			storage.readFile("data://do_ListView/moremovie.json", function(data, e) {
				listdata.addData(data);
				listview.refreshItems();
				added = true;
			})
		}else{
			nf.toast("数据已加载完！")
		}

		listview.rebound();
	}
})
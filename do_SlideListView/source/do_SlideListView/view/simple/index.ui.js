//related to index.ui
var storage = sm("do_Storage");
var listdata = mm("do_ListData");
var listview = ui("listview");
var json_path = "data://do_SlideListView/chat.json";// 本地缓存的数据

if (storage.fileExist(json_path)) {
	storage.readFile(json_path, function(data, e) {
		// deviceone.print(JSON.stringify(data));
		listdata.addData(data);
		listview.bindItems(listdata);
		listview.refreshItems();
	})
}


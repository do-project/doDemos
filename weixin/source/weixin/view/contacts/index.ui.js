//related to index.ui
var storage = sm("do_Storage");
var hashdata = mm("do_HashData");
var index_listview = ui("index_listview");
var json_path = "data://weixin/contacts/contact.json";// 本地缓存的数据

if (storage.fileExist(json_path)) {
	storage.readFile(json_path, function(data, e) {
		// deviceone.print(JSON.stringify(data));
		hashdata.addData(data);
		/**
		 * 为IndeListView绑定数据源，只支持HashData实例，其中每组第一条数据表示分组信息，不可点击 data:数据源实例
		 * indexs：一个数组列表，按照此列表显示列表数据，可以为空，为空就按照HashData‘随机’显示列表数据
		 */
		index_listview.bindItems(hashdata, [ "↑", "A", "B", "C", "D", "E", "F",
				"G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
				"S", "T", "U", "V", "W", "X", "Y", "Z", "#" ]);
		index_listview.refreshItems();
	})
}
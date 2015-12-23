//related to index.ui
var storage = sm("do_Storage");
var listdata = mm("do_ListData");
var listview = ui("listview");
var json_path = "data://weixin/chats/chat.json";// 本地缓存的数据

if (storage.fileExist(json_path)) {
	storage.readFile(json_path, function(data, e) {
		// deviceone.print(JSON.stringify(data));
		listdata.addData(data);
		listview.bindItems(listdata);
		listview.refreshItems();
	})
}
var main = ui("chats_main");
var page = sm("do_Page");
page.on("loaded", function() {
	// 这个页面加载完显示出来后触发这个事件
	// 我们可以在这个事件里去获取最新的网络数据，来更新listview和data/chats/chat.json
});

var add_button = ui("add_imageview");
add_button.on("touch",
		function() {
			var menu = ui("menu_id");
			if (menu) {// 如果已经add过，就只是让这个view显示，而不是add一个新的
				if (menu.visible == false)
					menu.visible = true;
			} else {
				main.add("menu_id",
						"source://weixin/view/chats/chat_add_menu.ui");
			}
		});

listview.on("pull", function(data) {
	/**
	 * @此事件将会多次执行.
	 * @state == 0 : pull动作开始
	 * @state == 1 : pull动作持续中
	 * @state == 2 : pull动作结束
	 */
	if (data.state == 2||data.offset > 380){
		this.rebound();
		return;
	}
	if (data.offset > 100) {
		deviceone.print(JSON.stringify(data));
		page.fire("pull", data.offset);
	}
});
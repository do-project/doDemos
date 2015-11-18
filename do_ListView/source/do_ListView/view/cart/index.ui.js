//related to index.ui
//定义2个全局变量
deviceone.checked = "source://do_ListView/view/cart/checked.png";
deviceone.unchecked = "source://do_ListView/view/cart/unchecked.png";

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

var json_path = "data://do_ListView/cars.json";// 本地缓存的数据

if (storage.fileExist(json_path)) {
	storage.readFile(json_path, function(data, e) {
		// deviceone.print(JSON.stringify(data));
		listdata.addData(data);
		listview.bindItems(listdata);
		listview.refreshItems();
	})
}
// 自定义一个myorder事件，接受从cell传递过来的数据
page.on("myorder", function(d) {
	// 更新第index行的数据
	var cell_data = listdata.getOne(d.index);
	cell_data.checked = d.checked;
	cell_data.count = d.count;
	// 再更新listdata
	listdata.updateOne(d.index, cell_data);
	// 重新计算合计和结算数量
	compute();
})
var totalui = ui("do_Label_5");
var numberui = ui("do_Button_1");
var isAll = ui("do_ALayout_4");
var isAllImage = ui("do_ImageView_2");

isAll.on("touch", function() {
	if (isAllImage.source==deviceone.checked) {
		isAllImage.source = deviceone.unchecked;
	} else {
		isAllImage.source = deviceone.checked;
	}
	for (var i = 0; i < listdata.getCount(); i++) {
		var cell_data = listdata.getOne(i);
		cell_data.checked = isAllImage.source;
		listdata.updateOne(i,cell_data)
	}
	listview.refreshItems();
	compute();
});

function compute() {
	var number = 0;
	var total = 0;
	var isall = true;
	for (var i = 0; i < listdata.getCount(); i++) {
		var cell_data = listdata.getOne(i);
		var checked = cell_data.checked;
		if (checked.indexOf("unchecked") > 0) {
			isall = false;
			continue;
		} else {
			var count = cell_data.count * 1;
			number = number + count;
			var price = cell_data.price * 1;
			total = total + price * count;
		}
	}
	// 更新ui
	totalui.text = total;
	numberui.text = "去结算(" + number + ")";
	if (!isall) {
		isAllImage.source=deviceone.unchecked;
	}else{
		isAllImage.source=deviceone.checked;
	}
}
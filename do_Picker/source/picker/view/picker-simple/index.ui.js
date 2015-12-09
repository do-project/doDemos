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

/**
 * 给picker添加数据
 */
var tf1 = ui("do_TextField_2");
var picker1 = ui("do_Picker_1");
var listdata1 = mm("do_ListData");
var button1 = ui("do_Button_5");
var data1 = [ "男", "女" ];
listdata1.addData(data1);
picker1.bindItems(listdata1);
picker1.refreshItems();
var do_Button_1 = ui("do_Button_1");
do_Button_1.on("touch", function(data, e) {
	/**
	 * 点击显示picker和button
	 */
	picker1.visible = "true";
	button1.visible = "true";
})

button1.on("touch", function(data, e) {
	/**
	 * 数据添加和隐藏picker
	 */
	if (picker1.index == 0) {
		tf1.text = "男";
	} else {
		tf1.text = "女";
	}
	picker1.visible = "false";
	button1.visible = "false";
})

/**
 * 给picker添加数据
 */
var tf2 = ui("do_TextField_3");
var picker2 = ui("do_Picker_2");
var listdata2 = mm("do_ListData");
var button2 = ui("do_Button_6");
var data2 = [ "是", "否" ];
listdata2.addData(data2);
picker2.bindItems(listdata2);
picker2.refreshItems();
var do_Button_3 = ui("do_Button_3");
do_Button_3.on("touch", function(data, e) {
	/**
	 * 点击显示picker和button
	 */
	picker2.visible = "true";
	button2.visible = "true";
})

button2.on("touch", function(data, e) {
	/**
	 * 数据添加和隐藏picker
	 */
	if (picker2.index == 0) {
		tf2.text = "是";
	} else {
		tf2.text = "否";
	}
	picker2.visible = "false";
	button2.visible = "false";
})

/**
 * 给picker添加数据
 */
var tf3 = ui("do_TextField_4");
var picker3 = ui("do_Picker_3");
var listdata3 = mm("do_ListData");
var button3 = ui("do_Button_7");
var data3 = [ "东华门街道", "景山街道", "交道口街道", "安定门街道", "北新桥街道", "东四街道", "朝阳门街道",
		"建国门街道", "东直门街道", "和平里街道", "前门街道", "崇文门外街道", "天坛街道", "体育馆路街道", "暂不知道" ];
listdata3.addData(data3);
picker3.bindItems(listdata3);
picker3.refreshItems();

var do_Button_2 = ui("do_Button_2");
do_Button_2.on("touch", function(data, e) {
	/**
	 * 点击显示picker和button
	 */
	picker3.visible = "true";
	button3.visible = "true";
})

button3.on("touch", function(data, e) {
	/**
	 * 数据添加和隐藏picker
	 */
	if (picker3.index == 0) {
		tf3.text = "东华门街道";
	} else if (picker3.index == 1) {
		tf3.text = "景山街道";
	} else if (picker3.index == 2) {
		tf3.text = "交道口街道";
	} else if (picker3.index == 3) {
		tf3.text = "安定门街道";
	} else if (picker3.index == 4) {
		tf3.text = "北新桥街道";
	} else if (picker3.index == 5) {
		tf3.text = "东四街道";
	} else if (picker3.index == 6) {
		tf3.text = "朝阳门街道";
	} else if (picker3.index == 7) {
		tf3.text = "建国门街道";
	} else if (picker3.index == 8) {
		tf3.text = "东直门街道";
	} else if (picker3.index == 9) {
		tf3.text = "和平里街道";
	} else if (picker3.index == 10) {
		tf3.text = "前门街道";
	} else if (picker3.index == 11) {
		tf3.text = "崇文门外街道";
	} else if (picker3.index == 12) {
		tf3.text = "天坛街道";
	} else if (picker3.index == 13) {
		tf3.text = "体育馆路街道";
	} else if (picker3.index == 14) {
		tf3.text = "暂不知道";
	}
	picker3.visible = "false";
	button3.visible = "false";
})
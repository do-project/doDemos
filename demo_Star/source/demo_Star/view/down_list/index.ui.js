//related to index.ui
var page = sm("do_Page");
var app = sm("do_App");

var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function() {
	app.closePage();
});
var do_ALayout_3 = ui("do_ALayout_3");
var do_ALayout_4 = ui("do_ALayout_4");
var do_ALayout_5 = ui("do_ALayout_5");
var do_ALayout_6 = ui("do_ALayout_6");
var do_ALayout_7 = ui("do_ALayout_7");
var do_ALayout_8 = ui("do_ALayout_8");

var do_Button_1 = ui("do_Button_1");
do_Button_1.on("touch", function(data, e) {
	do_ALayout_3.show("expand_t2b", 500);
	do_ALayout_4.visible = "false";
	do_ALayout_5.visible = "false";
	do_ALayout_6.show("expand_t2b", 500);
	do_Button_1.fontColor = "FF8080FF";
	do_Button_2.fontColor = "808080FF";
	do_Button_3.fontColor = "808080FF";
})

var do_Button_2 = ui("do_Button_2");
do_Button_2.on("touch", function(data, e) {
	do_ALayout_3.show("expand_t2b", 500);
	do_ALayout_4.show("expand_t2b", 500);
	do_ALayout_5.visible = "false";
	do_ALayout_6.visible = "false";
	do_Button_1.fontColor = "808080FF";
	do_Button_2.fontColor = "FF8080FF";
	do_Button_3.fontColor = "808080FF";
})

var do_Button_3 = ui("do_Button_3");
do_Button_3.on("touch", function(data, e) {
	do_ALayout_3.show("expand_t2b", 500);
	do_ALayout_4.visible = "false";
	do_ALayout_5.show("expand_t2b", 500);
	do_ALayout_6.visible = "false";
	do_Button_1.fontColor = "808080FF";
	do_Button_2.fontColor = "808080FF";
	do_Button_3.fontColor = "FF8080FF";
})

do_ALayout_8.on("touch", function(data, e) {
	do_ALayout_3.visible = "false";
	do_ALayout_7.visible = "false";
})

var listdata1 = mm("do_ListData");
var do_ListView_1 = ui("do_ListView_1");
var data1 = [ {
	template : 0,
	"$1" : "旧城区"
}, {
	template : 0,
	"$1" : "新城区"
} ]
do_ListView_1.bindItems(listdata1);
listdata1.addData(data1);
do_ListView_1.refreshItems({});

var listdata2 = mm("do_ListData");
var do_ListView_2 = ui("do_ListView_2");
var data2 = [ {
	template : 0,
	"$1" : "默认排序"
}, {
	template : 0,
	"$1" : "评分等级"
}, {
	template : 0,
	"$1" : "最新商家"
}, {
	template : 0,
	"$1" : "离我最近"
} ]
do_ListView_2.bindItems(listdata2);
listdata2.addData(data2);
do_ListView_2.refreshItems({});

var listdata3 = mm("do_ListData");
var do_ListView_3 = ui("do_ListView_3");
var data3 = [ {
	template : 0,
	"$1" : "全部菜系"
}, {
	template : 0,
	"$1" : "快餐"
}, {
	template : 0,
	"$1" : "正餐"
}, {
	template : 0,
	"$1" : "小吃"
} ]
do_ListView_3.bindItems(listdata3);
listdata3.addData(data3);
do_ListView_3.refreshItems({});

do_ListView_1.on("touch", function(index) {
	do_ALayout_3.visible = "false";
})
do_ListView_2.on("touch", function(index) {
	do_ALayout_3.visible = "false";
})
do_ListView_3.on("touch", function(index) {
	do_ALayout_3.visible = "false";
})
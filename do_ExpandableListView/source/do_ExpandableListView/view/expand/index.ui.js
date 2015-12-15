/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");

// //
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
// //

var expandable = ui("do_ExpandableListView_1");
var dataGroup = mm("do_ListData");
var dataChild = mm("do_ListData");

var data1 = [
	{"$g":"华东地区"},
	{"$g":"华南地区"},
	{"$g":"华中地区"},
	{"$g":"华北地区"},
	{"$g":"西南地区"},
	{"$g":"东北地区"},
	{"$g":"台港澳地区"}
];
var data2 = [
 	[{"$1":"山东"},{"$1":"江苏"},{"$1":"安徽"},{"$1":"浙江"},{"$1":"福建"},{"$1":"上海"}],
 	[{"$1":"广东"},{"$1":"广西壮族自治区"},{"$1":"海南"}],
 	[{"$1":"湖北"},{"$1":"湖南"},{"$1":"河南"},{"$1":"江西"}],
 	[{"$1":"北京"},{"$1":"天津"},{"$1":"河北"},{"$1":"山西"},{"$1":"内蒙古自治区"}],
 	[{"$1":"四川"},{"$1":"云南"},{"$1":"贵州"},{"$1":"西藏自治区"},{"$1":"重庆"}],
 	[{"$1":"辽宁"},{"$1":"吉林"},{"$1":"黑龙江"}],
 	[{"$1":"台湾"},{"$1":"香港"},{"$1":"澳门"}]
 ];


dataGroup.addData(data1);
dataChild.addData(data2);
expandable.bindItems(dataGroup,dataChild);

var i = 0;

expandable.on("groupExpand",function(index0){
	deviceone.print(index0,"index0");
	deviceone.print(i,"i");
	if(i != index0){
		expandable.collapseGroup([i]);
//		expandable.expandGroup([index0]);
	}
	i = index0;
})

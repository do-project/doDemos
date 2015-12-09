/*******************************************************************************
 * Author :
 * 
 * @Author Timestamp :
 * @Timestamp
 ******************************************************************************/
var indexListview = ui("indexListView");

var nf = sm("do_Notification");
// 创建一个HashData实例，HashData是一种 hash表 数据结构的数据源
var hd = mm("do_HashData");
// 为HashData数据源添加数据
// hashdata的每一项value中第一个元素为索引组的数据，这个索引组对应的模板不可点击
hd.addData({
	"↑" : [ {
		"template" : 0,
		"titleText" : "↑",
	}, {
		"template" : 1,
		"text" : "新的朋友",
		"image" : "source://weixin/weixin/image/weixin/weixin/t5.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "群聊",
		"image" : "source://weixin/weixin/image/weixin/weixin/t8.jpeg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "标签",
		"image" : "source://weixin/weixin/image/weixin/weixin/t9.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "公众号",
		"image" : "source://weixin/weixin/image/weixin/weixin/t10.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"A" : [ {
		"template" : 0,
		"titleText" : "A"
	}, {
		"template" : 1,
		"text" : "Aibo",
		"image" : "source://weixin/weixin/image/weixin/weixin/t1.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "阿汤哥",
		"image" : "source://weixin/weixin/image/weixin/weixin/t2.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "阿联",
		"image" : "source://weixin/weixin/image/weixin/weixin/t11.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"B" : [ {
		"template" : 0,
		"titleText" : "B"
	}, {
		"template" : 1,
		"text" : "百合",
		"image" : "source://weixin/weixin/image/weixin/weixin/t4.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "博",
		"image" : "source://weixin/image/weixin/t5.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "baby",
		"image" : "source://weixin/image/weixin/t6.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"C" : [ {
		"template" : 0,
		"titleText" : "C"
	}, {
		"template" : 1,
		"text" : "闯",
		"image" : "source://weixin/weixin/image/weixin/weixin/t7.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "传讯",
		"image" : "source://weixin/image/weixin/t2.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "陈奕迅",
		"image" : "source://weixin/image/weixin/t9.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "陈周",
		"image" : "source://weixin/image/weixin/t10.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"D" : [ {
		"template" : 0,
		"titleText" : "D"
	}, {
		"template" : 1,
		"text" : "大冰",
		"image" : "source://weixin/weixin/image/weixin/weixin/t11.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "大鹏",
		"image" : "source://weixin/image/weixin/t1.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "丁宁",
		"image" : "source://weixin/image/weixin/t1.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"E" : [ {
		"template" : 0,
		"titleText" : "E"
	}, {
		"template" : 1,
		"text" : "文件传输助手",
		"image" : "source://weixin/weixin/image/weixin/weixin/t11.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "奋斗",
		"image" : "source://weixin/image/weixin/t4.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "疯子",
		"image" : "source://weixin/image/weixin/t5.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "forever",
		"image" : "source://weixin/image/weixin/t6.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"F" : [ {
		"template" : 0,
		"titleText" : "F"
	}, {
		"template" : 1,
		"text" : "F1",
		"image" : "source://weixin/image/weixin/t1.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "F1",
		"image" : "source://weixin/image/weixin/t5.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"G" : [ {
		"template" : 0,
		"titleText" : "G"
	}, {
		"template" : 1,
		"text" : "G1",
		"image" : "source://weixin/image/weixin/t2.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "G1",
		"image" : "source://weixin/image/weixin/t6.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"H" : [ {
		"template" : 0,
		"titleText" : "H"
	}, {
		"template" : 1,
		"text" : "H1",
		"image" : "source://weixin/image/weixin/t3.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "H1",
		"image" : "source://weixin/image/weixin/t7.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"I" : [ {
		"template" : 0,
		"titleText" : "I"
	}, {
		"template" : 1,
		"text" : "I1",
		"image" : "source://weixin/image/weixin/t4.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "I1",
		"image" : "source://weixin/image/weixin/t8.jpeg",
		"label" : ""
	} ]
});
hd.addData({
	"J" : [ {
		"template" : 0,
		"titleText" : "J"
	}, {
		"template" : 1,
		"text" : "J1",
		"image" : "source://weixin/image/weixin/t5.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "J1",
		"image" : "source://weixin/image/weixin/t9.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"K" : [ {
		"template" : 0,
		"titleText" : "K"
	}, {
		"template" : 1,
		"text" : "K1",
		"image" : "source://weixin/image/weixin/t6.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "K1",
		"image" : "source://weixin/image/weixin/t10.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"L" : [ {
		"template" : 0,
		"titleText" : "L"
	}, {
		"template" : 1,
		"text" : "L1",
		"image" : "source://weixin/image/weixin/t7.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "L1",
		"image" : "source://weixin/image/weixin/t11.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"M" : [ {
		"template" : 0,
		"titleText" : "M"
	}, {
		"template" : 1,
		"text" : "M1",
		"image" : "source://weixin/image/weixin/t8.jpeg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "M1",
		"image" : "source://weixin/image/weixin/t1.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"N" : [ {
		"template" : 0,
		"titleText" : "N"
	}, {
		"template" : 1,
		"text" : "N1",
		"image" : "source://weixin/image/weixin/t9.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "N1",
		"image" : "source://weixin/image/weixin/t2.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"O" : [ {
		"template" : 0,
		"titleText" : "O"
	}, {
		"template" : 1,
		"text" : "O1",
		"image" : "source://weixin/image/weixin/t10.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "O1",
		"image" : "source://weixin/image/weixin/t3.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"P" : [ {
		"template" : 0,
		"titleText" : "P"
	}, {
		"template" : 1,
		"text" : "P1",
		"image" : "source://weixin/image/weixin/t11.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "P1",
		"image" : "source://weixin/image/weixin/t4.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"Q" : [ {
		"template" : 0,
		"titleText" : "Q"
	}, {
		"template" : 1,
		"text" : "Q1",
		"image" : "source://weixin/image/weixin/t1.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "Q1",
		"image" : "source://weixin/image/weixin/t5.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"R" : [ {
		"template" : 0,
		"titleText" : "R"
	}, {
		"template" : 1,
		"text" : "R1",
		"image" : "source://weixin/image/weixin/t2.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "R1",
		"image" : "source://weixin/image/weixin/t6.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"S" : [ {
		"template" : 0,
		"titleText" : "S"
	}, {
		"template" : 1,
		"text" : "S1",
		"image" : "source://weixin/image/weixin/t3.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "S1",
		"image" : "source://weixin/image/weixin/t7.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"T" : [ {
		"template" : 0,
		"titleText" : "T"
	}, {
		"template" : 1,
		"text" : "T1",
		"image" : "source://weixin/image/weixin/t4.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "T1",
		"image" : "source://weixin/image/weixin/t8.jpeg",
		"label" : ""
	} ]
});
hd.addData({
	"U" : [ {
		"template" : 0,
		"titleText" : "U"
	}, {
		"template" : 1,
		"text" : "U1",
		"image" : "source://weixin/image/weixin/t5.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "U1",
		"image" : "source://weixin/image/weixin/t9.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"V" : [ {
		"template" : 0,
		"titleText" : "V"
	}, {
		"template" : 1,
		"text" : "V1",
		"image" : "source://weixin/image/weixin/t6.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "V1",
		"image" : "source://weixin/image/weixin/t10.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"W" : [ {
		"template" : 0,
		"titleText" : "W"
	}, {
		"template" : 1,
		"text" : "W1",
		"image" : "source://weixin/image/weixin/t7.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "W1",
		"image" : "source://weixin/image/weixin/t11.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"X" : [ {
		"template" : 0,
		"titleText" : "X"
	}, {
		"template" : 1,
		"text" : "X1",
		"image" : "source://weixin/image/weixin/t8.jpeg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "X1",
		"image" : "source://weixin/image/weixin/t1.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"Y" : [ {
		"template" : 0,
		"titleText" : "Y"
	}, {
		"template" : 1,
		"text" : "Y1",
		"image" : "source://weixin/image/weixin/t9.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "Y1",
		"image" : "source://weixin/image/weixin/t2.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"Z" : [ {
		"template" : 0,
		"titleText" : "Z"
	}, {
		"template" : 1,
		"text" : "Z1",
		"image" : "source://weixin/image/weixin/t10.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "Z1",
		"image" : "source://weixin/image/weixin/t3.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "Z3",
		"image" : "source://weixin/image/weixin/t7.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "Z4",
		"image" : "source://weixin/image/weixin/t9.jpg",
		"label" : ""
	} ]
});
hd.addData({
	"#" : [ {
		"template" : 0,
		"titleText" : "#"
	}, {
		"template" : 1,
		"text" : "#1",
		"image" : "source://weixin/image/weixin/t11.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "#1",
		"image" : "source://weixin/image/weixin/t4.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "#3",
		"image" : "source://weixin/image/weixin/t6.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "#4",
		"image" : "source://weixin/image/weixin/t10.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "#5",
		"image" : "source://weixin/image/weixin/t3.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "#6",
		"image" : "source://weixin/image/weixin/t4.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "#7",
		"image" : "source://weixin/image/weixin/t5.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "#8",
		"image" : "source://weixin/image/weixin/t6.jpg",
		"label" : ""
	}, {
		"template" : 1,
		"text" : "#9",
		"image" : "source://weixin/image/weixin/t7.jpg",
		"label" : ""
	} ]
});

/**
 * 为IndeListView绑定数据源，只支持HashData实例，其中每组第一条数据表示分组信息，不可点击 data:数据源实例
 * indexs：一个数组列表，按照此列表显示列表数据，可以为空，为空就按照HashData‘随机’显示列表数据
 */
indexListview.bindItems(hd, [ "↑", "A", "B", "C", "D", "E", "F", "G", "H", "I",
		"J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
		"X", "Y", "Z", "#" ]);

/**
 * 刷新列表数据 动态修改HashData数据源后，需要调用此方法才能正确显示数据
 */
indexListview.refreshItems();

// 订阅(注册)touch事件，点击某行列表数据触发
indexListview.on("touch", function(data, e) {
	nf.toast("groupID : " + data.groupID + "; index : " + data.index);
	var cell = hd.getOne(data.groupID);
	var childData = cell[data.index];
	nf.toast("touch data : " + JSON.stringify(childData));
});

// 订阅(注册)longTouch事件，长按某行列表数据触发
indexListview.on("longTouch", function(data, e) {
	nf.toast("longTouch data : " + JSON.stringify(data));
});

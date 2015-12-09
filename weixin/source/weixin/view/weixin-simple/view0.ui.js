var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function() { // 监听android 的返回按钮;
	app.closePage()
});

/** ***************************************************************************************** */

var listview, listdata;

listview = ui("do_ListView_1");
listdata = mm("do_ListData");

listview.bindItems(listdata);

listdata.addData([ {
	NAME : "Sun",
	LOGO : "source://weixin/image/weixin/t1.jpg",
	CONTENT : "最近还好吗？",
	TIME : "早上08:03",
	NBG : "source://image/iconfont-yuanquan.png",
	NNT : "1"
}, {
	NAME : "小妮子",
	LOGO : "source://weixin/image/weixin/t2.jpg",
	CONTENT : "[图片]",
	TIME : "早上07:39",
	NBG : "",
	NNT : ""
}, {
	NAME : "大小姐",
	LOGO : "source://weixin/image/weixin/t3.jpg",
	CONTENT : "嗯呐",
	TIME : "昨天",
	NBG : "source://image/iconfont-yuanquan.png",
	NNT : "10"
}, {
	NAME : "疯子",
	LOGO : "source://weixin/image/weixin/t4.jpg",
	CONTENT : "嗯",
	TIME : "昨天",
	NBG : "",
	NNT : ""
}, {
	NAME : "雨夜",
	LOGO : "source://weixin/image/weixin/t5.jpg",
	CONTENT : "OK",
	TIME : "昨天",
	NBG : "",
	NNT : ""
}, {
	NAME : "可可",
	LOGO : "source://weixin/image/weixin/t6.jpg",
	CONTENT : "[链接] 真好，一定要听啊！",
	TIME : "8月11日",
	NBG : "source://image/iconfont-yuanquan.png",
	NNT : ""
}, {
	NAME : "甜甜",
	LOGO : "source://weixin/image/weixin/t7.jpg",
	CONTENT : "(⊙o⊙)哦",
	TIME : "8月10日",
	NBG : "",
	NNT : ""
}, {
	NAME : "星辰",
	LOGO : "source://weixin/image/weixin/t8.jpeg",
	CONTENT : "[语音]",
	TIME : "8月5日",
	NBG : "",
	NNT : ""
}, {
	NAME : "闪电",
	LOGO : "source://weixin/image/weixin/t9.jpg",
	CONTENT : "[2015年8月10日 活动预告] 去...",
	TIME : "8月5日",
	NBG : "",
	NNT : ""
}, {
	NAME : "文件传输助手",
	LOGO : "source://weixin/image/weixin/t10.jpg",
	CONTENT : "[图片]",
	TIME : "8月4日",
	NBG : "",
	NNT : ""
}, {
	NAME : "订阅号",
	LOGO : "source://weixin/image/weixin/t11.jpg",
	CONTENT : "糗事百出：天机已经泄露，错过后悔",
	TIME : "8月1日",
	NBG : "",
	NNT : ""
} ]);
listview.refreshItems();
listview.on("longTouch", function(index) {
	nf.alert(listdata.getOne(index), "longTouch");
});

listview.on("touch", function(index) {
	nf.alert(listdata.getOne(index), "touch");
});

listview.on("pull", function(data) {
	/**
	 * @此事件将会多次执行.
	 * @state == 0 : pull动作开始
	 * @state == 1 : pull动作持续中
	 * @state == 2 : pull动作结束
	 */
	if (data.state !== 2)
		return;
	this.rebound();
});
/** ***************************************************************************************** */

/**
 * @listdata.addOne(data, index); 向listdata增加一条数据
 * @刷新页面(refreshItems);此处不能调用refreshData;详见API refreshData / refreshItems 的区别.
 * @refreshData 是一个UI的基类方法; 能够刷新控件本身;即刷新listview控件本身属性.
 * @refreshItems 是listview 的实例方法; 用于刷新 listview 的数据项.
 */
// listdata.addOne({ NAME : "ADD", LOGO : "source://image/add.png" }, 0);
// listview.refreshItems();
/**
 * @listdata.removeRange(fromIndex, toIndex); listdata没有提供 removeOne(index) 方法;
 *                                  removeRange(index,index) 可删除指定项.
 */
// listdata.removeRange(0, 0);
// listview.refreshItems();

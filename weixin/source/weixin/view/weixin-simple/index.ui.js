/*******************************************************************************
 * Author :
 * 
 * @Author Timestamp :
 * @Timestamp
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");

//返回按钮
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})

var page = sm("do_Page"); // 获取当前Page实例

var iv0, label0, iv1, label1, iv2, label2, iv3, label3;
iv0 = ui("iv0");
label0 = ui("label0");
iv1 = ui("iv1");
label1 = ui("label1");
iv2 = ui("iv2");
label2 = ui("label2");
iv3 = ui("iv3");
label3 = ui("label3");

var ivs = [ iv0, iv1, iv2, iv3 ];
var labels = [ label0, label1, label2, label3 ];

var checkFun = function(index) {
	for (var i = 0; i < ivs.length; i++) {
		if (index == i) { // 表示选中了第几个
			ivs[i].source = "source://weixin/image/weixin/s" + i + ".png";
			labels[i].fontColor = "6CD564FF";
		} else {
			ivs[i].source = "source://weixin/image/weixin/d" + i + ".png";
			labels[i].fontColor = "9F9F9FFF";
		}
	}

	// 点击底下的imageview 显示对应的view
	viewShower.showView("view" + index, "fade", 300)
}

// 为每个ImageView 注册事件
ivs.forEach(function(iv, i) {
	iv.on("touch", function(data, e) {
		checkFun(i);
	});
})

var viewShower = ui("viewShower");

var data = [ {
	"id" : "view0",
	"path" : "source://weixin/view/weixin-simple/view0.ui"
}, {
	"id" : "view1",
	"path" : "source://weixin/view/weixin-simple/view1.ui"
}, {
	"id" : "view2",
	"path" : "source://weixin/view/weixin-simple/view2.ui"
}, {
	"id" : "view3",
	"path" : "source://weixin/view/weixin-simple/view3.ui"
} ];

// 为viewshower增加4个页面
viewShower.addViews(data);

// 以下是ViewShower调用show方法时支持的动画类型，包括标示和描述，其中有几个类型android不支持
var animations = [ "", "slide_l2r", "slide_r2l", "slide_b2t", "slide_t2b",
		"push_l2r", "push_r2l", "push_b2t", "push_t2b", "fade", "page_curl",
		"page_uncurl", "cube" ];
var animationDescs = [ "无动画", "从左至右滑出", "从右至左滑出", "从底至上滑出", "从上至底滑出", "从左至右推出",
		"从右至左推出", "从底至上推出", "从上至底推出", "淡入", "上翻页", "下翻页", "立体" ];
// 要显示的View的id ,动画类型(有以上几种动画类型),动画执行时间
viewShower.showView("view0");

// viewShower订阅一个viewChanged事件，当viewShower切换View 时触发
viewShower.on("viewChanged", function(data, e) {
	// 触发一个自定义事件 indexChanged, 在view0中订阅该事件
	// page.fire("indexChanged");
	// 触发一个带参数的自定义事件，data的值为：View切换后的id
	page.fire("indexChanged", data);
});

var search = ui("search")
var app = sm("do_App")

search.on("touch", function() {
	app.openPage("source://weixin/view/weixin-simple/search/index.ui");
});

var bg_layout = ui("bg_layout");
var fast = ui("fast");
fast.on("touch", function() {
	bg_layout.add("we", "source://weixin/view/weixin-simple/fast.ui", 0, 0);
});

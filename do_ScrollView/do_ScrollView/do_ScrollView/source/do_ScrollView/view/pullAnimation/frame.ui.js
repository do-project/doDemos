//related to frame.ui
var app = sm("do_App");
var global = sm("do_Global");
var do_ListData = mm("do_ListData");
var do_FragmentView_1=ui("do_FragmentView_1");
var data1 = [{ 
	/**
	 * 给绑定的视图模板设置数据
	 */
	    leftTemplate:0,template:1,
	    "image":"data://do_ScrollView/头像.jpg",
	    "name":"智慧之旅"
	    
	    
		}
];

do_ListData.addData(data1);
do_FragmentView_1.bindItems(do_ListData);
do_FragmentView_1.refreshItems({});
/**
 * 绑定视图模板数据
 */

global.on("openleft",function(data, e) {
	/**
	 * 显示左侧视图
	 */
	do_FragmentView_1.showLeft();
})

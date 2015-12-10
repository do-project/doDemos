//related to pullAnimation.ui
var image=ui("do_ImageView_3");
var scroll=ui("do_ScrollView_1");
var nf=sm("do_Notification");
var list=ui("do_ListView_1");
var listdata=mm("do_ListData");
var page=sm("do_Page");
var app=sm("do_App");
var close = ui("close");
var animator = mm("do_Animator");
var animatorB = mm("do_Animator");
var alayoutbg=ui("do_ALayout_3");

page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	page.on("back", function(data) {
		app.closePage();
	})
	
	listdata.addData([
	                {"source":"data://do_ScrollView/2.png","name":"习近平访津巴布韦 4万民众欢迎(图) 专题"},
					{"source":"data://do_ScrollView/3.png","name":"北京空气污染橙色预警解除 城区雾霾消散"},
					{"source":"data://do_ScrollView/1.jpg","name":"媒体:省部级案件陆续收官 大案数或停涨"},
					{"source":"data://do_ScrollView/4.png","name":"温州平均每3年换1个市委书记 均荣升部级"},
					{"source":"data://do_ScrollView/5.png","name":"日本现多艘载腐尸幽灵船 媒体:或系'脱北者'"},
					{"source":"data://do_ScrollView/6.png","name":"韩媒:朝鲜二把手黄炳誓已'消失'20天 去向成谜"},
					{"source":"data://do_ScrollView/7.png","name":"李小璐为李晨打胎图片曝光 揭两人在一起多久分手原"}
					]);
		list.bindItems(listdata);
		list.refreshItems({});
		//顶部背景显示动画
		animator.append(5000, props, "EaseOut");
		var props = {bgColor:"0080FFFF"}
		animatorB.append(5000, propsB, "EaseOut");
		var propsB = {bgColor:"#ffFFFF00"}
		scroll.on("scroll", function(datas) {
			//根据返回的值，改变图片的高
			deviceone.print(JSON.stringify(datas));
			image.height = 500 -+ datas;
			if(datas>=170){
				alayoutbg.animate(animator);
			}else{
				alayoutbg.animate(animatorB);
			}
			image.redraw();
			
		});
})


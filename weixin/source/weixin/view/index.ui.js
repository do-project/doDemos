/*******************************************************************************
 * Author : and
 ******************************************************************************/
var viewshower = ui("viewshower");
var page = sm("do_Page");

// 为viewshower增加4个子页面
viewshower.addViews([ {
	id : "chats",// 页面的标示
	path : "source://weixin/view/chats/index.ui"// 页面的路径
}, {
	id : "contacts",
	path : "source://weixin/view/contacts/index.ui"
}, {
	id : "discover",
	path : "source://weixin/view/discover/index.ui"
}, {
	id : "me",
	path : "source://weixin/view/me/index.ui"
} ]);
// 初始化先显示第一个页面
viewshower.showView("chats");

var button1 = ui("do_Button_1");
var imageview1 = ui("do_ImageView_1");
var label1 = ui("do_Label_1");
button1.on("touch", function() {
	showView("chats");
});

var button2 = ui("do_Button_2");
var imageview2 = ui("do_ImageView_2");
var label2 = ui("do_Label_2");
button2.on("touch", function() {
	showView("contacts");
});

var button3 = ui("do_Button_3");
var imageview3 = ui("do_ImageView_3");
var label3 = ui("do_Label_3");
button3.on("touch", function() {
	showView("discover");
});

var button4 = ui("do_Button_4");
var imageview4 = ui("do_ImageView_4");
var label4 = ui("do_Label_4");
button4.on("touch", function() {
	showView("me");
});

function showView(name) {
	viewshower.showView(name);
	if (name == "chats") {
		imageview1.source = "source://weixin/image/tabbar_mainframeHL.png";
		label1.fontColor = "09BB07FF";
	} else {
		imageview1.source = "source://weixin/image/tabbar_mainframe.png";
		label1.fontColor = "9F9F9FFF";
	}

	if (name == "contacts") {
		imageview2.source = "source://weixin/image/tabbar_contactsHL.png";
		label2.fontColor = "09BB07FF";
	} else {
		imageview2.source = "source://weixin/image/tabbar_contacts.png";
		label2.fontColor = "9F9F9FFF";
	}

	if (name == "discover") {
		imageview3.source = "source://weixin/image/tabbar_discoverHL.png";
		label3.fontColor = "09BB07FF";
	} else {
		imageview3.source = "source://weixin/image/tabbar_discover.png";
		label3.fontColor = "9F9F9FFF";
	}

	if (name == "me") {
		imageview4.source = "source://weixin/image/tabbar_meHL.png";
		label4.fontColor = "09BB07FF";
	} else {
		imageview4.source = "source://weixin/image/tabbar_me.png";
		label4.fontColor = "9F9F9FFF";
	}
}
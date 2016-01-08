/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

/**********************************************************************************************************/

var imageBrowser = sm("do_ImageBrowser");
var bn_show = ui("bn_show");

bn_show.on("touch", function(){
	imageBrowser.show([
		{ source : "http://www.deviceone.net/img/01_05.png", init : ""},
		{ source : "http://www.deviceone.net/img/02_05.png", init : ""},
		{ source : "http://www.deviceone.net/img/03_05.png", init : ""},
		{ source : "http://www.deviceone.net/img/06_05.png", init : ""},
		{ source : "http://www.deviceone.net/img/05_05.png", init : ""},
		{ source : "http://www.deviceone.net/img/04_05.png", init : ""}
	], 0);

});

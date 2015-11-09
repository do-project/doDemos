/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
////
var page = sm("do_Page");
var close = ui("close");
close.on("touch",function(){
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
////
var button1 = ui("do_Button_1");
var button2 = ui("do_Button_2");
var button3 = ui("do_Button_3");
button1.on("touch", function() {
	app.closePage();
});
button2.on("touch", function() {
	app.closePage("","",2);//关闭2层直接到paeg1
});
button3.on("touch", function() {
	app.closePageToID("","","page1_id");//一直关闭，直到露出id为page1_id的page为止
});
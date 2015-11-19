/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
////
var page = sm("do_Page");
var close = ui("$");
close.on("touch",function(){
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
////
var album = sm("do_Album");
var change = ui("do_ALayout_4");
var image = ui("do_ImageView_4");
change.on("touch",function(){
	album.select(1, 500,-1, function(data, e) {
		image.source = data[0];
	})
})
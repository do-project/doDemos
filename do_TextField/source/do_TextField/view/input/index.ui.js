/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
// //
var page = sm("do_Page");
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
// //

for (var i = 0; i < 4; i++) {
	var textfield = ui("do_TextField_"+(i+1));
	
	textfield.tag = i+4;
	textfield.on("focusIn",function(){
		var layout = ui("do_ALayout_"+this.tag);
		layout.bgColor = "00AA00FF";
	})
	textfield.on("focusOut",function(){
		var layout = ui("do_ALayout_"+this.tag);
		layout.bgColor = "C0C0C0FF";
	})
}

var main = ui("$");
main.on("touch",function(){
	page.hideKeyboard();
})
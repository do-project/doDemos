/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
// //
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
// //
var webview = ui("webview");
var storage = sm("do_Storage");
var tag = "<pre class=\"line-numbers\"><code class=\"language-js\">";
var tagend = "</code></pre>";

var code1,code2,code3,code4;
storage.readFile("data://do_Button/code/index.ui.js", function(data, e) {
	code1 = data;
	storage.readFile("data://do_Button/code/cell.ui.js", function(data, e) {
		code2 = data;
		storage.readFile("data://do_Button/code/bgImage/index.ui.js", function(data, e) {
			code3 = data;
			storage.readFile("data://do_Button/code/event/index.ui.js", function(data, e) {
				code4 = data;
				storage.readFile("data://do_Button/code/template.html", function(data, e) {
					var temp = "source://do_Button/view/index.ui.js\n"+tag+code1+tagend+"\n";
					temp = temp +  "source://do_Button/view/cell.ui.js\n"+tag+code2+tagend+"\n";
					temp = temp +  "source://do_Button/view/bgImage/index.ui.js\n"+tag+code3+tagend+"\n";
					temp = temp +  "source://do_Button/view/event/index.ui.js\n"+tag+code4+tagend+"\n";
					data = data.replace(/code....../,temp );
					deviceone.print(data);
					storage.writeFile("data://do_Button/code/temp.html",data,function(){
						webview.url = "data://do_Button/code/temp.html";
					});
				});
			});
		});
	});
});


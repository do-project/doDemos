var page = sm("do_Page");
var app = sm("do_App");

var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function() {
	app.closePage();
});

var do_Label_2=ui("do_Label_2");
var target=ui("target");
target.startGif({data:"data://loading.gif", repeat:-1});

var http = mm("do_Http");
http.url = "http://developertest.deviceone.cn/test/upload";
http.method = "POST";
http.contentType = "multipart/form-data";
http.upload({path:"data://file.doc", name:"file"});

http.on("success",function(data,e){
	target.visible="false";
	do_Label_2.visible=("true");
})



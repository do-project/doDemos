//related to upload.ui
var page=sm("do_Page");
var app=sm("do_App");
var encrypt=ui("do_Button_1");
var nf=sm("do_Notification");
var close=ui("close");
var Algorithm=sm("do_Algorithm");
var upload=ui("do_Button_2");
var http=mm("do_Http");
page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	//通过base64加密文件
	encrypt.on("touch", function(data, e) {
		Algorithm.base64("encode", "file", "data://upload/file.doc", function(data, e) {
			nf.toast("base64的方式加密文件");
		})
	})
	//通过http的方式上传文件
	upload.on("touch", function(data, e) {
		http.url = "http://developertest.deviceone.cn/test/upload";
		http.method = "POST";
		http.contentType = "multipart/form-data";
		http.upload({path:"data://upload/file.doc", name:"file"});
	})
	http.on("success",function(data,e){
	deviceone.print(JSON.stringify(data),"success event");
	nf.toast("上传成功");
	})
	http.on("progress",function(data,e){
	deviceone.print(JSON.stringify(data),"progress event");
	nf.toast(data);
	})
	http.on("fail",function(data,e){
		deviceone.print(JSON.stringify(data),"fail event");
		nf.toast("上传成功");
	})
	
})

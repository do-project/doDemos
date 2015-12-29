//related to upload.ui
var page=sm("do_Page");
var doc=ui("do_Button_1");
var txt=ui("do_Button_2");
var excel=ui("do_Button_3");
var zip=ui("do_Button_4");
var http=mm("do_Http");
var nf=sm("do_Notification");
var close=ui("close");
var app=sm("do_App");
page.on("loaded", function(data, e) {
	
	close.on("touch", function() {
		app.closePage();
	})
	doc.on("touch", function(data, e) {
		http.url = "http://developertest.deviceone.cn/test/upload";
		http.method = "POST";
		http.contentType = "multipart/form-data";
		http.upload({path:"data://upload/file.doc", name:"file"});
	});
	txt.on("touch", function(data, e) {
		http.url = "http://developertest.deviceone.cn/test/upload";
		http.method = "POST";
		http.contentType = "multipart/form-data";
		http.upload({path:"data://upload/test.txt", name:"file"});
	});
	excel.on("touch", function(data, e) {
		http.url = "http://developertest.deviceone.cn/test/upload";
		http.method = "POST";
		http.contentType = "multipart/form-data";
		http.upload({path:"data://upload/ceshi.xls", name:"file"});
	});
	zip.on("touch", function(data, e) {
		http.url = "http://developertest.deviceone.cn/test/upload";
		http.method = "POST";
		http.contentType = "multipart/form-data";
		http.upload({path:"data://upload/TestDemo.zip", name:"file"});
	});
	
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
			nf.toast("上传失败");
	})

})


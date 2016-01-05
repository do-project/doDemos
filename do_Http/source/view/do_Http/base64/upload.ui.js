//related to upload.ui
var page=sm("do_Page");
var app=sm("do_App");
var list=ui("do_ListView_1");
var nf=sm("do_Notification");
var close=ui("close");
var http=mm("do_Http");
var storage=sm("do_Storage");
var listdata=mm("do_ListData");
var Algorithm=sm("do_Algorithm");
page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	var data=[
          {"index":"1","name":"base64编码文件"},
          {"index":"2","name":"base64编码字符"}
          
          ];
listdata.addData(data);
list.bindItems(listdata);
list.on("touch", function(index) {
	switch(index){
	
	case 0:
		//通过base64编码文件
		Algorithm.base64("encode", "file", "data://upload/file.doc", function(data, e) {
			nf.toast("base64的方式编码文件");
			});
		//通过http的upload方式上传文件
		http.url = "http://developertest.deviceone.cn/test/upload";
		http.method = "POST";
		http.contentType = "multipart/form-data";
		http.upload({path:"data://upload/file.doc", name:"file"});
		break;
	case 1:
		
		//通过storage向文件写入字符，然后编码，上传文件
		storage.writeFile("data://file.txt", "test测试", function(data, e) {
			
			Algorithm.base64Sync("encode", "data://file.txt");
			
		})
		http.url = "http://developertest.deviceone.cn/test/upload";
			http.method = "POST";
			http.contentType = "multipart/form-data";
			http.upload({path:"data://file.txt", name:"file"});
		break;
		
	}
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

//related to upload.ui
var page=sm("do_Page");
var http=mm("do_Http");
var nf=sm("do_Notification");
var close=ui("close");
var app=sm("do_App");
var list=ui("do_ListView_1");
var listdata=mm("do_ListData");

page.on("loaded", function(data, e) {
	
	close.on("touch", function() {
		app.closePage();
	})
	var data=[
          {"index":"1","name":"word文件"},
          {"index":"2","name":"文本文件"},
          {"index":"3","name":"excel文件"},
          {"index":"4","name":"zip文件"},
          {"index":"5","name":"image"}
          ];
listdata.addData(data);
list.bindItems(listdata);
list.on("touch", function(index) {
	switch(index){
	case 0:
		http.url = "http://developertest.deviceone.cn/test/upload";
		http.method = "POST";
		http.contentType = "multipart/form-data";
		http.upload({path:"data://upload/file.doc", name:"file"});
	break;
	case 1:
		http.url = "http://developertest.deviceone.cn/test/upload";
		http.method = "POST";
		http.contentType = "multipart/form-data";
		http.upload({path:"data://upload/test.txt", name:"file"});
		break;
	case 2:
		http.url = "http://developertest.deviceone.cn/test/upload";
		http.method = "POST";
		http.contentType = "multipart/form-data";
		http.upload({path:"data://upload/ceshi.xls", name:"file"});
		break;
	case 3:
		http.url = "http://developertest.deviceone.cn/test/upload";
		http.method = "POST";
		http.contentType = "multipart/form-data";
		http.upload({path:"data://upload/test.zip", name:"file"});
		break;
	case 4:
		http.url = "http://developertest.deviceone.cn/test/upload";
		http.method = "POST";
		http.contentType = "multipart/form-data";
		http.upload({path:"data://upload/test.jpg", name:"file"});
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
			nf.toast("上传失败");
	})

})


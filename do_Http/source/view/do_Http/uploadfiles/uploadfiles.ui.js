//related to uploadfiles.ui
var list=ui("do_ListView_1");
var listdata=mm("do_ListData");
var http=mm("do_Http");
var page=sm("do_Page");
var nf=sm("do_Notification");
var close=ui("close");
var app=sm("do_App");
page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	})
	var data=[
	          {"index":"1","name":"上传字符串"},
	          {"index":"2","name":"上传文件"},
	          {"index":"3","name":"上传字符串和文件"}
	          ];
	listdata.addData(data);
	list.bindItems(listdata);
	list.on("touch", function(index) {
		switch(index){
		case 0:
			http.url = "http://mock.deviceone.net/testform/api/values/testform";
			http.method = "POST";
			http.form({'texts':[{'key':'text1','value':'12345测试'},{'key':'text2','value':'abcde测试'}]});
			break;
		case 1:
			
			http.url = "http://mock.deviceone.net/testform/api/values/testform";
			http.method = "POST";
			http.form({'files':[{'key':'file1','value':'data://upload/file.doc'},{'key':'file2','value':'data://upload/test123.zip'}]});
			break;
		case 2:
			
			http.url = "http://mock.deviceone.net/testform/api/values/testform";
			http.method = "POST";
			http.form({'files':[{'key':'file1','value':'data://upload/test.jpg'},{'key':'file2','value':'data://upload/ceshi.xls'}],'texts':[{'key':'text1','value':'@#$%^&*!<>?L:"'},{'key':'text2','value':'123456789abcde测试'}]});
			break;
		}
		
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


});

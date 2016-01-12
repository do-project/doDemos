//related to myself.ui
var global = sm("do_Global");
var nf=sm("do_Notification");
var scorll=ui("do_ScrollView_1");
var image=ui("do_ImageView_6");
var listview=ui("do_ListView_1");
var listdata=mm("do_ListData");
var Storage=sm("do_Storage");
var setting=ui("do_ImageView_7");

setting.on("touch", function(data, e) {
	global.fire("openleft");
})
var page=sm("do_Page");
var list="data://do_ScrollView/list.json";
page.on("loaded", function(data, e) {
		
		page.on("back", function(data) {
			app.closePage();
		})
		if(Storage.fileExist(list)){
		Storage.readFile(list, function(data, e) {
			
			listdata.addData(data);
			listview.bindItems(listdata);
			listview.refreshItems({});
		});
		}
		scorll.on("scroll", function(datas) {

		    
			
			//根据返回的值，改变图片的高
			deviceone.print(JSON.stringify(datas));
			image.height = 380 -+ datas;
			if(image.height <= 0){
				image.height = 0;
			
			}
			image.redraw();
			
		});
		
})


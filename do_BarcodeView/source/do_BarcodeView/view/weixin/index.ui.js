var app = sm("do_App");
var page = sm("do_Page");
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})

var iv0 = ui("iv0");
var iv1 = ui("iv1");
var iv2 = ui("iv2");
var iv3 = ui("iv3");
var label0 = ui("label0");
var label1 = ui("label1");
var label2 = ui("label2");
var label3 = ui("label3");

var title = ui("title");
var title0 = "二维码/条码";
var title1 = "封面/电影海报";
var title2 = "街景";
var title3 = "翻译";
var titles = [title0,title1,title2,title3]

var ivs = [iv0,iv1,iv2,iv3];
var labels = [label0,label1,label2,label3];

var barcode = ui("do_BarcodeView_1");
var area0 = "125,200,500,500";
var area1 = "25,200,700,700";
var area2 = "25,200,700,700";
var area3 = "125,285,500,100";
var areas = [area0,area1,area2,area3];

var tip = ui("do_Label_4");
var text0 = "将二维码/条码放入框中，即可扫描";
var text1 = "将书、CD、电影海报放入框中，即可扫描";
var text2 = "扫一下周围环境，寻找附近街景";
var text3 = "将英文单词放入框中";
var texts = [text0,text1,text2,text3];
var ys = [736,940,940,458];

page.on("loaded",function(){
	barcode.start(function(data, e) {
		var result = JSON.stringify(data);
		deviceone.print(result,"扫描结果");
		app.openPage("source://do_BarcodeView/view/weixin/result/index0.ui", data, function(data, e) {
			
		})
	})
	var check = function(index){
		for(var i =0;i<ivs.length;i++){		
			if(index == i){
				ivs[i].source = "source://do_BarcodeView/image/barcodeview/s"+i+".png";
				labels[i].fontColor = "00EA3AFF";
				title.text = titles[i];
				tip.text = texts[i];
				tip.y = ys[i];
				tip.redraw();
				barcode.scanArea = areas[i];
				barcode.start(function(data, e) {
					var result = JSON.stringify(data);
					deviceone.print(result,"扫描结果");
					app.openPage("source://do_BarcodeView/view/weixin/result/index0.ui", data, function(data, e) {
						
					})
				})
			}
			else {
				ivs[i].source = "source://do_BarcodeView/image/barcodeview/d"+i+".png";
				labels[i].fontColor = "C0C0C0FF";
			}
		}
	}
	ivs.forEach(function(lay, i) {
		lay.on("touch",function(){
			check(i);
		})
	})
})





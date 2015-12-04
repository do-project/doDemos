var page = sm("do_Page");

var viewShower = ui("do_ViewShower_1");


var iv0 = ui("iv0");
var iv1 = ui("iv1");
var iv2 = ui("iv2");
var iv3 = ui("iv3");
var label0 = ui("label0");
var label1 = ui("label1");
var label2 = ui("label2");
var label3 = ui("label3");

var ivs = [iv0,iv1,iv2,iv3];
var labels = [label0,label1,label2,label3];

var data_viewshower = [ {
	"id" : "view0",
	"path" : "source://do_BarcodeView/view/weixin/index/view0.ui"
}, {
	"id" : "view1",
	"path" : "source://do_BarcodeView/view/weixin/index/view1.ui"
}, {
	"id" : "view2",
	"path" : "source://do_BarcodeView/view/weixin/index/view2.ui"
}, {
	"id" : "view3",
	"path" : "source://do_BarcodeView/view/weixin/index/view3.ui"
} ];

viewShower.addViews(data_viewshower);
viewShower.showView("view0", "fade", 100);

page.on("loaded",function(){

	var check = function(index){
		for(var i =0;i<ivs.length;i++){		
			if(index == i){
				ivs[i].source = "source://do_BarcodeView/image/barcodeview/s"+i+".png";
				labels[i].fontColor = "00EA3AFF";
			}
			else {
				ivs[i].source = "source://do_BarcodeView/image/barcodeview/d"+i+".png";
				labels[i].fontColor = "C0C0C0FF";
			}
		}
		viewShower.showView("view" + index, "fade", 100)
	}
	ivs.forEach(function(lay, i) {
		lay.on("touch",function(){
			check(i);
		})
	})
	
	viewShower.on("viewChanged",function(){
		page.fire("start");
	})
	page.on("resume",function(){
		page.fire("start");
	})
})





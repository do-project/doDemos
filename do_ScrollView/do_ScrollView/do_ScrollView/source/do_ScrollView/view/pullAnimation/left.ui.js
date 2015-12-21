//related to left.ui
var $=ui("$");
$.setMapping({
	"do_ImageView_1.souce":"image",
	"do_Label_1.text":"name"
	
})
var listview=ui("do_ListView_1");
var listdata=mm("do_ListData");
var data=[{
			"ImageView":"data://do_ScrollView/技术问答.png",
			"Label":"技术问答"
	    },
	    {
	    	"ImageView":"data://do_ScrollView/开源软件.png",
	    	"Label":"开源软件"
	    },
	    {
	    	"ImageView":"data://do_ScrollView/博客区.png",
	    	"Label":"博客区"
	    },
	    {
	    	"ImageView":"data://do_ScrollView/设置.png",
	    	"Label":"设置"
	    },
	    {
	    	"ImageView":"data://do_ScrollView/夜间模式.png",
	    	"Label":"夜间模式"
	    
	    }];
listdata.addData(data);
listview.bindItems(listdata);
listview.refreshItems({});

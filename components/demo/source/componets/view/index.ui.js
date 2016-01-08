/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

/**********************************************************************************************************/

var listview, listdata;
listview = ui("do_listview");
listdata = mm("do_ListData");
listview.bindItems(listdata);

listdata.addData([
    {NAME : "UI", MSG : "View控件", TYPE : "UI",IMG : "source://componets/image/UI.png"},
    {NAME : "SM", MSG : "单实例组件", TYPE : "UI",IMG : "source://componets/image/SM.png"},
    {NAME : "MM", MSG : "多实例组件", TYPE : "UI",IMG : "source://componets/image/MM.png"}
]);
listview.refreshItems();;

listview.on("touch", function(index){
    var data = listdata.getOne(index);
    app.openPage("source://componets/view/indexC.ui", data);
});

var code = ui("do_ALayout_3");
code.on("touch",function(){
	app.openPage("source://componets/view/codeviewer/index.ui");
})
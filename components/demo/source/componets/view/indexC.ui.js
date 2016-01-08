/***********************************************************************************************************
 * @Author : nanyuantingfeng
 **********************************************************************************************************/
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

var storage = sm("do_Storage");
var pagedata = page.getData();
/**********************************************************************************************************/

var listview, listdata;
listview = ui("do_listview");
listdata = mm("do_ListData");
listview.bindItems(listdata);

storage.readFile("data://idata.json", function(data){
    listdata.addData(data[pagedata.NAME]);
    listview.refreshItems();
});

listview.on("touch", function(index){
    var data = listdata.getOne(index);
    var type = data.TYPE.toLocaleLowerCase();
    var name = data.NAME.toLocaleLowerCase();

    if(data.VERSION !== "-") app.openPage("source://componets/view/" + type + "/" + name + ".ui");
    else nf.toast("暂无");
});
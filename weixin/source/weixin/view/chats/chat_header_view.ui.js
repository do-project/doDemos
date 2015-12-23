//related to chat_header_view.ui
var page = sm("do_Page");
var sight = ui("sight_view");
page.on("pull", function(data) {
	deviceone.print(JSON.stringify(data));
	sight.y = 400 - data;
	sight.redraw();
});
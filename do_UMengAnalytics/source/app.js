/**********************************************
 * Author : @Author
 * Timestamp : @Timestamp
 **********************************************/
var d1 = require("deviceone");
var app = d1.sm("do_App");

app.on("loaded", function () {
    this.openPage("source://do_UMengAnalytics/view/index.ui");
});
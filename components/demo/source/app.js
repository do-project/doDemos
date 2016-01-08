/**********************************************
 * Author : @Author
 * Timestamp : @Timestamp
 **********************************************/
var deviceone = require("deviceone");
var app = deviceone.sm("do_App");

app.on("loaded", function(){
    this.openPage("source://componets/view/index.ui");
});
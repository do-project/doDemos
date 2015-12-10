//related to 计算.ui
var nf = sm("do_Notification");
var page = sm("do_Page");
var close = ui("close");
var UM = sm("do_UMengAnalytics");
var music =ui("do_Button_1");
var audio=sm("do_Audio");
var hash=mm("do_HashData");
var app=sm("do_App");
var i=0;
var duration = 5000; //开发者需要自己计算音乐播放时长
page.on("loaded", function(data, e) {
	close.on("touch", function() {
		app.closePage();
	});
	page.on("back", function(data) {
		app.closePage();
	});
	music.on("touch",function(data,e){
		
		audio.play("data://do_UMengAnalytics/1.mp3",duration);
		
	});
	audio.on("playFinished",function(data, e){
		//统计一次音乐播放，包括音乐类型，作者和播放时长，可以在音乐播放结束后这么调用：
		var map=hash.addData({"type":"popular"},{"artist":"JJLin"});
		UM.eventValueLog("time", map,duration);
		if(audio.fire){
			i=i+1;
			nf.toast("音乐播放完成"+i);
		}
		
	});
	
});


$(document).ready(function() { 
	var clientH=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	$('.h5video').css({'width':'100%','height':clientH});
	$('.landWrap').css({'width':'100%','height':clientH});
	$('.videoBox').css({'width':'120%','left':'-10%'});
	$('.h5video').css({'width':'100%'});
	//为 <video> 元素添加 ontimeupdate 事件，如果当前播放位置改变则执行函数 
	var video=$('#h5video')[0];
	video.addEventListener('play', function() {
       //alert('video readyState: '+video.readyState);
       //alert('video networkState: '+video.networkState);
       //alert('play')
    })
     video.addEventListener('playing', function() {
       //alert(this.currentTime);
       //alert('video networkState: '+video.networkState);
       //alert('playing');
       //hideLoading();
       //showVideo();
       //checkVideoStream();
    })
    video.addEventListener('timeupdate', function() {
    	alert(video.duration)
    	alert(video.currentTime)
       if(video.duration-video.currentTime<0.06){
			setTimeout(function(){
				$('#videoWrap').hide();
				$('.landWrap').show();
			},1000)
		}
    })
	video.ontimeupdate = function() {
		//if(video.duration-video.currentTime<0.06){
		//	setTimeout(function(){
		//		$('#videoWrap').hide()
		//		$('.landWrap').show();
		//	},1000)
		//}
	};
}); 

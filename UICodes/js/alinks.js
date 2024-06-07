//active links
$(document).ready(function(){
	$(".scrolling").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({scrollTop: top}, 700);
		$("a").removeClass("menu-active");
		$(this).addClass("menu-active");
	});
	$(window).scroll(function() {
  		var windscroll = $(window).scrollTop();
    	$("section").each(function(i){
      		if($(this).position().top <= windscroll+10) {
        		$(".scrolling a").removeClass("menu-active");
        		$(".scrolling a").eq(i).addClass("menu-active");
			};
		});
	});
});
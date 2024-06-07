$(document).ready(function(){
	function htmSlider(){
		var slideWrap = $(".slide-wrap");
		var slideWidth = $(".slide-item").outerWidth();
		var scrollSlider = slideWrap.position().left-slideWidth;
		timer = setInterval(function(){
			slideWrap.animate({left: scrollSlider}, 700, function(){
				slideWrap
				.find(".slide-item:first")
				.appendTo(slideWrap)
				.parent()
				.css({"left": 0});
			});
		}, 5000);
	};
	htmSlider();
});
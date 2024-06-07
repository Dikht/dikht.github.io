// JavaScript Document


//scroll-top
$(document).ready(function(){
	$(function (){
		$("#scroll-top").hide();
		$(window).scroll(function (){
		if ($(this).scrollTop() > 100){
			$("#scroll-top").fadeIn();
		}
		else{
			$("#scroll-top").fadeOut();
		}
	});
	$("#scroll-top").click(function (){
		$("body, html").animate({
			scrollTop:0
		}, 800);
		return false;
		});
	});
});

//close-menu
$(document).ready(function(){
	$(".burger").fadeOut();
	$("#close").click(function(){
		$(".container-left").addClass("close-menu");
		$(".container-right").addClass("resize-content");
		$(".burger").fadeIn();
		$(".slide-item-pic").addClass("slide-item-pic-pos");
		$(".slide-item p").addClass("slide-item-p-pos");
	});
});

//burger
$(document).ready(function(){
	$(".burger").click(function(){
		$(".container-left").removeClass("close-menu");
		$(".container-right").removeClass("resize-content");
		$(".burger").fadeOut();
		$(".slide-item-pic").removeClass("slide-item-pic-pos");
		$(".slide-item p").removeClass("slide-item-p-pos");
	});
});

//burger mobile
$(document).ready(function(){
	$(".burger2").click(function(){
		$(".container-left").css("z-index", "200");
		$(".burger2").css("visibility", "hidden");
	});
	$(".left-menu ul li a").click(function(){
		$(".container-left").css("visibility", "hidden");
		$(".burger2").css("visibility", "visible");
	});
});

// call-back
$(document).ready(function(){
	$("#wrap").fadeOut();
	$("#window-call").fadeOut();
	$("#callme, #callmemob").click(function(){
		$("#wrap").fadeIn();
		$("#window-call").fadeIn();
		$("body").css("overflow", "hidden");
	});
	$("#wrap, #closeForm").click(function(){
		$("#wrap").fadeOut();
		$("#window-call").fadeOut();
		$("body").css("overflow", "inherit");
		$("#window-call #myName, #window-call #myTel, #window-call #myEmail").val("");
		$("#window-call #myName, #window-call #myTel, #window-call #myEmail").removeClass("error");
	});
});


//Logo rotate

$(document).ready(function(){
	$(window).resize(function() {
  		if(document.documentElement.clientWidth < 1024) {
			$(function() {
  				$(".container-logo").click(function(){
    				$(this).addClass("flipoff");
    				$(this).closest(".items-container").find(".screen").addClass("flipon");
  				});
  				$(".screen").mouseleave(function(){
    				$(this).removeClass("flipon");
    				$(this).closest(".items-container").find(".container-logo").removeClass("flipoff");
				});
			});
		};
	});
});


//Iframe window

$(document).ready(function(){
  		if (screen.width >= '1024') {
				$(".container-logo").click(function(){
					var iframelink="";
					iframelink = $(this).parent().find("a").attr("href");
					if ( iframelink!="") {
						$("#wrap").fadeIn();
						$(".iframe-container").fadeIn();
						$(".iframe-container")[0].src=iframelink;
						$("#closeiframe").css("display","block");
						$("body").css("overflow","hidden");
					};
					if ($(this).parent().find("a").hasClass("mob"))
						{
						$(".iframe-container").addClass("mobV");
						};
				});
				$("#wrap, #closeiframe").click(function(){
					$("#wrap").fadeOut();
					$(".iframe-container").fadeOut();
					$(".iframe-container")[0].src="";
					$("body").css("overflow","visible");
					$("#closeiframe").css("display","none","!important");
					$(".iframe-container").removeClass("mobV");
				});
		};
});



// Toggle for examples in Service

$(document).ready(function(){
	$(".skills-button").click(function () {
		var but = $(this).closest(".example-container").find(".skills-prewiev");
		$(this).text(but.is(":visible") ? "Examples" : "Hide");
		$(this).attr(but.is(":visible") ? "Examples" : "Hide");
		but.slideToggle("slow");
	});
});







/*
$(document).ready(function(){
	var siw=$(".slide-item").width();
	var cleft=$(".container-left").width();
	$(".slide-item").width(siw-cleft);
});*/
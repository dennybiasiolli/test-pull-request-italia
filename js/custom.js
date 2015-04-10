// --------------------------------------------------------
// Pretty Photo for Lightbox Image
// -------------------------------------------------------- 
$(document).ready(function() {	
    $("a[data-gal^='prettyPhoto']").prettyPhoto(); 
});

// --------------------------------------------------------
//	Navigation Bar
// -------------------------------------------------------- 	
$(window).scroll(function(){	
	"use strict";	
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){		
		$(".navbar").addClass("scroll-fixed-navbar");
        $(".phone-top").addClass("phone-bottom");
        $(".phone-top").removeClass("phone-top");
    } else {
		$(".navbar").removeClass("scroll-fixed-navbar");
        $(".phone-bottom").addClass("phone-top");
        $(".phone-top").removeClass("phone-bottom");
	}
});

// --------------------------------------------------------
//	Smooth Scrolling
// -------------------------------------------------------- 	
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});

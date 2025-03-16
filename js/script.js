(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	// Scroll to a Specific Div


	// magnifipopup video
	$(document).ready(function() {
		$('.hv-popup-link').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	});
	// magnifipopup video


	//--- MOBILE APP BTN START ---//
	$(document).ready(function () {
		$('.click-btn').on('click', function () {
			$('.mobile-app-frame').css({
				'opacity': '1',
				'transform': 'scale(1) rotate(0deg)',
				'pointer-events': 'visible'
			});
		});
	});
	//--- MOBILE APP BTN END ---//


	//--- MENU STYLE START ---//
    function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split('/').reverse()[0];

        selector.find('li').each(function () {
            let anchor = $(this).find('a');
            if ($(anchor).attr('href') == FileName) {
                $(this).addClass('current');
            }
        });
        // if any li has .current elmnt add class
        selector.children('li').each(function () {
            if ($(this).find('.current').length) {
                $(this).addClass('current');
            }
        });
        // if no file name return 
        if ('' == FileName) {
            selector.find('li').eq(0).addClass('current');
        }
    }
	//--- MENU STYLE START ---//

    // dynamic current class        
    let mainNavUL = $('.main-menu').find('.navigation');
    dynamicCurrentMenuClass(mainNavUL);
	
	//--- STICKY HEADER ---//
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();

	//  When sticky header is Scrollig
	$(window).on('scroll', function() {
		headerStyle();
	});
	//--- STICKY HEADER ---//


	//--- MOBILE NAV HIDE SHOW ---//
	if($('.mobile-menu').length){		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);	
		  	
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn,.scroll-nav li a, .dropdown a').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}
	//--- MOBILE NAV HIDE SHOW ---//
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
		mobile:       false
		});
		wow.init();
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}


	if ($('.theme_carousel').length) {
			$(".theme_carousel").each(function (index) {
			var $owlAttr = {},
			$extraAttr = $(this).data("options");
			$.extend($owlAttr, $extraAttr);
			$(this).owlCarousel($owlAttr);
		});
	}

	// ISOTOP STARTS 
	var $grid  = $('.listing-row').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		  // use outer width of grid-sizer for columnWidth
		  columnWidth: 1
		}
	});
  
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	}); 
  
	// active class
	$('.filter-button-group button').on('click', function (event){
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
	// ISOTOP ENDS 

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}


	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.1,             
			  factorLg: 0.1,          
			  direction: 'vertical' 
		});
	}

	if($('.paroller-2').length){
		$('.paroller-2').paroller({
			  factor: -0.1,             
			  factorLg: -0.1,        
			  type: 'foreground',     
			  direction: 'vertical' 
		});
	}

	if($('.paroller-3').length){
		$('.paroller-3').paroller({
			  factor: 0.1,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.1,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal' // vertical, horizontal  
		});
	}

	if($('.paroller-4').length){
		$('.paroller-4').paroller({
			  factor: -0.1,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: -40.1,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal' // vertical, horizontal  
		});
	}


	// Scroll top button
    $('.scroll-top-inner').on("click", function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });


    // single-item-carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: [ '<span class="far fa-long-arrow-left"></span>', '<span class="far fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},			
				1200:{
					items:1
				}

			}
		});    		
	}


    function handleScrollbar() {
        const bHeight = $('body').height();
        const scrolled = $(window).innerHeight() + $(window).scrollTop();

        let percentage = ((scrolled / bHeight) * 100);

        if (percentage > 100) percentage = 100;

        $('.scroll-top-inner .bar-inner').css( 'width', percentage + '%');
    }


	/* mouse cursor */
	document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px"
    });
    var 
        e = document.getElementById("mouse-pointer");
        
	$(document).mousemove(function(e){
		
		$(".funfact-eight, .subscribe-one.home-16, .clients-one.home-7")
		.on("mouseenter", function() {	 
			$('.mouse-pointer').addClass("black")	  
		})
		.on("mouseleave", function() {	  
			$('.mouse-pointer').removeClass("black")	  
		})
		
		$(".pointer-large, .owl-prev, .owl-next, .theme-btn")
		.on("mouseenter", function() {	 
			$('.mouse-pointer').addClass("large")	  
		})
		.on("mouseleave", function() {	  
			$('.mouse-pointer').removeClass("large")	  
		})
		
		$(".pointer-right, .banner-carousel")
		.on("mouseenter", function() {	 
			$('.mouse-pointer').addClass("right")	  
		})
		.on("mouseleave", function() {	  
			$('.mouse-pointer').removeClass("right")	  
		})
		
	});

	/* 9. ScrollAnimations */
	var $containers = $('[data-animation]:not([data-animation-text]), [data-animation-box]');
	$containers.scrollAnimations();


	/* 9. ScrollAnimations */
	var $containers = $('[data-animation]:not([data-animation-element]), [data-animation-area]');
	$containers.scrollAnimations();
    

    

	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			
		})(jQuery);
	});



	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
		handleScrollbar();
		if ($(window).scrollTop() > 200) {
                $('.scroll-top-inner').addClass('visible');
            } else {
                $('.scroll-top-inner').removeClass('visible');
            }
	});

	
	
	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});

	

})(window.jQuery);
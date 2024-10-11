$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	
	// 4. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:7,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:4

						},
						1199:{
							items:4
						},
						1200:{
							items:7
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


    // 5. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	// 6. parallax


    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const headerImage = document.querySelector('.header-text img');
        const heroSection = document.querySelector('.welcome-hero');
        
        // Calculate the new opacity and translateY based on the scroll position.
        // The more you scroll, the lower the opacity and the more it moves down.
        const maxScroll = 500; // Adjust this value as needed for when the image should be fully faded out.
        const opacity = Math.max(0, 1 - scrollPosition / maxScroll);
        const translateY = Math.min(50, scrollPosition / 15); // Adjust this value for more or less movement.

        // Apply the styles to the image.
        headerImage.style.opacity = opacity;
        headerImage.style.transform = `translateY(${translateY}px)`;

		// Adjust the background position based on scroll position for a parallax effect.
		heroSection.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
    });

	//7. extra
});	

document.addEventListener("DOMContentLoaded", function() {
    const aboutImages = document.querySelectorAll(".about-image");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function checkImagesInView() {
        aboutImages.forEach(image => {
            if (isInViewport(image)) {
                image.classList.add("show");
            } else {
                image.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", checkImagesInView);
    checkImagesInView(); // Initial check in case images are already in view
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutParagraph = document.querySelector(".single-about-txt p");
	const downArrows = document.querySelector(".down-arrows");
	const aboutHeader = document.querySelector(".single-about-txt h3");
    const originalText = aboutParagraph.textContent;
	const originalHeader = aboutHeader.textContent;

    function handleScroll() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight - 1) {
            // At the very bottom of the page
            aboutParagraph.classList.add("hidden");
            downArrows.classList.remove("hidden");
            downArrows.classList.add("visible");
			aboutHeader.textContent = ""
        } else {
            // Not at the bottom, revert back to original text
            aboutParagraph.classList.remove("hidden");
            downArrows.classList.add("hidden");
            downArrows.classList.remove("visible");
			aboutHeader.textContent = originalHeader
        }
    }

    window.addEventListener("scroll", handleScroll);
});
	
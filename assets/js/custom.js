$(document).ready(function(){
	"use strict";

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

	
	if ($(window).width() > 992) {
		$('.header-area').sticky({
			topSpacing: 0
		});
	}
	

	$('li.smooth-menu a').bind("click", function(event) {
		event.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 0
		}, 1200,'easeInOutExpo');
	});

	$('.navbar-brand').bind("click", function(event) {
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

	$(window).load(function(){
		$(".header-text").removeClass("animated fadeInUp").css({'opacity':'0'});
	});

	$(window).load(function(){
		$(".header-text").addClass("animated fadeInUp").css({'opacity':'0'});
	});


	window.addEventListener('scroll', function() {
		const scrollPosition = window.scrollY;
		const headerImage = document.querySelector('.header-text img');
		const heroSection = document.querySelector('.welcome-hero');
		const maxScroll = 500; 
		const opacity = Math.max(0, 1 - scrollPosition / maxScroll);
		const translateY = Math.min(50, scrollPosition / 15); 
		headerImage.style.opacity = opacity;
		headerImage.style.transform = 'translateY(${translateY}px)';
		headerImage.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
	});
});	

document.addEventListener("DOMContentLoaded", function() {
    const about1Content = document.querySelector("#about .about-content");
    const about2Content = document.querySelector("#about-2 .about-content");
	const about3Content = document.querySelector("#about-3 .about-content");
    let ticking = false;

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function checkContentInView() {
        if (isInViewport(about1Content)) {
            about1Content.classList.add("fade-in-left", "show");
        } else {
            about1Content.classList.remove("show");
        }

        if (isInViewport(about2Content)) {
            about2Content.classList.add("fade-in-right", "show");
        } else {
            about2Content.classList.remove("show");
        }

        if (isInViewport(about3Content)) {
            about3Content.classList.add("fade-in-left", "show");
        } else {
            about3Content.classList.remove("show");
        }

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(checkContentInView);
            ticking = true;
        }
    }

    window.addEventListener("scroll", onScroll);
    checkContentInView();
});

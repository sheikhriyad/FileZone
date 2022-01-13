/**
* Template Name: FileZone - v1.0.0
* Template URL: https://sheikhriyad.xyz/FileZone/
* Author: Sheikh Riyad
* License: https://sheikhriyad.xyz/
**/

(function ($) {
	"use strict";

	// Sticky Navigation Header
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('#header').addClass('header-scrolled');
		} else {
			$('#header').removeClass('header-scrolled');
		}
	});

	//Back to Top
	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});

	$('.back-to-top').click(function (){
		$('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
		return false;
	});

	//Mobile Navigation
	if ($('#nav-menu-container').length) {
		var $mobile_nav = $('#nav-menu-container').clone().prop({
			id: 'mobile-nav'
		});

		$mobile_nav.find(' > ul').attr({
			'class': '',
			'id': ''
		});

		$('body').append($mobile_nav);
		$('body').append('<div class="mobile-body-overlay"></div>');

		$(document).on('click', '#mobile-nav-toggle', function() {
			$('body').toggleClass('mobile-nav-active mobile-body-overlay');
			$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
		});

		$(document).click(function(e) {
			var container = $("#mobile-nav, #mobile-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length == 0) {
				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
					$('mobile-body-overlay').fadeOut();
				}
			}
		});
	} else if ($('#mobile-nav, #mobile-nav-toggle').length) {
		$('#mobile-nav, #mobile-nav-toggle').hide();
	}

	// Smooth Scoll for Navigation and Links 
	$('#logo a, .nav-menu a, #mobile-nav ul li a, .back-to-top').on('click', function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				var top_space = 0;

				if ($('#header').length) {
					top_space = $('#header').outerHeight();

					if (! $('#header').hasClass('header-scrolled')) {
						top_space = top_space - 20;
					}
				}

				$('html, body').animate({
					scrollTop: target.offset().top - top_space
				}, 1000, 'easeInOutExpo');

				if ($(this).parents('.nav-menu').length) {
					$('.nav-menu .menu-active').removeClass('menu-active');
					$(this).closest('li').addClass('menu-active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
					$('#mobile-body-overlay').fadeOut();
				}
				return false;
			}
		}
	});

	// Active Navigation Item on Scroll
	var nav_sections = $('section');
	var main_nav = $('.nav-menu, #mobile-nav');
	var main_nav_height = $('#header').outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		nav_sections.each(function () {
			var top = $(this).offset().top - main_nav_height,
			bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				main_nav.find('li').removeClass('menu-active menu-item-active');
				main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active menu-item-active');
			}
		});
	});

	// Wow Js Library
	new WOW().init();

})(jQuery);
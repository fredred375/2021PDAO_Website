//calculate the time before calling the function in window.onload
var beforeload = (new Date()).getTime();

function getPageLoadTime() {
  //calculate the current time in afterload
  var afterload = (new Date()).getTime();
  // now use the beforeload and afterload to calculate the seconds
  seconds = (afterload - beforeload) / 1000;
  var string = 'Programming Design And Optimization Website\n Information Management,National Taiwan University\n Page Loading Time: ' + seconds + ' sec\n Memory Used: 0.72MB'
  // Place the seconds in the innerHTML to show the results
  $("#load_time").text(string);
}

window.onload = getPageLoadTime;

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});

(function () {
	
	'use strict';

	// var mobileMenuOutsideClick = function() {

	// 	$(document).click(function (e) {
	//     var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
	//     if (!container.is(e.target) && container.has(e.target).length === 0) {
	//     	$('.js-gtco-nav-toggle').addClass('');

	//     	if ( $('body').hasClass('offcanvas') ) {

    // 			$('body').removeClass('offcanvas');
    // 			$('.js-gtco-nav-toggle').removeClass('active');
				
	//     	}
	    
	    	
	//     }
	// 	});

	// };

	
	// var offcanvasMenu = function() {

	// 	$('#page').prepend('<div id="gtco-offcanvas" />');
	// 	$('#page').prepend('<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle "><i></i></a>');
	// 	var clone1 = $('.menu-1 > ul').clone();
	// 	$('#gtco-offcanvas').append(clone1);
	// 	var clone2 = $('.menu-2 > ul').clone();
	// 	$('#gtco-offcanvas').append(clone2);

	// 	$('#gtco-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
	// 	$('#gtco-offcanvas')
	// 		.find('li')
	// 		.removeClass('has-dropdown');

	// 	// Hover dropdown menu on mobile
	// 	$('.offcanvas-has-dropdown').mouseenter(function(){
	// 		var $this = $(this);

	// 		$this
	// 			.addClass('active')
	// 			.find('ul')
	// 			.slideDown(500, 'easeOutExpo');				
	// 	}).mouseleave(function(){

	// 		var $this = $(this);
	// 		$this
	// 			.removeClass('active')
	// 			.find('ul')
	// 			.slideUp(500, 'easeOutExpo');				
	// 	});


	// 	$(window).resize(function(){

	// 		if ( $('body').hasClass('offcanvas') ) {

    // 			$('body').removeClass('offcanvas');
    // 			$('.js-gtco-nav-toggle').removeClass('active');
				
	//     	}
	// 	});
	// };


	var burgerMenu = function() {

		$('body').on('click', '.js-gtco-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;

		// $('.gtco-section').waypoint( function( direction ) {


			$('.animate-box').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
					
					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function(){

						$('body .animate-box.item-animate').each(function(k){
							var el = $(this);
							setTimeout( function () {
								var effect = el.data('animate-effect');
								if ( effect === 'fadeIn') {
									el.addClass('fadeIn animated-fast');
								} else if ( effect === 'fadeInLeft') {
									el.addClass('fadeInLeft animated-fast');
								} else if ( effect === 'fadeInRight') {
									el.addClass('fadeInRight animated-fast');
								} else {
									el.addClass('fadeInUp animated-fast');
								}

								el.removeClass('item-animate');
							},  k * 50, 'easeInOutExpo' );
						});
						
					}, 100);
					
				}

			} , { offset: '85%' } );
		// }, { offset: '90%'} );
	};



	var changeWayPoint = function() {
		var i = 0;

		// $('.gtco-section').waypoint( function( direction ) {


			$('.animate-change').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
					
					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function(){

						$('body .animate-change.item-animate').each(function(k){
							var el = $(this);
							setTimeout( function () {
								el.addClass('changed animated-fast');
								el.removeClass('item-animate');
							},  k * 100, 'easeInOutExpo' );
						});
						
					}, 100);
					
				}

			} , { offset: '85%' } );
		// }, { offset: '90%'} );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var owlCarousel = function(){
		
		var owl = $('.owl-carousel-carousel');
		owl.owlCarousel({
			items: 3,
			loop: true,
			margin: 40,
			nav: true,
			dots: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	],
	     	responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    	}
		});


		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 20,
			nav: true,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	]
		});


		

	};

	var tabs = function() {

		// Auto adjust height
		$('.gtco-tab-content-wrap').css('height', 0);
		var autoHeight = function() {

			setTimeout(function(){

				var tabContentWrap = $('.gtco-tab-content-wrap'),
					tabHeight = $('.gtco-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight );

				$(window).resize(function(){
					var tabContentWrap = $('.gtco-tab-content-wrap'),
						tabHeight = $('.gtco-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

						tabContentWrap.css('height', totalHeight );
				});

			}, 100);
			
		};

		autoHeight();


		// Click tab menu
		$('.gtco-tab-nav a').on('click', function(event){
			
			var $this = $(this),
				tab = $this.data('tab');

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.tab-content')
				.removeClass('active');

			$('.gtco-tab-nav li').removeClass('active');
			
			$this
				.closest('li')
					.addClass('active')

			$this
				.closest('.gtco-tabs')
					.find('.tab-content[data-tab-content="'+tab+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();

		}); 
	};


	// var goToTop = function() {

	// 	$('.js-gotop').on('click', function(event){
			
	// 		event.preventDefault();

	// 		$('html, body').animate({
	// 			scrollTop: $('html').offset().top
	// 		}, 500, 'easeInOutExpo');
			
	// 		return false;
	// 	});

	// 	$(window).scroll(function(){

	// 		var $win = $(window);
	// 		if ($win.scrollTop() > 200) {
	// 			$('.js-top').addClass('active');
	// 		} else {
	// 			$('.js-top').removeClass('active');
	// 		}

	// 	});
	
	// };


	// Loading page
	var loaderPage = function() {
		$(".gtco-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#gtco-counter').length > 0 ) {
			$('#gtco-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	$(function(){
		// mobileMenuOutsideClick();
		// offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		owlCarousel();
		tabs();
		// goToTop();
		loaderPage();
		counterWayPoint();
		changeWayPoint();
	});


}());

var deadline = new Date('2021-4-21')
const form = document.getElementById('form');
if(form)
{
	if(deadline < Date.now())
	{
		var button = document.getElementById('submit');
		button.disabled = true;
		button.style.background = '#A9A9A9';
		button.style.border = '#A9A9A9';
		button.style.color = 'black';
		button.title = '報名已截止';
	}
	else
	{
		form.addEventListener('submit', e => {
			e.preventDefault();
			var button = document.getElementById('submit');
			if(!button.disabled)
			{
				const file = form.file.files[0];
				if(file)
				{
					button.disabled = true;
					button.style.background = '#A9A9A9';
					button.style.border = '#A9A9A9';
					const fr = new FileReader();
					fr.readAsArrayBuffer(file);
					fr.onload = f => {
						
						const url = "https://script.google.com/macros/s/AKfycbxRuNTASHFGJGTbW1Q-iM0BO6scxej2xS2DhMBU95EgHpCuaYytcJLRVDCQ-cr9KI09/exec";
	
						const qs = new URLSearchParams({filename: form.filename.value || file.name, mimeType: file.type});
						fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target.result)])})
						.then(res => {
							res.json();
							var registerPage = document.getElementById('register-success');
							registerPage.innerHTML = '';
							var h2 = document.createElement('h2');
							h2.textContent = '報名成功';
							registerPage.appendChild(h2);
							var p = document.createElement('p');
							p.innerText = "我們已收到您的報名資料，\n4/23篩選過後會在網站上公布報名名單。\n請靜候我們的消息。";
							registerPage.appendChild(p);
							var clearPage = document.getElementById('clear-this');
							clearPage.style.display = 'none';
							button.disabled = false;
							button.style.background = '#00ffa3';
							button.style.border = '#00ffa3';
						})
						.catch(err => {
							console.log(err);
							button.disabled = false;
							button.style.background = '#00ffa3';
							button.style.border = '#00ffa3';
						});
					}		
				}
				else
				{
					button.style.background = '#00ffa3';
					button.style.border = '#00ffa3';
					alert("請選擇檔案");
				}
			}
			else
			{
				alert("正在上傳，請稍後");
			}
		});

	}
}

var regButton = document.getElementById('reg');
var menuButton = document.getElementById('menu1');
if(deadline < Date.now())
{
	if(regButton)
	{
		regButton.removeAttribute('href');
		regButton.style.background = '#A9A9A9';
		regButton.style.border = '#A9A9A9';
		regButton.style.color = 'black'
		regButton.title = "報名已截止"
	}
	if(menuButton)
	{
		menuButton.style = "display:none";
	}
}
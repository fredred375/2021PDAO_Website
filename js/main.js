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

var tables = document.getElementsByClassName('team-table');
var teams = [
	'我們這一家',
	'吃披薩',
	'靜香團',
	'一口披薩一口可樂讚',
	'Bovid19',
	'卓卓卓卓卓卓卓卓!大爆走',
	'哈哈，魔眼',
	'等待易卜生',
	'一個酷酷的諧音梗',
	'Kevin真的很煩',
	'大家可以不要再叫大家取名字了嗎',
	'妓女回來',
	'一起cout0',
	'R狗狗人勒',
	'Oo煞氣ㄟ冠軍oO',
	'隊名',
	'資管 baseline',
	'尤吉吉幫我打',
	'蟹堡王的pizza好吃的pizza',
	'BA方雲集',
	'觀世音Pizza',
	'寫程式不打草稿',
	'ladididila',
	'好想全隊',
	'歡樂吃pizza特攻隊',
	'何式功一直翹課',
	'徵室友',
	'假大一俱樂部',
	'80%黑巧杏仁餅乾好吃',
	'謝謝披薩',
	'披薩一日遊',
	'Looking For Sponsor',
	'sunrise',
	'文組隊哈',
	'好一朵美麗的',
	'必勝客',
	'無情の披薩收🈹️機',
	'我想想',
	'NoName',
	'電資踢管',
	'地理一',
	'對對隊',
	'卐材導課的vacancy卐',
	'睪🈹️離席',
	'林稜凱',
	'Meow',
	'你有後悔嗎？',
	'地理大發現',
	'資ㄍ系披薩趴',
	'CNN土法煉鋼',
	'南無喝囉怛那哆囉夜耶．南無阿唎耶，婆盧羯帝爍缽囉耶．菩提薩埵婆耶． 摩訶薩埵婆耶．摩訶迦盧尼迦耶．唵，薩皤囉罰曳．數怛那怛寫．南無 悉吉慄埵伊蒙阿唎耶．婆盧吉帝室佛囉愣馱婆．南無那囉謹墀．醯利摩訶 皤哆沙咩．',
	'欸！吃什麼？',
	'黃狗生蛋',
	'賴神普渡眾生',
	'國民金孫',
	'我最愛的程式是新竹市',
	'澎澎沐浴乳好香',
	'披薩戰隊',
	'統計好難',
	'露營勾',
	'我要吃pizzaaaaa',
	'領英小隊',
	'PADAI',
	'🈹️',
	'吃披薩的',
	'隊名不重要',
	'PDOGSADMIN',
	'apo好壯',
	'Roooooger'

];
for (let index = 0; index < (teams.length + 1) / 2; index++) {
	const element = teams[index];
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');
	td1.textContent = index;
	td2.textContent = element;
	tr.appendChild(td1);
	tr.appendChild(td2);
	tables[0].appendChild(tr);
}
for (let index = (teams.length + 1) / 2; index < teams.length; index++) {
	const element = teams[index];
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');
	td1.textContent = index;
	td2.textContent = element;
	tr.appendChild(td1);
	tr.appendChild(td2);
	tables[1].appendChild(tr);
}
(function($) {
	/*----------------------------------------------*\
	>   Variables
	\*----------------------------------------------*/
	var $window = $(window),
	windowHeight = $window.height();
	$navbar = $('.navbar'),
	$scrollUp = $('.scroll-up'),
	$chart = $('.chart');

	/*----------------------------------------------*/
	$window.resize(function () {
		windowHeight = $window.height();
	});

	/*----------------------------------------------*\
	>   Custom scripts
	\*----------------------------------------------*/

	/*---> Navbar <---*/	
	$('.navbar-toggle').click (function (){
		$navbar.toggleClass('navbar_active').find('.menu').slideToggle(300);
	});

	$('.section').click (function (e){
		if ($navbar.hasClass ('navbar_active')) {
			$navbar.find('.menu').slideUp(300).end().removeClass('navbar_active');
		}
	});


	/*---> Smooth scroll / Scroll To Top <---*/
	$('a[href*="#s-"]').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});

	$window.scroll(function() {
		if ($(this).scrollTop() > 47) {
			$scrollUp.fadeIn();
			$navbar.addClass('navbar_fixed');
		} else {
			$scrollUp.fadeOut();
			$navbar.removeClass('navbar_fixed');
		}
		// start EasyPieChart
		if ($window.scrollTop() >= ($chart.offset().top - windowHeight + 100)) {startEasyPieChart();}
	});


	/*----------------------------------------------*\
	>   Plugins settings
	\*----------------------------------------------*/
	
	/*---> EasyPieChart settings <---*/
	function startEasyPieChart () {
		$chart.each(function(){
			$(this).easyPieChart({
				size:140,
				animate: 3000,
				lineCap:'butt',
				scaleColor: false,
				barColor: $(this).attr("data-bar-color") || '#FF5252',
				trackColor: $(this).attr("data-track-color") || '#dfe8ed',
				lineWidth: 13
			});

		});
	};


	/*---> Isotope settings <---*/
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});
	$('.filter-button-group').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

	/*---> END <---*/
})(jQuery);
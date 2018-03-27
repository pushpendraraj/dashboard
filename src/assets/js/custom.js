(function ($) {
	new gnMenu( document.getElementById( 'gn-menu' ) );
	$(function() {
		$('.gn-menu a').on('click', function(event) {

			// $('.gn-menu-wrapper').removeClass('gn-open-all');
			// $('.gn-icon-menu').removeClass('gn-selected');
			// var $anchor = $(this);
			// $('html, body').stop().animate({
			// 	scrollTop: $($anchor.attr('href')).offset().top
			// }, 1500, 'easeInOutExpo');
			// event.preventDefault();
		});
	});
})(jQuery);
// class="gn-icon gn-icon-menu gn-selected"
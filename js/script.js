$(document).ready(function(){
	
	$('.multiple-items').slick({
  		infinite: true,
 		slidesToShow: 4,
 		slidesToScroll: 0,
	});

	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false


	});


});
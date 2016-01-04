$(document).ready(function(){
	$('.multiple-items').slick({
  		infinite: true,
 		slidesToShow: 4,
 		slidesToScroll: 1,
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


});
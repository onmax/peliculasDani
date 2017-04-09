$(document).ready(function(){
	var altura = $('.header').offset().top;

	$(window).on('scroll', function(){
		if ($(window).scrollTop() > altura){
			$('.header').addClass('search_fixed');
      $('.container').addClass('container_fixed');

		} else {
			$('.header').removeClass('search_fixed');
      $('.container').removeClass('container_fixed')
		}
	});

});

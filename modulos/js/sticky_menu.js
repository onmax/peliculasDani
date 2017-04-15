$(document).ready(function(){
	var altura = $('.header').offset().top;

	$(window).on('scroll', function(){
		if ($(window).scrollTop() > altura + 16){
			$('.header').addClass('search_fixed');
      $('.container').addClass('container_fixed');
			$('.popup_icon').addClass('popup_icon_fixed');
			$('.parametros').addClass('parametros_fixed');
		} else {
			$('.header').removeClass('search_fixed');
      $('.container').removeClass('container_fixed');
			$('.popup_icon').removeClass('popup_icon_fixed');
			$('.parametros').removeClass('parametros_fixed');
		}
	});

});

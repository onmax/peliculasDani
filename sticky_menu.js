$(document).ready(function(){
	var altura = $('.header').offset().top;

	$(window).on('scroll', function(){
		if ($(window).scrollTop() > altura + 16){
			$('.header').addClass('search_fixed');
      $('.container').addClass('container_fixed');
			$('.login').addClass('login_fixed');
			$('.parametros').addClass('parametros_fixed');
		} else {
			$('.header').removeClass('search_fixed');
      $('.container').removeClass('container_fixed');
			$('.login').removeClass('login_fixed');
			$('.parametros').removeClass('parametros_fixed');
		}
	});

});

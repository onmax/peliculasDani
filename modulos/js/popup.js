$(document).ready(function(){
	$('.register').click(function(){
    $(".register").css("background-color", "#68c1bb");
    $(".login_div").css("background-color", "#e3f2fd");
		document.querySelector(".info_popup").style.transform = 'translateX(-590px)';
	});

	$('.login_div').click(function(){
    $(".login_div").css("background-color", "#68c1bb");
    $(".register").css("background-color", "#e3f2fd");
		document.querySelector(".info_popup").style.transform = 'translateX(0)';
	});
});

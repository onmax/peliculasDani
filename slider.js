
var sliderContent = document.querySelector(".carteles");
var carteles = $('.carteles');
var prev = document.querySelector(".prev"),
    next = document.querySelector(".next");
var ancho = $(window).width() * 0.7;
var ancho_real = $(window).width() * 0.8;
var aux = 0;
var limite = 0;


next.addEventListener("click", function(){
  aux -= ancho;
  if(aux - ancho >=carteles.width()*(-1) && limite != 0){
    sliderContent.style.transform = 'translateX(' + aux + 'px)';
  }else{
    aux = carteles.width()*(-1) + ancho_real - 10;
    sliderContent.style.transform = 'translateX(' + aux + 'px)';
  }
  limite++;
});

prev.addEventListener("click", function(){
  if(limite>0){
    aux+= ancho;
    if(limite == 1){
      sliderContent.style.transform = 'translateX(' + 0 + 'px)';
    }else{
      sliderContent.style.transform = 'translateX(' + aux + 'px)';
    }
    limite--;
  }
});

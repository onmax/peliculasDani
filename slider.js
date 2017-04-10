
var sliderContent = document.querySelector(".carteles");
var carteles = $('.carteles');
var prev = document.querySelector(".prev"),
    next = document.querySelector(".next");
var ancho = $(window).width() * 0.7;
var ancho_real = $(window).width() * 0.8
var aux = 0;
var limite = 0;

var id_prev = document.getElementById("prev");
var id_next = document.getElementById("next");

var tope = 0;
next.addEventListener("click", function next(){
  aux -= ancho;
  limite++;
  if(aux - ancho >= carteles.width()*(-1) && tope != limite){
    sliderContent.style.transform = 'translateX(' + aux + 'px)';
    id_next.style.visibility = "visible";
    id_prev.style.visibility = "visible";
  }else{
    tope = limite;
    aux = carteles.width()*(-1) + ancho_real - 10;
    sliderContent.style.transform = 'translateX(' + aux + 'px)';
    id_next.style.visibility = "hidden";
    id_prev.style.visibility = "visible";
  }
});

prev.addEventListener("click", function prev(){
  if(limite>0){
    aux+= ancho;
    if(limite == 1){
      aux = 0;
      sliderContent.style.transform = 'translateX(' + 0 + 'px)';
      id_prev.style.visibility = "hidden"
      id_next.style.visibility = "visible";
    }else{
      sliderContent.style.transform = 'translateX(' + aux + 'px)';
      id_prev.style.visibility = "visible";
      id_next.style.visibility = "visible";
    }
    limite--;
  }
});

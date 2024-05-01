//   header active
  
  var headerBtnRigth = document.querySelector("#header__btn__rigth");
  var header__blur = document.querySelector(".header__blur");
  var btnTop = document.querySelector("#btnTop");

  window.onscroll = function () {

    let scroll = document.documentElement.scrollTop;

    if(scroll > 10){
        headerBtnRigth.classList.add("headerBtnRigthActive");
        header__blur.classList.add("headerActive");
    }
    else if(scroll < 10){
        headerBtnRigth.classList.remove("headerBtnRigthActive");
        header__blur.classList.remove("headerActive");
    }

    if(scroll > 500){
        btnTop.style.transform = "scale(1)"
    }
    else if(scroll < 500){
        btnTop.style.transform = "scale(0)"
    }
  }

// mn responsive

var iconMn = document.querySelector(".icon__mn");  
var iconMnSpan = document.querySelectorAll(".icon__mn__span");
var secMnResponsive = document.querySelector(".sec__mn__responsive");
var secMnResponsiveUl = document.querySelector(".sec__mn__responsiveUl");

iconMn.addEventListener("click", () => {
    iconMnSpan[0].classList.toggle("iconMnSpanActive0");
    iconMnSpan[1].classList.toggle("iconMnSpanActive1");
    iconMnSpan[2].classList.toggle("iconMnSpanActive2");
    secMnResponsive.classList.toggle("secMnResponsiveActive");
    secMnResponsiveUl.classList.toggle("secMnResponsiveUlActive");

})

// proyectos

var controls1 = document.querySelector("#controls1");
var controls2 = document.querySelector("#controls2");
var sliderProyec = document.querySelector("#sliderProyet");
var sliderProyetLi1 = document.querySelector("#sliderProyetLi1");
var sliderProyetLi2 = document.querySelector("#sliderProyetLi2");



controls2.addEventListener("click", (e) => {
    sliderProyec.classList.add("sliderProyecActive");
    sliderProyetLi2.classList.add("opacity1");
    sliderProyetLi1.classList.add("opacity0");
    controls2.classList.add("controlActive");
    controls1.classList.add("controlDesactive");
})

controls1.addEventListener("click", (e) => {
    sliderProyec.classList.remove("sliderProyecActive");
    sliderProyetLi2.classList.remove("opacity1");
    sliderProyetLi1.classList.remove("opacity0");
    controls2.classList.remove("controlActive");
    controls1.classList.remove("controlDesactive");
})

const subtitulos = document.querySelectorAll("a")

subtitulos.forEach((subtitulo) => {
  subtitulo.addEventListener("click", function () {
    if (subtitulo.style.color !="red" ) {
      subtitulo.style.color = "red";
      
    } else {
      subtitulo.style.color="white"
      //comida1.style.visibility="hidden";
    }
  });
});




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

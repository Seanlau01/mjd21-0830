window.addEventListener('load',function(){
    var swiper = new Swiper('.swiper-container', {
        direction:'horizontal',
          centeredSlides: true,
          loop: true,
        effect:'overflow',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
            },
      });
})

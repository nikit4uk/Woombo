window.addEventListener('DOMContentLoaded', () => {
    // Header Scripts
    let header = document.querySelector('header.header');
    window.addEventListener('scroll', function(){
        if(window.scrollY > 0){
            header.classList.add('page-scrolled');
        } else {
            header.classList.remove('page-scrolled');
        }
    });

    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            autoplay: false,
          },
          375: {
            slidesPerView: 1,
            autoplay: false,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
});
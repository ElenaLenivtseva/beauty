const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
    // slidesPerView: 4,
    
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    navigation: {
      nextEl: '.works__arrow_next',
      prevEl: '.works__arrow_prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
      // when window width is >= 320px
    //   350: {
    //     slidesPerView: 1,
    //   },
    //   // when window width is >= 480px
    //   900: {
    //     slidesPerView: 2,
    //   },
    //   // when window width is >= 640px
    //   1100: {
    //     slidesPerView: 3,
    //   }
    200: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    600: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    800: {
        slidesPerView: 3,
    },
    1200: {
        slidesPerView: 4,
        spaceBetween: 29,
    }
    }
  });
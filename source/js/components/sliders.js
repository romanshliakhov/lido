import Swiper from '../vendor/swiper.js';

for (const container of document.querySelectorAll('.container') ) {
  let matSlider = new Swiper(container.querySelector('.mat__slider'), {
    slidesPerView: 1,
    freeMode: true,
    loop: true,
    navigation: {
      nextEl: container.querySelector(".slider__btn--next"),
      prevEl: container.querySelector(".slider__btn--prev"),
      clickable: true,
  },
    // breakpoints: {
    //   320: {
    //       slidesPerView: 'auto',
    //       freeMode: true,
    //       spaceBetween: 10,
    //     },
    //   1440: {
    //     slidesPerView: 5,
    //     spaceBetween: 18,
    //   }
    // }
  });
}









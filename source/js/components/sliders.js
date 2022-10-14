import Swiper from '../vendor/swiper.js';

for (const container of document.querySelectorAll('.container') ) {
  let matSlider = new Swiper(container.querySelector('.mat__slider'), {
    slidesPerView: 1,
    // freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: container.querySelector(".mat__slider-btn--next"),
      prevEl: container.querySelector(".mat__slider-btn--prev"),
      clickable: true,
    },
  });
}









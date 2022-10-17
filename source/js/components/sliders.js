import Swiper from '../vendor/swiper.js';

for (const container of document.querySelectorAll('.container') ) {
  let matSlider = new Swiper(container.querySelector('.mat__slider'), {
    slidesPerView: 1,
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
};

let giftsSlider = new Swiper(".gifts__slider", {
  slidesPerView: 1.75,
  spaceBetween: 12,
  centeredSlides: true,
  loop: true,
  observer: true,
  breakpoints: {
    // 320: {
    //   slidesPerView: 1.75,
    //     spaceBetween: 12,
    //   },
    // 576: {
    //   slidesPerView: 1.5,
    //   spaceBetween: 15,
    // },
    // 768: {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    // }
}
});










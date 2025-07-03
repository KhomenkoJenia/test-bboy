document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const heroSwiper = new Swiper(".hero-swiper", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".hero-button-next",
      prevEl: ".hero-button-prev",
    },
    pagination: {
      el: ".hero-pagination",
      clickable: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".team-slider", {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".team-button-next",
      prevEl: ".team-button-prev",
    },
    pagination: {
      el: ".team-pagination",
      clickable: true,
    },
  });
});

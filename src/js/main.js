document.addEventListener("DOMContentLoaded", () => {
  const sliderElement = document.querySelector(
    ".hero-slider__swiper",
  );

  if (!sliderElement) {
    return;
  }

  new Swiper(sliderElement, {
    loop: true,
    speed: 650,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    navigation: {
      nextEl: ".hero-slider .swiper-button-next",
      prevEl: ".hero-slider .swiper-button-prev",
    },

    pagination: {
      el: ".hero-slider .swiper-pagination",
      clickable: true,
    },

    keyboard: {
      enabled: true,
    },
  });
});

const header = document.querySelector(".site-header");

if (header) {
  const updateHeaderState = () => {
    header.classList.toggle(
      "site-header--scrolled",
      window.scrollY > 10,
    );
  };

  updateHeaderState();

  window.addEventListener("scroll", updateHeaderState, {
    passive: true,
  });
}
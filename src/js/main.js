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
// Implementacion Header con Jquery
$(function () {
  const $header = $(".site-header");

  if (!$header.length) {
    return;
  }

  let ticking = false;

  const updateHeaderState = () => {
    const isScrolled = $(window).scrollTop() > 10;

    $header.toggleClass(
      "site-header--scrolled",
      isScrolled,
    );

    ticking = false;
  };

  updateHeaderState();

  $(window).on("scroll", () => {
    if (ticking) {
      return;
    }

    ticking = true;

    window.requestAnimationFrame(
      updateHeaderState,
    );
  });
});
document.addEventListener('DOMContentLoaded', function() {

  const container = document.querySelector('.hero .container')
  const swiper = new Swiper('.hero .swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1500,
    autoplay: {
      delay: 1500
    },
    effect: "fade",
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: '.swiper-bullet-pagination',
      type: 'bullets',
      clickable: true
    }

  })

  let gallerySlider = new Swiper(".gallery-swiper .slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 10,
    pagination: {
      el: ".gallery .gallery-pagination",
      type: "fraction"
    },

    navigation: {
      nextEl: ".nav-next",
      prevEl: ".nav-prev",
    },

    breakpoints: {

      320: {
        slidesPerView: 1
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 38
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 34
      },

      1920: {
        slidesPerView: 3,
        spaceBetween: 50
      }


    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

  });

  let eventSlider = new Swiper(".event__slides .event__swiper", {
    slidesPerView: 1,
    lidesPerGroup: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 10,

    navigation: {
      nextEl: ".event__btn--prev",
      prevEl: ".event__btn--next"
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {

      320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        navigation: {
          enabled: false,
        },
        pagination: {
          enabled: true,
        },
      },

      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,
        navigation: {
          enabled: false,
        },
        pagination: {
          enabled: true,
        },
      },

      1024: {
        slidesPerGroup: 2,
        slidesPerView: 3,
        spaceBetween: 27,
        navigation: {
          enabled: false,
        },
        pagination: {
          enabled: true,
        },
      },

      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          enabled: true,
        },
        pagination: {
          enabled: false,
        },
      },
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
           slide.tabIndex = "-1";
          } else {
           slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
           slide.tabIndex = "-1";
          } else {
           slide.tabIndex = "";
          }
        });
      }
    }

  });

  let projectSlider = new Swiper(".project__slides .project__swiper", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 10,

    navigation: {
      nextEl: ".project__btn--prev",
      prevEl: ".project__btn--next"
    },

    breakpoints: {

      768: {
        slidesPerView: 2,
        spaceBetween: 33.97
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      1920: {
        slidesPerView: 3,
        spaceBetween: 50
      }


    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
           slide.tabIndex = "-1";
          } else {
           slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
           slide.tabIndex = "-1";
          } else {
           slide.tabIndex = "";
          }
        });
      }
    }

  });

})

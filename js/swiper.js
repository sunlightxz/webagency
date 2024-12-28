
const swiperv = new Swiper('.testimonial-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,

    speed: 1000, // Smooth transition speed in milliseconds (1 second)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000, // Time between slide transitions (3 seconds)
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});


new Swiper('.logo-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});

var swiper2 = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    freeMode: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});



document.addEventListener('DOMContentLoaded', function() {
    const swiperx = new Swiper('.services-swiper', {
      // Enable breakpoints for responsive design
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },
      
      // Optional parameters
      loop: true, // Ensure looping is properly configured
      centeredSlides: false, // Disable centeredSlides to control flow direction
      grabCursor: true,
      
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // Add effects
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      
      // Enable smooth transitions
      speed: 800,
      
      // Add some resistance when reaching the end
      resistance: true,
      resistanceRatio: 0.85,
    });
  });


  const swipersss = new Swiper(".mySwiperd", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
  delay: 2500,
  disableOnInteraction: false,
},
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 768px
        420: {
            slidesPerView: 1,
            spaceBetween: 20
          },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
});
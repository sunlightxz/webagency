const swiper = new Swiper('.testimonial-slider', {
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

new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
}),

new Swiper('.comm-slider', {
    slidesPerView: 2,
    breakpoints: {
        1920: {
            slidesPerView: 2,
        },
        1680: {
            slidesPerView: 2,
        },
        1680: {
            slidesPerView: 2,
        },
        1600: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 2,
        },
        1366: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
        414: {
            slidesPerView: 1,
        },
        393: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 1,
        },
    }
})
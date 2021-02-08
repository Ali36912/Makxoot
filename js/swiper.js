new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
}),

new Swiper('.comm-slider', {
    slidesPerView: 2,
    breakpoints: {
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
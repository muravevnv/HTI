

const productSliderColor = new Swiper('.js-slider-color',{
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        prevEl:'.slider__prev',
        nextEl:'.slider__next',
    }
})

const productSizeColor = new Swiper('.js-slider-size',{
    slidesPerView: 5,
    spaceBetween: 16,
    navigation: {
        prevEl:'.product-size__prev',
        nextEl:'.product-size__next',
    }
})
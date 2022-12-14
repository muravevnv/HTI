


const productSliderMain = new Swiper('.js-slider-main',{
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        prevEl:'.slider__prev',
        nextEl:'.slider__next',
    },
    pagination: {
        el:'.swiper-pagination',
        type: 'progressbar',
    }
})

const productSliderColorImg = new Swiper('.product-colors__img', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

})

const productSliderColor = new Swiper('.js-slider-color',{
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
        prevEl:'.slider__prev',
        nextEl:'.slider__next',
    },
    thumbs: {
        swiper: productSliderColorImg,
    },
})



const productSizeColor = new Swiper('.js-slider-size',{
    slidesPerView: 'auto',
    spaceBetween: 35,
    pagination: {
        el:'.swiper-pagination',
        type:'progressbar'
    },
    breakpoints: {
        1024: {
            slidesPerView: 5,
            spaceBetween: 16,
            navigation: {
                prevEl:'.product-size__prev',
                nextEl:'.product-size__next',
            }
        }
    }
})

const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header-nav');

const initMenu = function(){
    menuBtn.addEventListener('click', function(){
        this.classList.toggle('active');
        menu.classList.toggle('active');
    })
}

if(menuBtn) {
    initMenu();
}

let tabs = document.querySelectorAll('.product-tabs__item');
let tabsContent = document.querySelectorAll('.product-tabs__content')

const initTabs = function(){
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(){
            tabs.forEach((e)=>{
                e.classList.remove('active')
            })
            tabsContent.forEach((k)=>{
                k.classList.remove('active')
            })
            this.classList.add('active');
            tabsContent[i].classList.add('active')
        })
    }
}
if(tabs) {
    initTabs();
}
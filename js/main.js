const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 600,

    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    // Чтобы мы могли прокручиваться с первого по последнего или с последнего
    loop: true,
    
    // Чтобы при нажатии клавиши переключать слайдер
    keyboard: {
        enabled: true,
    },

    pagination: {
        el: '.swiper-pagination',
		dynamicBullets: true,
		clickable: true,
    },
});
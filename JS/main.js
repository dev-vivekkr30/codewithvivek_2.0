$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 1500,
    autoplayHoverPause: false,
    nav: false,
    responsive: {
        0: {
            items: 4
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
})
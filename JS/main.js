// carousle-js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 150,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
});

// work-section-btn-function

// const active_work_btn = document.querySelector(".active-work");

// let flag = 0;

// active_work_btn.addEventListener('click', function onClick(change_color_btn){
//     active_work_btn.style.background = "linear-gradient(90deg, #FE7F2D, #FFBF46)"
// });
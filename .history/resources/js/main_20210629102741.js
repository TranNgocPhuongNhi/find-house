// ===================================== Mobile nav ==================================
const mobile_nav = document.querySelector('.header__nav-list');
const bars = document.querySelector('.mobile-bars');

bars.addEventListener("click",() => {
    mobile_nav.classList.toggle('mobile-nav-active')
})


// ===================================== Scrolling nav ==================================

const nav = document.querySelector("nav");
window.addEventListener("scroll",() => {
    const offset = window.pageYOffset;
    if(offset > 20) {
        nav.classList.add('scroll-nav');
    }
    else {
        nav.classList.remove('scroll-nav');
    }
})

// ===================================== Testimonial slide ==================================
var slideIndex = 1;
const testimonial_item = document.querySelectorAll('.testimonial__item');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
        if(testimonial_item.length > 3) {
            sl
        }
    })
})
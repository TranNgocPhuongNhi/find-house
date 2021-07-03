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

// ===================================== Mobile nav ==================================
const mobile-nav = document.querySelector('');



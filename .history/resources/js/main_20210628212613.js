const mobile_nav = document.querySelector('.header__nav-list');
const bars = document.querySelector('.mobile-bars');

bars.addEventListener("click",() => {
    // if(mobile_nav.style.display == 'none') {
    //     mobile_nav.style.display == 'block'; 
    // }
    // else {
    //     mobile_nav.style.display == 'none';
    // }
})


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


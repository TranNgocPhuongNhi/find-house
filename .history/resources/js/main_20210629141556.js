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


// ===================================== Search Item ==================================
var search_price = document.querySelector('.item-range-slider');
var drag_price = document.querySelector('.search__range-slider');
var search_type = document.querySelector('.type-list');
var property_type = document.querySelector('.search__type-list');
var search_advanced = document.querySelector('.item-advanced');
var advanced_option = document.querySelector('.advanced__option');

search_price.addEventListener("click",() => {
    drag_price.classList.toggle('active_price')
})

search_type.addEventListener("click",() => {
    property_type.classList.toggle('active_type')
})

search_advanced.addEventListener("click",() => {
    advanced_option.classList.toggle('active_advanced')
})


// ===================================== Drag Price ==================================
var minValue = document.getElementById('input-left');
var maxValue = document.getElementById('input-right');
var minPrice = document.querySelector('.price-min');
var maxPrice = document.querySelector('.price-max');

minPrice.innerHTML = "$" + minValue.value;
maxPrice.innerHTML = "$" + maxValue.value;

minValue.oninput = function() {
    minPrice.innerHTML = "$" + this.value;
}

maxValue.oninput = function() {
    maxPrice.innerHTML = "$" + this.value;
}



// ===================================== Feature slide ==================================
const currentIndex = 1;
const prev = document.querySelector('.feature__button-prev');
const next = document.querySelector('.feature__button-next');
const featureItems = document.querySelectorAll('.feature__item');


prev.addEventListener("click",() => {
    plusSlides();
})

next.addEventListener("click",() => {
    
})




// ===================================== Testimonial slide ==================================

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testimonial__item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active_dot";
}
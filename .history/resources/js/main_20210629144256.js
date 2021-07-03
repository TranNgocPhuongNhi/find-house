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
var getMinValue = document.getElementById('input-left');
var getmaxValue = document.getElementById('input-right');
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
const prev = document.querySelector('.feature__button-prev');
const next = document.querySelector('.feature__button-next');
const featureItems = document.querySelectorAll('.feature__item');
var itemPage = Math.ceil(featureItems.length / 3);
var i=0;
var movePerItem = 104.7;
var m_320 = window.matchMedia("(min-width:320px) and (max-width:374px)");
var m_375 = window.matchMedia("(min-width:375px) and (max-width: 419px)");
var m_420 = window.matchMedia("(min-width:420px) and (max-width:520px)");
var m_521 = window.matchMedia("(min-width:521px) and (max-width:575px)");
var m_576 = window.matchMedia("(min-width:576px) and (max-width:767px)");
var m_768 = window.matchMedia("(min-width:767px) and (max-width:991px)");
var m_992 = window.matchMedia("(min-width:992px) and (max-width:1199px)");
if(m_320.matches){
    movePerItem = 105.305;
} else if(m_375.matches){
    movePerItem = 104.515;
}else if(m_420.matches){
    movePerItem = 103.8;
}else if(m_521.matches){
    movePerItem = 103.25;
}else if(m_576.matches){
    movePerItem = 103.05;
} else if(m_768.matches){
    movePerItem = 104.08;
} else if(m_992.matches){
    movePerItem = 105;
}

next.addEventListener("click",() => {
    i = i + movePerItem;
    for(var item of featureItems){
        if((i > 525) && (movePerItem == 104.08)){ i = 0}
        if((i > 420) && (movePerItem == 105 || movePerItem == 104.7)){ i = 0}
        var moveLength = "-" + i + "%";
        item.style.transform = `translateX(${moveLength})`;
    }
})

prev.addEventListener("click",() => {
    i = i - movePerItem;
    if(i < 0){ i = 0}
    for(var item of featureItems) {
        if(itemPage > 1){
            var moveLength = "-" + i + "%";
            item.style.transform = `translateX(${moveLength})`;
        }
    }
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
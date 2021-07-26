// Mobile navigation

const openMenu = document.getElementById("mobile-open-btn");
const closeMenu = document.getElementById("mobile-close-btn");
const nav = document.querySelector(".menu");

openMenu.addEventListener("click", function() {
    nav.classList.add("active");
});

closeMenu.addEventListener("click", function() {
    nav.classList.remove("active");
})


// Testimonial slides

const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");

let slideIndex = 1;
showSlides(slideIndex);

rightBtn.addEventListener("click", function(n){
    showSlides(slideIndex += 1);
})
leftBtn.addEventListener("click", function(n){
    showSlides(slideIndex -= 1);
})

function currentSlide(n) {
    showSlides(slideIndex = n);
  }


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("testimonial-item");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
    
  }

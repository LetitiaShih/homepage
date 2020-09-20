var slideTime = 3500;

function plusDivs(n) {
    showDivs(slideIndex += n);
    resetCarousel();
}

function currentDiv(n) {
    showDivs(slideIndex = n);
    resetCarousel();
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("w3-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-white";
}

var slideIndex = 0;
var timeoutHandle;

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideshow");
    // for (i = 0; i < x.length; i++) {
    // x[i].style.display = "none"; 
    // }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    showDivs(slideIndex);
    // x[slideIndex-1].style.display = "block";
    timeoutHandle = setTimeout(carousel, slideTime); // Change image every 2 seconds
}

function resetCarousel() {
    window.clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(carousel, slideTime);
}

carousel();

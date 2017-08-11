var slideIndex = 0;
showSlides();

function showSlides() {
    var c;
    var slides = document.getElementsByClassName("mySlides");
    for (c = 0; c < slides.length; c++) {
        slides[c].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

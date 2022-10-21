var slideIndex = 1;
showSlide(slideIndex);


function plusSlide(n){
    showSlide(slideIndex += n);
}

setInterval(autoSlide, 7000);

function autoSlide() {
    slideIndex += 1;
    showSlide(slideIndex);
}


function showSlide(n){
    var i = 1;
    var slides = document.getElementsByClassName("slide");
    if(n>slides.length){
        slideIndex=1;
    }
    if(n<1){
        slideIndex=slides.length;
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
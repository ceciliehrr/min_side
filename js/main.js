var carousel = document.querySelector('.carousel');
var cellCount = 6;
var selectedIndex = 0;

function rotateCarousel() {
    var angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-259px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.left');
prevButton.addEventListener('click', function() {
    selectedIndex--;
    rotateCarousel();
});

var nextButton = document.querySelector('.right');
nextButton.addEventListener('click', function() {
    selectedIndex++;
    rotateCarousel();
});

$(carousel).on("swiperight", function() {
    selectedIndex++;
    rotateCarousel();
});


$(carousel).on("swipeleft", function() {
    selectedIndex--;
    rotateCarousel();
});
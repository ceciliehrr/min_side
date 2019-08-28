var carousel = document.querySelector('.carousel');
var cellCount = 6;
var selectedIndex = 0;
$.mobile.loading().hide();

function rotateCarousel() {
    var angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-259px) rotateY(' + angle + 'deg)';
}

$('html').swipe({
    swipe: function(event, direction, distance, duration, fingerCount) {
        switch (direction) {
            case "left":
                selectedIndex++;
                rotateCarousel();
                break;
            case "right":
                selectedIndex--;
                rotateCarousel();
        }
    }
});

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
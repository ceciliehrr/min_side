function openNav() {
    document.getElementById("myNav").style.width = "33%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
function openNavSmall() {
    document.getElementById("myNavSmall").style.width = "100%";
}
function closeNavSmall() {
    document.getElementById("myNavSmall").style.width = "0%";
}
$(document).ready(function(){
    $(".over-content a").click(function(){
        $(".over").css("width", "0%");
     });
 });
function newBlog(bloggposten,bloggdatoen,less, more, image){
    document.getElementById("bloggpost").innerHTML = bloggposten;
    document.getElementById("bloggdato").innerHTML = bloggdatoen;
    document.getElementById("less").innerHTML = less;
    document.getElementById("more").innerHTML = more;
    document.getElementById("bloggbilde").src = image;
}
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}
jQuery(function($) {
  
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
      
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      
      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
      }
      
      // Check all animatables and animate them if necessary
          $animatables.each(function(i) {
         var $animatable = $(this);
              if (($animatable.offset().top + $animatable.height() - 20) < offset) {
          $animatable.removeClass('animatable').addClass('animated');
              }
      });
  
      };
    
    // Hook doAnimations on scroll, and trigger a scroll
      $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  });

  $(document).ready(function(){
    $('#gant').hide();
    $(".elem3").click(function(){
      $("#gant").show(1000);
    });
  });

  $(document).ready(function(){
  $(".hide").click(function(){
    $("#gant").hide(1000);
  });
});
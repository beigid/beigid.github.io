
//Code created to chnage profile image circle color when mouse hovers over
var profileColor = document.querySelector(".imgborder");

profileColor.addEventListener("mouseover", function (){
	profileColor.setAttribute("style", "border: 7px solid #56b6ee;")
});

profileColor.addEventListener("mouseleave", function (){
	profileColor.setAttribute("style", "border: 7px solid white;")
});





(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbar").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 200) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});

	
	});

});
  }(jQuery));


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Code made to adjust page scroll when using internal anchors
// var shiftWindow = function() { scrollBy(0, -50) };
// if (location.hash) shiftWindow();
// window.addEventListener("hashchange", shiftWindow);
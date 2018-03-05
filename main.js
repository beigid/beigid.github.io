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
			if ($(this).scrollTop() > 100) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});

	
	});

});
  }(jQuery));

// var profileColor = document.addEventListener("click", function (){
	
// })














// // window.addEventListener("scroll", function() {
// //     if (window.scrollY > 100) {
// //         $('.navbar').fadeIn();
// //     }
// //     else {
// //         $('.navbar').fadeOut();
// //     }
// // },false);

(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbar").hide();
	
	//fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop()) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
	});
});
  }(jQuery));


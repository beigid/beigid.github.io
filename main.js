

// declare globals to hold all the links and all the panel elements
var tabLinks;
var tabPanels;


		window.onload = function() {
    // when the page loads, grab the li elements
    tabLinks = document.getElementById("tabs").getElementsByTagName("li");
    // Now get all the tab panel container divs
    tabPanels = document.getElementById("containers").getElementsByTagName("div");

    // activate the _first_ one
    displayPanel(tabLinks[0]);

    // attach event listener to links using onclick and onfocus, fire the displayPanel function, return false to disable the link
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener("click",function() {
            displayPanel(this);
            return false;
        })
    }
}

function displayPanel(tabToActivate) {
    for (var i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i] == tabToActivate) {
            // if it's the one to activate, change its class
            tabLinks[i].classList.add("active");
            // and display the corresponding panel
            tabPanels[i].style.display = "block";
        } else {
            // remove the active class on the link
            tabLinks[i].classList.remove("active");
            // hide the panel
            tabPanels[i].style.display = "none";
        }
    }
}



//Code created to chnage profile image circle color when mouse hovers over
var profileColor = document.querySelector(".imgborder");

profileColor.addEventListener("mouseover", function (){
	profileColor.setAttribute("style", "border: 7px solid black;")
});

profileColor.addEventListener("mouseleave", function (){
	profileColor.setAttribute("style", "border: 7px solid white;")
});


//variables declared for form submit button and content in "contact" section
var content = document.querySelector("#content");
var button = document.querySelector("input[name='contactbutton']");

button.addEventListener("click", function () {
	
	if (content.className == "open"){
		//expand the box and hide the button
		content.setAttribute("class", "")
	} else {
		//Expand the box
		content.setAttribute("class", "open");
		button.setAttribute("style", "visibility: hidden;")
			
	}
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
    } 
  });
});




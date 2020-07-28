//set global variable for image files
var images=['images/Headshot_4.png', 'images/Headshot_5.png', 'images/Headshot_resize_web2.jpg','images/Headshot_resize2.png','images/Headshot_resize3.png'];

//set interval for profile headshot image to change every 2 seconds
setInterval(function(){
  var imageLink = images[Math.floor(Math.random() * images.length)];
  document.querySelector("#firstsection img").setAttribute("src",imageLink);  
},2000);



//Code to add animated bounce to about me section
 let str, res, newDiv
 	newDiv = document.querySelector(".bounce-start")
 	str = "A determined, highly motivated young professional in Seattle whose career objective is to excel and grow within the ecosphere of development. By utilizing past work experience and expanding on new skills, the trajectory of work-place success will be brought to fruition by learning new abilities, ideologies, and technologies that will facilitate a successful career pathway.";
	res = str.split(" ");
  console.log(res)
    for(var i = 0; i < res.length; i++) {
	 let newP = document.createElement("span");
     newP.setAttribute("class", "bounce animateBounce")
	newP.innerHTML = ` ${res[i]}`
    newDiv.appendChild(newP)
	}



//Code created to change profile image circle color when mouse hovers over
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







$(function() { // jQuery shorthand for Ready

  //Animation activates on hover for 'about' section with animate.css
//   $('.animateBounce').hover(
//     function(){ // acts as onmouseover
//        $(this).addClass('animated rubberBand');
//     },
//     function() { // acts as onmouseout
//         $(this).removeClass('animated rubberBand');
//     }
// );
  
  
 setTimeout(function(){

            $(".bounce").mouseenter(function (){

                var el = $(this);

                $(this).addClass('animated rubberBand');
                $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                    el.removeClass('animated rubberBand');

                });

            });


        },1000);
 
  
  // hide .navbar first
  $(".navbar").hide();
    
  // fade in .navbar
  $(window).scroll(function () {
    // set distance user needs to scroll before we fadeIn navbar
    if ($(this).scrollTop() > 200) {
      $('.navbar').fadeIn();
    } else {
      $('.navbar').fadeOut();
    }
  });

});





$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".nav a").on('click', function(event) {

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









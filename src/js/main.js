var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    console.log("event happened");
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 



// Reference hamburger icon
var button = document.getElementById("hamburger");

var ul = document.getElementById("pizza");

// Show nav
function toggle() {
  
}

// Wire up the event
button.addEventListener("click", function(){
  ul.classList.toggle("active");
  console.log("toggled");

});




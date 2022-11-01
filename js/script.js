// **** Typing Animation **** //
var typed = new Typed(".typing", {
    strings:[" ", "Front-End Web Developer.", "Back-End Web Developer.", "Full-Stack Web Developer."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// **** Scroll Up Button **** //
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    mybutton.style.display = "block";
  } else 
  {
    mybutton.style.display = "none";
  }
}
function topFunction() 
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
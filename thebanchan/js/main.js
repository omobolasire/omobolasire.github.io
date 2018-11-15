$(document).ready(function(){
  console.log("Hello from main.js!")
  $(".close, .hamburger").click(function(e){
    e.preventDefault();
    $(".main-nav").toggleClass('open-nav');
  });
});

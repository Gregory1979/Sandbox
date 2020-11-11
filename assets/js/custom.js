// document scroll position
$(window).scroll(function(){
  $(".dreieck-svg , .scrollDownText").css("opacity", 1 - $(window).scrollTop() / 500);
});

$(window).scroll(function(){
  $(".fg-img .dreieck ").css("scale-img", 1 - $(window).scrollTop() / 1800);
});




// When the user scrolls the page, execute myFunction

//window.onscroll = function() {myFunction2(), myFunction3()};

window.onscroll = function() {myFunction2(), myFunction3()};

function myFunction3() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var x = document.getElementsByClassName("ColorTest");

  if (winScroll > 250){
    x[0].style.color = "red";
  } else {
    x[0].style.color = "white";
  }
}



//  if (winScroll > 250){
//    document.getElementById("box").style.color = "red"
//  } else {
//    document.getElementById("box").style.color = "white"
//  }
//}

//document.getElementById("box").style.color = "red"
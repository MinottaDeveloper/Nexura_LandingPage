
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("main_navigation").style.background = "#241F21";
      
    } else {
        document.getElementById("main_navigation").style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.637), rgba(0, 0, 0, 0) 90%)";
    }
  }
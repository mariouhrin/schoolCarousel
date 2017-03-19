$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
}, 4000);

var nadpisHeight = document.getElementsByClassName("nadpis")[0].clientHeight;
var bodyHeight = document.getElementsByTagName("body")[0].clientHeight;

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(4500)
    .next()
    .fadeIn(5000)
    .end()
    .appendTo('#slideshow');
}, 12000);

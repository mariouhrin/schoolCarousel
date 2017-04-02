$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(3500)
    .next()
    .fadeIn(3500)
    .end()
    .appendTo('#slideshow');
}, 8000);

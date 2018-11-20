$(document).ready(function(){
  var snapchat = $(".article:nth-child(4) ul li:nth-child(4) a");
  $(snapchat).text('Pinterest');
  $(snapchat).attr('href', 'http://www.pinterest.com');

  var hrefgato = $("[href='#']");
  $(hrefgato).on('click', function(event) {
    event.preventDefault();
  });

  var headerh2size = $('.header__main h2').css('font-size');
  var cortedesize = headerh2size.split("px");
  var parsecortedesize = parseInt(cortedesize[0])
  var sizex2 = parsecortedesize*2
  var sizex2px = sizex2+"px"
  $('.header__main h2').css('font-size', sizex2px);


});

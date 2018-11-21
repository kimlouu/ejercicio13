$(document).ready(function (){

  var hrefgato = $('[href="#"]');

  $(hrefgato).on('click', function(event) {
    event.preventDefault();
  });

  $('body').on('click', '.social__like', function(){
    $(this).toggleClass('social__like--clicked');

  });

  $('.social__link').on('click', function(){
    var btn = $(this);
    var apadre = $(btn.parent().parent().parent());
    var imgchildren = $(apadre.children().prev());
    var alt_img = $(imgchildren).attr('alt');
    alert(alt_img)
  })

});

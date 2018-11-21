$(document).ready(function() {


  $('.add_name').on('click', function() {
    var nombre = prompt("Ingresa un nombre");

    var ulnames = $('body ul.names');
    ulnames.append('<li><span>' + nombre + ' </span><a href class="remove_name">(Eliminar)</a></li>');

    var hrefgato = $('[href=""]');

    $(hrefgato).on('click', function(event) {
      event.preventDefault();
    });

    $('.remove_name').on('click', function(a) {
      var tisa = $(this);
      tisa.parent().remove();
    });

  });



});

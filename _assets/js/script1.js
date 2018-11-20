$(document).ready(function() {
  $('.images__image').on('click', function() {
    var alt_img = $(this).attr('alt');
    alert(alt_img);
  });
});

$(document).ready(function (){
  var link4select = $('body nav ul li:nth-child(4)')
  link4select.append('<ul><li><a href="#">link 4.a</a></li></ul>');
  link4select.before('<li><a href="#">link 3.5</a></li>');

  var link6select = $('body nav ul li:nth-child(7)');
  link6select.prepend("😎");
  link6select.after("🙂");
});

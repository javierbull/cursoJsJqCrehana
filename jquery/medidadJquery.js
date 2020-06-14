$(document).ready(function(){
  // alert('hola Munda')

  var btn = $('#boton');

  // CALCULAR ANCHO DE UN ELEMENTO
  btn.on('click', function(){
    var ancho = $('#segundo').width();
    // Ancho incluyendo  padding
    // var ancho = $('#segundo').innerWidth();
    // Ancho incluyendo bprder y padding
    // var ancho = $('#segundo').outerWidth();
    // Ancho incluyendo bprder, padding y margin
    // var ancho = $('#segundo').outerWidth(true);

    alert(ancho);
  });

  // CALCULAR EL ALTO DE UN ELEMENTO
  btn.on('click', function(){
    var alto = $('#segundo').height();
    // Ancho incluyendo  padding
    // var ancho = $('#segundo').innerHeight();
    // Ancho incluyendo bprder y padding
    // var ancho = $('#segundo').outerHeight();
    // Ancho incluyendo bprder, padding y margin
    // var ancho = $('#segundo').outerHeight(true);

    alert(ancho);
  alto

});

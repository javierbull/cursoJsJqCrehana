$(document).ready(function(){
  // alert('Holas');

  var btn = $('#boton');
  var stop = $('#detener');

  btn.on('click', function(){
    $('#segundo').animate({
      width:'200%'
    },5000);

    $('#segundo').animate({
      width:'300%'
    },5000);

    $('#segundo').animate({
      width:'100%'
    },5000);

  });

  stop.on('click', function(){

    // .stop(limpiar cola, saltar al final);

    $('#segundo').stop(true, false);
  });


});

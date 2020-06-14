$(document).ready(function(){
  // alert('Holas');

  // .animate(Propiedades, tiempo en milisegundos, function(callback))

  var btn = $('#boton');

  // btn.on('click', function(){
  //   $('#segundo').animate({
  //     width: '70%',
  //     padding: '2rem'
  //   }, 1000, function(){
  //     alert('Fin de animación');
  //   } );
  // });

  btn.on('click', function(){
    $('#segundo').animate({
      width: '50%'
    }, 1000);

    $('#segundo').animate({
      width:'80%'
    }, 1000);
  });
});

$(document).ready(function(){
  // alert('Holas');

  // https://api.jquery.com/category/events/

  var btn = $('#boton');
  var btn2 = $('#segundoBoton');

  // AÑADIR EVENTO CON FUNCIÓN ANÓNIMA

  // btn.click(function(){
  //   alert('Hola munda');
  // });

  // AÑADIR EVENTO CON FUNCIÓN DECLARADA

  // function saludo(){
  //   alert('Hola bebe');
  // }
  //
  // btn.click(saludo);

  // AÑADIR EVENTO CON FUNCIÓN .pn()

  btn.on('dblclick', function(){
    alert('Hola vengo de la función .on()')
  });

  // ELIMINAR EVENTO CON .off()

  btn2.on('click', function(){
    btn.off('dblclick');  
  })


});

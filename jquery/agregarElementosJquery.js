$(document).ready(function(){
  // alert('Holiiis');

  var contenedor = $('.contenedor');
  var segundoParrafo = $('#segundo');
  var btn = $('#boton');

  btn.click(function(){

    // Agregar nuevo párrafo
    var nuevoparrafo = $('<p>').attr('class', 'texto').text('Nuevo párrafo');
    // Agregar párrafo al final
    // contenedor.append(nuevoparrafo);
    // Agregar párrafo al inicio
    // contenedor.prepend(nuevoparrafo);

    // Agregar antes de un elemento
    // segundoParrafo.before(nuevoparrafo);
    // Agregar despues de un elemento
    segundoParrafo.after(nuevoparrafo);

  });

});

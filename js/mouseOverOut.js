// alert('Hola');

var primerParrafo = document.getElementsByClassName('texto')[0];

// Evento mouseOver

function addParrafo() {
  var parrafo = document.createElement('p');
  var textoNuevo = document.createTextNode('Hola, soy un texto nuevo');

  parrafo.appendChild(textoNuevo);
  parrafo.setAttribute('class', 'texto');
  parrafo.id = 'parrafoAgregado';

  var contenedor = document.getElementsByClassName('contenedor')[0];

  contenedor.appendChild(parrafo);
}



primerParrafo.addEventListener('mouseover', addParrafo);

// Evento mouseOut

primerParrafo.addEventListener('mouseout', function(){

  var parrafoAgregado = document.getElementById('parrafoAgregado');

  var contenedor = document.getElementsByClassName('contenedor')[0];

  contenedor.removeChild(parrafoAgregado);

})

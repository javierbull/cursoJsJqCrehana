
// alert('alert');

var parrafo = document.createElement('p');

var textoNuevo = document.createTextNode('Hola, soy un tetxo nuevo');

parrafo.appendChild(textoNuevo);

parrafo.setAttribute('class','texto');

var contenedor = document.getElementsByClassName('contenedor')[0];

contenedor.appendChild(parrafo);

// alert('hola');

var parrafo = document.createElement('p');

var textoNuevo = document.createTextNode('Hola, soy un tetxo nuevo');

parrafo.appendChild(textoNuevo);

parrafo.setAttribute('class','texto');

var contenedor = document.getElementsByClassName('contenedor')[0];


// ------------------------------------
var parrafos = document.getElementsByClassName('texto');

// elemento padre
var padreParrafos = parrafos[0].parentNode;


//Agregar nuevo elemento antes del elemento seleccionado
padreParrafos.insertBefore(parrafo, parrafos[1]);

// alert('Hola');

  var boton = document.getElementById('boton');

  function addParrafo(){
    var parrafo = document.createElement('p');

    var textoNuevo = document.createTextNode('Hola, soy un texto nuevo');

    parrafo.appendChild(textoNuevo);

    parrafo.setAttribute('class', 'texto');

    var contenedor = document.getElementsByClassName('contenedor')[0];

    contenedor.appendChild(parrafo);
  }


// boton.addEventListener('click', addParrafo);

boton.addEventListener('dblclick', addParrafo);

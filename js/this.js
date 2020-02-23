// alert('Hola');

var parrafos = document.getElementsByClassName('texto');

function cambiarFondo(){
  this.classList.toggle('fondo-rojo');
}

for (var i = 0; i < parrafos.length; i++) {
  parrafos[i].addEventListener('click', cambiarFondo);
}

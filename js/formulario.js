// alert('holis');

var form = document.getElementById('form');
var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var verde = document.getElementById('verde');
var amarillo = document.getElementById('amarillo');
var azul = document.getElementById('azul');
var terminos = document.getElementById('terminos');

// Acceder a los inputs por name
// form.nombre

// Validando un formulario

function validar(e){
  if (nombre.value == "") {
    alert('Escribe tu nombre');
    e.preventDefault();
  }

  if (email.value == "") {
    alert('Escribe tu email');
    e.preventDefault();
  }

  if (verde.checked == false && amarillo.checked == false && azul.checked == false) {
    alert('Escoge tu color favorito');
    e.preventDefault();
  }

  if (terminos.checked == false) {
    alert('Acepta los términos y condiciones');
    e.preventDefault();
  }


}

form.addEventListener('submit', validar );

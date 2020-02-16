// alert('alerta');

// addEventListener(); = añadir Escuchador

var boton = document.getElementById('boton');

function alerta(){
  alert('Hola bb');
}

boton.addEventListener('click', alerta);

// RemoveEventListener(); = remover Escuchador

boton.removeEventListener('click', alerta);

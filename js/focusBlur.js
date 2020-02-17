// alert('Hola');
var campoNombre = document.getElementById('nombre');

campoNombre.addEventListener('focus', function(){
  campoNombre.setAttribute('placeholder', 'Tengo el foco');
} );


campoNombre.addEventListener('blur', function(){
  campoNombre.setAttribute('placeholder', 'Ya no tengo el foco');
});

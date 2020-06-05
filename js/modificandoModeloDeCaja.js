// alert('hola');
var parrafos = document.getElementsByClassName('texto');

parrafos[0].style.width = '80%';
parrafos[0].style.border = '1rem solid salmon';

var btn = document.getElementById('boton');

btn.addEventListener('click', function(){
  parrafos[0].classList.toggle('display');
});

var parrafos = document.getElementsByClassName('texto');

parrafos[0].style.width = '80%';

parrafos[0].style.padding = '0px';

parrafos[0].style.border = 'solid 1rem tomato'

var boton = document.getElementById('boton');

boton.addEventListener('click', function(){
  parrafos[0].style.width = '100%';
  parrafos[0].style.padding = '1rem';
  parrafos[0].style.border = 'none';
});

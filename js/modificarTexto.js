// alert('hola');

var content = document.getElementById("contentButtons");
var btns = content.getElementsByClassName("boton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("btn-active");
  current[0].className = current[0].className.replace("btn-active", "");
  this.className += " btn-active ";
  });
}

var grande = document.getElementById('grande');
var medio = document.getElementById('medio');
var pequeño = document.getElementById('pequeño');
var mayus = document.getElementById('mayus');
var minus = document.getElementById('minus');
var caja = document.getElementsByClassName('caja');


grande.addEventListener('click', function(){
  for (var i = 0; i < caja.length; i++) {
    caja[i].style.fontSize = '24px';
  }
});

medio.addEventListener('click', function(){
  for (var i = 0; i < caja.length; i++) {
    caja[i].style.fontSize = '1rem';
  }
});

pequeño.addEventListener('click', function(){
  for (var i = 0; i < caja.length; i++) {
    caja[i].style.fontSize = '8px';
  }
});

mayus.addEventListener('click', function(){
  for (var i = 0; i < caja.length; i++) {
    caja[i].style.textTransform = 'uppercase';
  }
});

minus.addEventListener('click', function(){
  for (var i = 0; i < caja.length; i++) {
    caja[i].style.textTransform = 'lowercase';
  }
});

// alert('hola');

var left = document.getElementById('left');
var spaceAround = document.getElementById('spaceAround');
var center = document.getElementById('center');
var spaceBetween = document.getElementById('spaceBetween');
var right = document.getElementById('right');
var cajas = document.getElementById('cajas');

left.addEventListener('click', function(){
  cajas.style.justifyContent = 'flex-start';
});

right.addEventListener('click', function(){
  cajas.style.justifyContent = 'flex-end';
});

center.addEventListener('click', function(){
  cajas.style.justifyContent = 'center';
});

spaceAround.addEventListener('click', function(){
  cajas.style.justifyContent = 'space-around';
});

spaceBetween.addEventListener('click', function(){
  cajas.style.justifyContent = 'space-between';
});

var content = document.getElementById("contentButtons");
var btns = content.getElementsByClassName("boton");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("btn-active");
  current[0].className = current[0].className.replace("btn-active", "");
  this.className += " btn-active ";
  });
}

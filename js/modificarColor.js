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

var red = document.getElementById('red');
var white = document.getElementById('white');
var blue = document.getElementById('blue');
var bgBlue = document.getElementById('bg-blue');
var bgYellow = document.getElementById('bg-yellow');
var caja = document.getElementsByClassName('caja');

red.addEventListener('click', function(){
  for (var i = 0; i < caja.length; i++) {
    caja[i].style.color = 'salmon';
  }
});

white.addEventListener('click', function(){
  for (var i = 0; i < caja.length; i++) {
    caja[i].style.color = 'white';
  }
});

blue.addEventListener('click', function(){
  for (var i = 0; i < caja.length; i++) {
    caja[i].style.color = 'skyblue';
  }
});

bgBlue.addEventListener('click', function(){
  for (var i = 0; i < caja.length; i++) {
    caja[i].style.backgroundColor = 'var(--blue)';
  }
});

bgYellow.addEventListener('click', function(){
  for (var i = 0; i < caja.length; i++) {
    caja[i].style.backgroundColor = 'var(--yellow)';
  }
});

$(document).ready(function(){
  // alert('holis');


  // FUNCION OCULATAR MOSTRAR ELEMENTO ======
  function ocultarMostrar() {
    $('#segundo').toggle(300, function(){
      // alert('function oculatMostrar');
    });
  }

  // FUNCIÓN FADE ============================
  function fadeOut() {
    $('#segundo').fadeOut(500);
  }

  function fadeIn() {
    $('#segundo').fadeOut(500);
  }

  function fadeToggle(){
    $('#segundo').fadeToggle(400);
  }

  // EFECTO SLIDE =============================

  function slideUp(){
    $('#segundo').slideUp(400);
  }

  function slideToggle(){
    $('#segundo').slideToggle();
  }


  var btn = $('#boton');
  btn.click(slideToggle);

});

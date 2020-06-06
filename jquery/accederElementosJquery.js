$(document).ready(function(){
  // alert('holis');

  // SELECCIONAR ELEMENTO PADRE DE UN ELEMENTO
  $('#segundo').parent();
  // $('#segundo').parent().css('backgroundColor', 'salmon');

  // SELECCIONAR ELEMENTOS PADRE DE UN ELEMENTO
  $('#segundo').parents();
  // $('#segundo').parents().css('backgroundColor', 'yellow');

  // SELECCIONAR ELEMENTOS HIJO DE UN ELEMENTO
  $('.contenedor').children();
  // $('.contenedor').children().css('backgroundColor', 'salmon');

  // SELECCIONAR ELEMENTO HIJO ESPECIFICO
  $('.contenedor').children('#segundo');
  // $('.contenedor').children('#segundo').css('backgroundColor', 'salmon');

  // SELECCIONAR ELEMENTO DENTRO DE UN ELEMENTO NO NECESARIAMENTE HIJOS DIRECTOS
  $('body').find('.texto');
  // $('body').find('.texto').css('backgroundColor', 'salmon');

  // SELECCIONAR ELEMENTO HERMANO DE UN ELEMENTOS
  $('#segundo').siblings();
  // $('#segundo').siblings().css('backgroundColor', 'salmon');

  // SELECCIONAR ELEMENTO ANTERIOR A UN ELEMENTO
  $('#segundo').prev();
  // $('#segundo').prev().css('backgroundColor', 'salmon');

  // SELECCIONAR ELEMENTO SIGUIENTE
  $('#segundo').next();
  // $('#segundo').next().css('backgroundColor', 'peru');
  // $('#segundo').nextAll().css('backgroundColor', 'peru');


});

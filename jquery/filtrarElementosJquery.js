$(document).ready(function(){
  // alert('Holis');

  // SELECCIONANDO EL PRIMER ELEMENTO
  $('.texto').first();
  // $('.texto').first().css('color', 'orange');

  // SELECCIONANDO EL ÚLTIMO ELEMENTO
  $('.texto').last();
  // $('.texto').last().css('backgroundColor', 'orange');

  // SELECCIONAR ELEMENTO POR ÍNDICE
    $('.texto').eq(0);
    // $('.texto').eq(0).css('backgroundColor', 'salmon');

  // SELECCIONAR ELEMENTO SEGÚN PARÁMETRO
  $('.texto').filter('#segundo');
  // $('.texto').filter('#segundo').css('backgroundColor', 'gold');

  // SELECCIONAR TODOS LOS ELEMENTOS MENOS EL INDICADO
  $('.texto').not('#segundo');
  // $('.texto').not('#segundo').css('backgroundColor', 'orange');

  

});

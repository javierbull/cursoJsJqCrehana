
// SCOPE

// El Scope es el alcance de una variable, que puede ser local o global

// ==============================================================

// Variable Global : Es la que se declara fuera de una función


// var mensaje = 'Hola';
//
// function hola(){
//   alert(mensaje);
// }
//
//
// hola();

// ==========================================================

// ============================================================
// Variable Local: Es la que se declara dentro de una función

// function despedida(){
//
//   var  despedida = 'hasta luego';
//   alert(despedida);
//
// }
//
// despedida();

// Funcion Anidada

function despedida(){

  var despedida = 'Hasta luego';

  function adios(){
    alert(despedida);
  }

  adios();
}

despedida();
// ==========================================================

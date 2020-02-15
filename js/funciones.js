// DECLRAR LA FUNCION

// var n1 = 10;
// var n2 = 2;
//
// function sumar(){
//   var resultado = n1 + n2;
//   if (resultado > 15) {
//     document.write('El resultado es:' + resultado);
//   } else {
//     alert('El resultado es: ' + resultado);
//   }
// }

// EJECUTAR LA FUNCION

// sumar();

// ----------------------------------

// DECLRAR LA FUNCION CON PARAMETROS

function sumar(valor1, valor2){
  var resultado = valor1 + valor2;
  if (resultado > 10) {
    document.write('el resultado es mayor a 10:' + resultado);
  } else {
    alert('El resultado es menor o igual a 10: ' + resultado);
  }
}

// EJECUTAR LA FUNCION CON PARAMETROS

sumar(5,6);

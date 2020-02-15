// alert('Hola');

// Ciclo For: se hace para crear un bucle, es decir una o variables
// acciones que se repiten una y otra vez


// Sintaxis

// for (variable inicio; i < longitud o condición; incremento) {
//   información a repetir
// };

// for (var i = 0; i < 11; i++) {
//
//   document.write(i);
// }


// var semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Sábado', 'Domingo'];

// for (var i = 0; i < semana.length; i++) {
//   document.write(semana[i] + '<br>');
// }

// Para recorrer un arreglo
// for(dia in semana){
//   document.write(semana[dia] + '<br>');
// }

var colores = ['rojo', 'amarillo', 'azul'];

for (color in colores){
  document.write(colores[color] + '<br>');
}

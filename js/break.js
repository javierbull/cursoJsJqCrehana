// alert('break');

var semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado', 'domingo'];

for (dia in semana) {
  document.write(semana[dia] + '<br>');

  if (semana[dia] == 'viernes') {
    break;
  }
}

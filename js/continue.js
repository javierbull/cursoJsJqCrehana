var semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado', 'domingo'];

for (dia in semana) {

  if (semana[dia] == 'jueves') {
    continue;
  }
  document.write(semana[dia] + '<br>');
}

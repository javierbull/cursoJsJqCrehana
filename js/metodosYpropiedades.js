// alert('Hola');
//
// Un método es una acciónote
// Una propiedad es una característica

// Describiendo a una persona:
//
// el metodo sería caminar
// y la propiedad seria edad


// -------------------------------------------

// METODOS Y PROPIEDADES PARA CADENAS DE TEXTO

var texto = 'Esto es un texto';

// length : devuelve el numero de caracteres
var numerocaracteres = texto.length;

// toUpperCase() : transforma el texto en mayusculas
var mayusculas = texto.toUpperCase();

// toLowerCase() : transforma el texto en minusculas
var minusculas = texto.toLowerCase();

// Extrae desde un punto a otro caracteres
var extraer = texto.substring(11,16);

// replace(valor1, valor2) reemplaza un valor
var reemplaza = texto.replace("texto", "párrafo");

// indexOf('o') buscara el primer caracter que coincida e indicará la posición
var indexOf = texto.indexOf('e');

// LastIndexOf('o') buscara el ultimo caracter que coincida e indicará la posición
var lastIndexOf = texto.lastIndexOf('o');

// convierte la cadena de texto en un arreglo
var split = texto.split(' ');

// -------------------------------------------

// METODOS Y PROPIEDADES PARA arreglos
var familia = ['Jorge', 'Elizabeth', 'Katherine', 'Javier'];
var familia2 = ['Emilio', 'Guillermo', 'Juana'];

// length : devuelve la cantidad de elementos del arreglo
var cantidadElementos = familia.length;

// concat : Permite unir arreglos
var familiaCompleta = familia.concat(familia2);

// join : muestra todos los elementos de un arreglo en una sola cadena de texto
var familiaJoin = familia.join();

// pop : elimina el último elemento del arreglo
// var familiaPop = familia.pop();

// Push : agrega un elemenoto al final del arreglo
// var familia3 = familia2.push('Alex');

// shift : elimina el primer elemento del arreglo
// familia.shift();

// Unshift : agrega un elemento al principio del arreglo
var familiaUnshift = familia.unshift('Gato');

// reverse : ordena el arreglo de manera inversa
var familiaReverese = familia.reverse();

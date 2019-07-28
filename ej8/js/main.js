'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log('Llamo a una variable global, aun no se ha modificado: ', secretLetter); // devuelve "y"
console.log('He modificado la variable global con una función: ', mySecretLetter()); // devuelve "x"


console.log('He modificado la variable global con una función: ', mySecretLetter()); // devuelve "x"
console.log('La variable global ha cambiado de valor dentro de la función, ahora ya tiene un nuevo valor: ', secretLetter); // devuelve "x"

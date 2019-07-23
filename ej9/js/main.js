'use strict';


const valorA = parseFloat(prompt('Introduce el primer valor a multiplicar'));

const valorB = parseFloat(prompt('Introduce el segundo valor a multiplicar'));

const resultado = document.querySelector('.resultado');

function multip(a, b){
    return a * b;
}



const operation = multip(valorA, valorB);

resultado.innerHTML = `El resultado de tu operación es ${operation}`;

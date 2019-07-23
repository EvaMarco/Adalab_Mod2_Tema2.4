'use strict';


const valorA = parseFloat(prompt('Introduce el primer valor para hacer la media'));

const valorB = parseFloat(prompt('Introduce el segundo valor para hacer la media'));

const valorC = parseFloat(prompt('Introduce el segundo valor para hacer la media'));

const valorD = parseFloat(prompt('Introduce el segundo valor para hacer la media'));

const resultado = document.querySelector('.resultado');

function media(a, b, c, d){
    return (a + b + c + d) / 4;
}



const operation = media(valorA, valorB, valorC, valorD);

resultado.innerHTML = `El resultado de tu operación es ${operation}`;

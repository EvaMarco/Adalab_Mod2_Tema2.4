'use strict';


const valorA = parseFloat(prompt('Introduce un número y te diré si es par o impar'));


const resultado = document.querySelector('.resultado');

function even(a){
    const compr = a % 2 ;
    
    if (compr === 0){
        const result = 'El número es par';
        return result;
    }
    else{
        const result = 'El número es impar';
        return result;
    }
    
}


const operation = even(valorA);

resultado.innerHTML = operation;

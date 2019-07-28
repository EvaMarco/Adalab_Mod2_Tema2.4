'use strict';

const valorA = document.querySelector('.num1');
const resultado = document.querySelector('.resultado');

function even(event){
    const a = parseFloat(valorA.value);
    const compr = a % 2 ;    
    if (compr === 0){
        const operation = 'El número es par';
        resultado.innerHTML = operation;
    }
    else{
        const operation = 'El número es impar';
        resultado.innerHTML = operation;
    }   
}

valorA.addEventListener('change', even);
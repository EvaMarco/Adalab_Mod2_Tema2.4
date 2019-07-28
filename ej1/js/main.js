'use strict';

const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const resultado = document.querySelector('.resultado');

function calculate() {
    const val1 = parseFloat(num1.value); 
    const val2 = parseFloat(num2.value);
    const operation = val1 * val2;
    resultado.innerHTML = `El resultado de tu operación es ${operation}`;
};

num2.addEventListener('change', calculate);
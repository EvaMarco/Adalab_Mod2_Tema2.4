'use strict';
'use strict';

const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const resultado = document.querySelector('.resultado');

function calculate() {
    const val1 = parseFloat(num1.value); 
    const val2 = parseFloat(num2.value);
    const val3 = parseFloat(num3.value);
    const val4 = parseFloat(num4.value);
    const operation = (val1 + val2 + val3 + val4)/ 4;
    resultado.innerHTML = `El resultado de tu operación es ${operation}`;
};

num4.addEventListener('change', calculate);

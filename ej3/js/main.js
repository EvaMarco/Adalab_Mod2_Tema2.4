'use strict';

const num1 = document.querySelector('.num1');
const iva = 0.21;
const resultado = document.querySelector('.resultado');

function price(event){
    const a = parseFloat(event.currentTarget.value);
    const ivaPrice = a + (a*iva);
    const operation = `El precio introducido es ${a} €, el iva aplicado es de ${iva*100}%, el precio con iva es ${ivaPrice} €.`;
    resultado.innerHTML = operation;
}

num1.addEventListener('change', price);
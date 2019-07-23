'use strict';


const valorA = parseFloat(prompt('Introduce el precio'));
const iva = 0.21;

const resultado = document.querySelector('.resultado');

function price(a){
    const ivaPrice = a + (a*iva);
    const text = `El precio introducido es ${a} €, el iva aplicado es de ${iva*100}%, el precio con iva es ${ivaPrice} €.`;
    return text
}



const operation = price(valorA);

resultado.innerHTML = operation;

console.log(operation);

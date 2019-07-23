'use strict';


const valorA = (prompt('Introduce el elemento a seleccionar entre: .header__title, .title, .text, .text2 o .subtitle'));



function getEl(a){

    const element = document.querySelector(a);
    return element;
    
}

const operation = getEl(valorA);

operation.classList.add('resultado');
operation.innerHTML = `El elemento ha sido seleccionado  🦊️`;

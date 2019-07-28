'use strict';

const input = document.querySelector('.input');

function getEl(event){
    const element = event.currentTarget.value;
    const choose = document.querySelector(element);
    choose.classList.add('resultado');
    choose.innerHTML = `El elemento ha sido seleccionado  🦊️`; 
}

input.addEventListener('change', getEl);
'use strict';

const input = document.querySelector('.input');
const aviso = document.querySelector('.title');

function getEl(event){
    const element = event.currentTarget.value;

    if(element === ''){
        console.error(`No existe ningún elemento con clase, id o tag llamado ${element}`);
        aviso.innerHTML = `No existe ningún elemento con clase, id o tag vacio` 
    }
    else{
        const choose = document.querySelector(element);
        if(choose === null){
            console.error(`No existe ningún elemento con clase, id o tag llamado ${element}`); 
            aviso.innerHTML = `No existe ningún elemento con clase, id o tag llamado ${element}`;          
        }
        else if(element === undefined){
            aviso.classList.add('resultado');
            aviso.innerHTML = `No ha sido elegido ningún elemento, mira la consola`}
        else{
            choose.classList.add('resultado');
            choose.innerHTML = `El elemento ha sido seleccionado  🦊️`; 
        }
    } 
}

input.addEventListener('change', getEl);

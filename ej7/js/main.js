'use strict';

const input = document.querySelector('.input');
const text = document.querySelector('.text');
const resultado = document.querySelector('.resultado');

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
            const a = parseInt(choose.innerHTML);
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
    } 
}

input.addEventListener('change', getEl);
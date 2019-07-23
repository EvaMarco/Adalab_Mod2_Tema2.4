'use strict';


const valorA = (prompt('Introduce el elemento a seleccionar'));

function getEl(a){
    const realElement = a;
    if (realElement === ''){
        return console.error(`No existe ningún elemento con clase, id o tag llamado {realElement}`);
    }
    else{
        const element2 = document.querySelector(realElement);
        if(element2 === null){
            return console.error(`No existe ningún elemento con clase, id o tag llamado {realElement}`);           
        }
        else{return element2;};
    }
    
}

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

const operation = getEl(valorA);


if (operation === undefined){
    const aviso = document.querySelector('.title');
    aviso.classList.add('resultado');
    aviso.innerHTML = `No ha sido elegido ningún elemento, mira la consola`;

}else{

    // operation.classList.add('resultado');
    // operation.innerHTML = `El elemento ha sido seleccionado`;
    const num = operation.textContent;
     let num2 = even(num)

    const answer = document.querySelector('.resultado');
    answer.innerHTML = num2;
}





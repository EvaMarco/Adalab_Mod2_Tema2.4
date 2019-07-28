'use strict';

const input1 = document.querySelector('.num1');
const input2 = document.querySelector('.num2');
const input3 = document.querySelector('.num3');
const input4 = document.querySelector('.num4');
const resultado = document.querySelector('.resultado');
const box = document.querySelector('.box');

function calculate(event){
    const widthInput = parseInt(input2.value);
    const padding = parseInt(input3.value);
    const border = parseInt(input4.value);

    if(input1.value === '0'){
        const widthTotal = widthInput; 
        const content = widthInput - border*2 - padding*2;
        resultado.innerHTML = `El ancho del contenido es: ${content}px y el ancho total de la caja es: ${widthTotal}px.`;
        box.classList.add('border');
        box.style.width = `${widthTotal}px`;
        box.style.padding = `${padding}px`;
        box.style.borderWidth =  `${border}px`;
    }
    else if(input1.value === '1'){
        const widthTotal = widthInput + padding*2 + border*2;
        const content = widthInput ; 
        resultado.innerHTML = `El ancho del contenido es: ${content}px y el ancho total de la caja es: ${widthTotal}px.`;
        box.classList.add('content');
        box.style.width = `${widthInput}px`;
        box.style.padding = `${padding}px`;
        box.style.borderWidth =  `${border}px`;
    }
    else{
        resultado.innerHTML = `El dato introducido en el primer formulario no es correcto`;
    }
}

input4.addEventListener('change', calculate);


// Calculador de modelo de caja
// Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: border-box y content-box. Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta: El ancho del contenido es: 30px y el ancho total de la caja es: 34px.
// La función tendrá 4 parámetros:
// el primero será un booleano para especificar si es border-box o no.
// 0 border Box --> width = border + padding + content; ancho total = width; 
// 1 content box --> width = content; ancho total = width + padding + border;
// el segundo será un número con el width de la caja.
// el tercero será un número con el padding.
// el cuarto será un número con el border-size.
// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.
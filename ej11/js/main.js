'use strict';


const collapsable = document.querySelector('.container');
const collapsableClick = document.querySelector('.container__click');
const comprob = collapsable.classList.contains('container--open');
//const collapsableClick = popUp.querySelector('.container__click');
function openCollapsable(){
    if(comprob === true){
        collapsable.classList.remove('container--open');
    } else{
        collapsable.classList.add('container--open');
    }
};

collapsableClick.addEventListener('click', openCollapsable);


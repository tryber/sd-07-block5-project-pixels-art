'use strict'

paintIt();
setClass();
clearAll();
selectedFunc();

function clearAll() {
    let clear = document.querySelector('#clear-board');
    let selected = document.querySelectorAll('.pixel');
    clear.addEventListener('click', function () {
        for (let index = 0; index < selected.length; index += 1) {
            selected[index].style.backgroundColor = 'white';
        }
    });
}

function setClass() {
    let div = document.querySelector('#black');
    div.classList.add('selected'); // aqui a palleta preta ja inicia com a "selected"
}

function selectedFunc() {
    let color = document.querySelectorAll('.color');
    color.forEach(item => { // para cada elemento
        item.addEventListener('click', function (event) {
            event.target.classList.add('selected'); //verifica qual elemento recebeu a ação
            color.forEach(item => { // efetuo loop para identificar se 
                if (item !== event.target) {
                    item.classList.remove('selected');
                }
            });
        });
    });
}

function paintIt() {
    let selected = document.querySelectorAll('.pixel');
    for (let item = 0; item < selected.length; item += 1) {
        selected[item].addEventListener('click', function () {
            let atributoDiv = document.querySelector('.selected').getAttribute('class');
            if (atributoDiv === 'color selected') {
                selected[item].style.backgroundColor = document.querySelector('.selected').getAttribute('id');
            }
        });
    }
}
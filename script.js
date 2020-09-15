const cores = document.querySelectorAll('.color');
let selectedColor = document.querySelector('.selected');
let background = getComputedStyle(selectedColor).backgroundColor;// porque aqui tem que separar em dois?
for (let i=0; i<cores.length; i += 1) {
cores[i].addEventListener('click', pegaCor);
function pegaCor() {
    selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    cores[i].classList.add('selected');
    selectedColor = document.querySelector('.selected');
    background = getComputedStyle(selectedColor).backgroundColor;
}
}

const caixas = document.querySelectorAll('.pixel');

for (let i=0; i<caixas.length; i += 1) {
    caixas[i].addEventListener('click', trocaCor);
function trocaCor() {
    caixas[i].style.backgroundColor = background;// don't make function with a loop, mas como eu faço pra ele ver o i?
}
}

function cleanBoard() {
    for (let i=0; i<caixas.length; i += 1) {
        caixas[i].style.backgroundColor = document.querySelector('#pixel-board').style.backgroundColor;
        // porque aqui não teve que separar?
        // porque ele não aceita: caixas[i].style.backgroundColor = white;?
    }
}

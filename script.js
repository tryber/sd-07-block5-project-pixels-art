
let limpar = document.querySelector("#clear-board");
let board = document.querySelector("#pixel-board");
let tamanhoBoard = document.querySelector('#board-size');
let btnVqv = document.querySelector('#generate-board');
let paletBlack = document.querySelector('#color-black');
let paletRed = document.querySelector('#color-red');
let paletGreen = document.querySelector('#color-green');
let paletBlue = document.querySelector('#color-blue');

let select = 'black';

let tamanhoPixel = 40;

criaInicial(tamanhoPixel);

function criaInicial(tamanhoPixel){
    let pixelInicial = 25;
    let criaPixel = [];

    for(let index = 0; index < pixelInicial; index++ ){
        criaPixel[index] = document.createElement('div');
        criaPixel[index].classList.add('pixel');
        criaPixel[index].style.width = tamanhoPixel + 'px';
        criaPixel[index].style.height = tamanhoPixel + 'px';
        board.style.maxWidth = (tamanhoPixel * 5 + tamanhoPixel)+ 'px';
        board.style.maxHeight = 50 + 'px';
        console.log(tamanhoPixel);
        board.appendChild(criaPixel[index]);
        criaPixel[0].id = 'primeiroPixel';
    }
    trocarCor();
}

function criaBoard(){
    if(tamanhoBoard.value != "" ){
        board.innerHTML = "";
        criaInicial(tamanhoBoard.value * tamanhoBoard.value);
    }
    else{
        alert('Board inválido!');
    };
};


function limparBoard(){
    let pixelBoard = document.querySelectorAll(".pixel");
    for(let index = 0; index < pixelBoard.length ; index ++){
        pixelBoard[index].style.backgroundColor = "white";
    }
}


function trocarCor(){
    let pixelBoard = document.querySelectorAll(".pixel");
    for(let index = 0; index < pixelBoard.length ; index ++){
        pixelBoard[index].addEventListener("click", function() {
			pixelBoard[index].style.backgroundColor = select;
            });
    }  
}

paletRed.addEventListener('click',function(){
    let pixelBoard = document.querySelectorAll(".pixel");
    select = 'red';
    paletBlack.classList.remove('selected');
    paletBlue.classList.remove('selected');
    paletGreen.classList.remove('selected');
    paletRed.classList.add('selected');
    for(let index = 0; index < pixelBoard.length ; index ++){
        pixelBoard[index].addEventListener("click", function() {
			pixelBoard[index].style.backgroundColor = select;
            });
    }; 
});


paletGreen.addEventListener('click',function(){
    let pixelBoard = document.querySelectorAll(".pixel");
    select = 'green';
    paletBlack.classList.remove('selected');
    paletBlue.classList.remove('selected');
    paletRed.classList.remove('selected');
    paletGreen.classList.add('selected');
    for(let index = 0; index < pixelBoard.length ; index ++){
        pixelBoard[index].addEventListener("click", function() {
			pixelBoard[index].style.backgroundColor = select;
            });
    }; 
});

paletBlue.addEventListener('click',function(){
    let pixelBoard = document.querySelectorAll(".pixel");
    select = 'blue';
    paletBlack.classList.remove('selected');
    paletBlue.classList.add('selected');
    paletRed.classList.remove('selected');
    paletGreen.classList.remove('selected');
    for(let index = 0; index < pixelBoard.length ; index ++){
        pixelBoard[index].addEventListener("click", function() {
			pixelBoard[index].style.backgroundColor = select;
            });
    }; 
});


paletBlack.addEventListener('click',function(){
    let pixelBoard = document.querySelectorAll(".pixel");
    select = 'black';
    paletBlack.classList.add('selected');
    paletBlue.classList.remove('selected');
    paletRed.classList.remove('selected');
    paletGreen.classList.remove('selected');    
    for(let index = 0; index < pixelBoard.length ; index ++){
        pixelBoard[index].addEventListener("click", function() {
			pixelBoard[index].style.backgroundColor = select;
            });
    }; 
});

trocarCor();
btnVqv.addEventListener('click', criaBoard);
limpar.addEventListener('click', limparBoard);
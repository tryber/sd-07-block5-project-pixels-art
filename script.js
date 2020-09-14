
let selected = document.querySelector('.selected');
const corRed = document.querySelector('.colorRed');
const corGreen = document.querySelector('.colorGreen');
const corBlue = document.querySelector('.colorBlue');
const limpar = document.querySelector("#clear-board")
let caixaGeral = []

window.onload = inicio;
function inicio(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i] = document.querySelector("#p" + [i]);
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'black';
    })   
    caixaGeral[i].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;

    
    }
   
      
}

function preto(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'black';
    })   
    
    }
}

function vermelho(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'red';
    })   
       
    }
}

function verde(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'green';
    })   
       
    }
}

function azul(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'blue';
    })   
       
    }
}

function limpeza(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i].style.backgroundColor = 'white';       
    }
}

selected.addEventListener('click',preto)
corRed.addEventListener('click',vermelho)
corGreen.addEventListener('click',verde)
corBlue.addEventListener('click',azul)
limpar.addEventListener('click',limpeza)









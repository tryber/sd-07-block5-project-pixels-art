let divtotal=document.getElementById("pixel-board");
let nLinha = 5;
let pixel =[];
let linha = [];
let k=0;
/* criação da div em linhas*/

function createGrid(nLinha){ 

    for(let i=0; i < nLinha; i += 1){

        linha[i]= document.createElement("div");
        linha[i].className = "linha";
        divtotal.appendChild(linha[i]);
        for(let j=0; j < nLinha; j += 1){

                pixel[k]= document.createElement("div");
                pixel[k].className="pixel";
                linha[i].appendChild(pixel[k]);
                k=k+1;
            }
    }
}

createGrid(nLinha);
function selectColor(){
let color =document.querySelectorAll(".color");

    for (let i = 0; i < color.length; i += 1) {
        
        color[i].addEventListener("click", function() {
            
            let selected = document.querySelector(".selected");
            selected.classList.remove('selected');
            color[i].classList.add('selected');

        }); 
    }
}
selectColor();
function changeColor(){
    for(let i=0; i < pixel.length; i += 1){
        pixel[i].addEventListener("click", function(){
            let selected=document.querySelector(".selected");
            console.log(selected);
            pixel[i].style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
                

        });
    }
}
changeColor();

function clear(){
    let limpapx=document.getElementById("clear-board")

    limpapx.addEventListener("click", function(){ 
        
        for(let i=0; i < pixel.length; i += 1){

            pixel[i].style.backgroundColor= "white";
        }


    });
}
clear();

let btn=document.querySelector("#generate-board")
    btn.addEventListener("click", function() {
    let numberImput = document.querySelector("#board-size").value;
    if(numberImput === null || numberImput === "" ){
        alert("Board inválido!")
    }

    else if(numberImput < 5){

        numberImput =5;

    }else if(numberImput >50){
        numberImput =50;

    }


    deleteGrid();
    createGrid(numberImput);
    clear();
    selectColor();
    changeColor();
});

function deleteGrid(){
    let linhaBoard=document.querySelectorAll(".linha");
    for (let i = 0; i < linhaBoard.length; i += 1) {
        linhaBoard[i].remove();
    }
}
let numberLines = 5;
let pixelBoard = document.querySelector("#pixel-board");

let pixel = [];
let linha = [];
let k=0;
for(let index =0; index < numberLines; index += 1){
    linha[index] = document.createElement("div");
    linha[index].className = "linha";
    pixelBoard.appendChild(linha[index]);
    
    for(let j=0; j < numberLines; j += 1){
        pixel[k] = document.createElement("div");
        pixel[k].className = "pixel";
        linha[index].appendChild(pixel[k]);
        k = k + 1;
    }
}

let color = document.querySelectorAll(".color");
//adicionando escuta para cada cor
for(let i=0; i < color.length; i+=1){
    color[i].addEventListener("click" , function(){
        let selected = document.querySelector(".selected");
        selected.classList.remove("selected");
        color[i].classList.add("selected");
    });
}

pixelBoard.addEventListener("click",function(event){
    let selected = document.querySelector(".selected");
    event.target.style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
});

let buttonClear = document.getElementById("clear-board");
buttonClear.addEventListener("click",function(){
    for(let i=0; i < pixel.length; i += 1){
        pixel[i].style.backgroundColor = "white";
    }
});

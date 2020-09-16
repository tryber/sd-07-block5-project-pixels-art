/* window.onload = function (){
    let colorBlack = document.querySelector(".black");
    let color = window.getComputedStyle(colorBlack).backgroundColor;
  //  console.log(color);
}*/

let numberLines = 5;
let pixelBoard = document.querySelector("#pixel-board");

let lines = [];
// pixel está armazenando todos os quadradinhos pixels, e conseguimos acessar elas pelo índice do array
let pixel = [];
let k = 0;
for(index = 0; index < numberLines; index += 1){
    lines[index] = document.createElement("div");
    lines[index].className = "linha";
    pixelBoard.appendChild(lines[index]);
    
    for(let j = 0; j < numberLines; j += 1){
        pixel[k] = document.createElement("div");
        pixel[k].className = "pixel";
        lines[index].appendChild(pixel[k]);
        k = k + 1;   
    }
}
let body = document.querySelector("body");
console.log(body)
let color = document.querySelectorAll(".color");

for(let index = 0; index < color.length; index += 1){
    color[index].addEventListener("click", function(){
        let selected = document.querySelector(".selected");
        console.log(selected)
        selected.classList.remove("selected");
        // poderia ser passado como parâmetro da função um "event" e na linha abaixo: "event.target.className += " selected"""
        color[index].classList.add("selected");
    })
}

for (let index = 0; index < pixel.length; index += 1){
    pixel[index].addEventListener("click", function(){
        let selected = document.querySelector(".selected");
        console.log(selected);
        pixel[index].style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
    });
}

let buttonLimpar = document.querySelector("#clear-board");
buttonLimpar.addEventListener("click", function(){
    for(let index = 0; index < pixel.length; index += 1){
        pixel[index].style.backgroundColor = "white";
    };
});
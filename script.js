let numberLines = 5;
let pixelBoard = document.getElementById("pixel-board");

let pixel = [];
let linha = [];

let k = 0
for (let i = 0; i < numberLines; i += 1) {
    linha[i] = document.createElement("div");
    linha[i].className = "linha"
    pixelBoard.appendChild(linha[i]);
    
    for (let j = 0; j < numberLines; j += 1) {
        pixel[k] = document.createElement("div")
        pixel[k].className = "pixel"
        linha[i].appendChild(pixel[k])
        k = k + 1;
    }

}

let color = document.querySelectorAll(".color");
    //usar o indexOf é um método de busca dentro do array


for (let i = 0; i < color.length; i +=1) {
    color[i].addEventListener("click", function (event) {
    // remover select
    //acrescentrar o select na cor certa
    //.REMOVE
    let selected = document.querySelector(".selected")
    selected.classList.remove('selected');
    // color[i].classList.add("selected");
    //target
    event.target.className += " selected"
    
    });
}

for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener("click", function(){
    //conferir a cor
    // colocar a cor preta
    //trocar a cor do pixel
    let selected = document.querySelector('.selected')
    pixel[i].style.backgroundColor = window.getComputedStyle(selected).backgroundColor
    //console.log(window.getComputedStyle(selected).backgroundColor)
    })
   
}
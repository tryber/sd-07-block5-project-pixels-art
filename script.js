let numberLines = 5;
let pixelBoard = document.getElementById("pixel-board");

let pixel = [];
let linha = [];

let k = 0
for (let i = 0; i < numberLines; i +=1){
    linha[i] = document.createElement("div");
    linha[i].className = "linha"
    pixelBoard.appendChild(linha[i]);

    for(let j = 0; j < numberLines; j += 1 ){
      pixel[k] = document.createElement("div");
      pixel[k].className = "pixel"
      linha[i].appendChild(pixel[k])
      k = k + 1;
    }
}


let color = document.querySelectorAll(".color");
for (let i = 0; i < color.length; i += 1){
    color[i].addEventListener("click", function(event) {
        let selected = document.querySelector(".selected")
        selected.classList.remove('selected');
        event.target.className += "selected"
    })
}



for(let i = 0; i < pixel.length; i += 1){
    pixel[i].addEventListener("click", function(){
        let selected = document.querySelector(".selected")

        pixel[i].style.backgroundColor = window.getComputedStyle(selected).backgroundColor
        
    })
}


let buttonClear = document.getElementById("clear-board");

buttonClear.addEventListener("click", function(){
    for(let i = 0; i < pixel.length; i += 1){
        pixel[i].style.backgroundColor = "white";
    }
})
let numberLines = 5; // para dar como alternativa editar o numero de linhas nos requisitos bonus
let pixelBoard = document.getElementById("pixel-board");

let pixel = [];
let linha = [];

let k = 0; // pra ir do 0 até o 24
for (let index = 0; index < numberLines; index += 1) {
    linha[index] = document.createElement("div"); // document.createElement("div").className = "linha"
    linha[index].className = "linha"; // ^ forma alternativa
    pixelBoard.appendChild(linha[index]);

    for (let j = 0; j < numberLines; j += 1) {
        pixel[k] = document.createElement("div");
        pixel[k].className = "pixel";
        linha[index].appendChild(pixel[k]);
        k = k + 1;
    }
}

let color = document.querySelectorAll(".color");

for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener("click", function(event) {
        let selected = document.querySelector(".selected");
        // remover o select
        selected.classList.remove("selected");

        // acrescentar o select na cor certa
        //color[index].classList.add("selected");
        /* com o event.target */ event.target.className += " selected";
    })
}

pixelBoard.addEventListener("click", function(event) {
    let selected = document.querySelector(".selected");
    event.target.style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
})

// Refatoração acima ^
// for (let index = 0; index < pixel.length; index += 1) {
//     pixel[index].addEventListener("click", function () {
//         // reconhecer a cor selecionada
//         let selected = document.querySelector(".selected")
        
//         // troca da cor de fundo 
//         pixel[index].style.backgroundColor = window.getComputedStyle(selected).backgroundColor; // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
        
//     })
// }

let buttonClear = document.getElementById("clear-board");

buttonClear.addEventListener("click", function () {
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = "white";
    }
    
})


// pesquisar sobre o uso do indexOf, método de busca dentro do array

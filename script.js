let numberLines = 5;
let pixelBoard = document.getElementById("pixel-board");
//pegando a div vazia que servirá de container para as os pixels.
let pixel = [];
let linha = [];

let k = 0;
for (let i = 0; i < numberLines; i++) {
    linha[i] = document.createElement("div");
    linha[i].className = "linha";
    pixelBoard.appendChild(linha[i]);
    //para cada numberLines (=5), cria-se uma div com a classe 'linha',
    // e esta vira um elemento filho da div criada .

    for (let j = 0; j < numberLines; j++) {
        pixel[k] = document.createElement("div");
        pixel[k].className = "pixel";
        linha[i].appendChild(pixel[k]);
        k += 1;
        //para cada 'linha' criada, cria-se 5 divs com classe pixel,
        // e esta vira um elemento filho da linha [i]
    }
}

let color = document.querySelectorAll(".color");
//retorna um array com as 4 divs da paleta

for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", function(event) {
        //para cada uma delas se adiciona um escutar de eventos ao clique com a seguinte função:
        let selected = document.querySelector(".selected");
        //criando a variavel com a primeira div (que já está carregada com a classe selected.)
        selected.classList.remove("selected");
        color[i].classList.add("selected");
        //remove o selected e o adiciona na div clicada (color[i])
    });
}

for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener("click", function() {
        //cada pixel recebe um escutador de eventos ao clique com a seguinte função:
        let selected = document.querySelector(".selected");
        pixel[i].style.backgroundColor = window.getComputedStyle(
            selected
        ).backgroundColor;
        //cada pixel tem seu backgroundColor modificado para o style computado na div selecionada da paleta.
    });
}

let buttonClear = document.getElementById("clear-board");
//captura o elemento <buton com id clear-board>

buttonClear.addEventListener("click", function() {
    //adiciona um escutador de eventos ao click do button clear-board
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = "white";
    } //pra cada elemento pixel, adiciona um background branco.
});
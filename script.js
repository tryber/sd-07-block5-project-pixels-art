const quadro = document.getElementById("pixel-board");
const pixels = document.querySelectorAll(".pixel");
const botaoTamanhoQuadro = document.getElementById("generate-board");
const tamanhoPersonalizadoQuadro = document.getElementById("board-size");
const botaoLimpar = document.getElementById("clear-board");
const preto = document.getElementById("preto");
const cor1 = document.getElementById("cor1");
const cor2 = document.getElementById("cor2");
const cor3 = document.getElementById("cor3");

// Gerando o quadro
let tamanhoQuadro = 5;
criarMatriz(tamanhoQuadro);
function criarMatriz(n) {
    quadro.innerHTML = '';
    for (let linha = 0; linha < n; linha +=1) {
        const pixelLinha = document.createElement('div');
        quadro.appendChild(pixelLinha);
        for (let coluna = 0 ; coluna < n; coluna +=1) {
            const pixelColuna = document.createElement('div');
            pixelLinha.appendChild(pixelColuna);
            pixelColuna.className = 'pixel';
        // Colorindo os pixels
            pixelColuna.addEventListener('click', function() {
                let colorirCom = window.getComputedStyle(corSelecionada, null).getPropertyValue("background-color");
                pixelColuna.style.backgroundColor = colorirCom;
            });
        }
    }
}

// Gerando Quadro Personalizado
let tamanho;
botaoTamanhoQuadro.addEventListener('click', function(){
    if (tamanhoPersonalizadoQuadro.value !== null ){
            tamanho = tamanhoPersonalizadoQuadro.value;
        if (tamanho < 5){
            tamanho = 5;
        };
        if (tamanho > 50){
            tamanho = 50;
        };
        criarMatriz(tamanho);
    };
    if (tamanhoPersonalizadoQuadro.value == ""){
        alert ("Board inválido!");
    };
    return tamanho;
});

// Gerando cores aleatóriamente
let cores = [];
for (let index = 0; index < 3; index +=1){
    cores[index] = getRandomColor();
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = "#";
    while (color == "#" || color == "#FFFFFF" || color == "#000000" || color == cores[0] || color == cores[1]) {
        color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    }
    return color;
}

// Mostrando a paleta de cores
cor1.style.backgroundColor = cores[0];
cor2.style.backgroundColor = cores[1];
cor3.style.backgroundColor = cores[2];

// Definindo a cor selecionada
let corSelecionada = preto;
preto.classList.add("selected");
preto.addEventListener("click", function () {
    corSelecionada.classList.remove("selected");
    corSelecionada = preto;
    preto.classList.add("selected");
});
cor1.addEventListener("click", function () {
    corSelecionada.classList.remove("selected");
    corSelecionada = cor1;
    cor1.classList.add("selected");
});
cor2.addEventListener("click", function () {
    corSelecionada.classList.remove("selected");
    corSelecionada = cor2;
    cor2.classList.add("selected");
});
cor3.addEventListener("click", function () {
    corSelecionada.classList.remove("selected");
    corSelecionada = cor3;
    cor3.classList.add("selected");
});

// Funcao de limpar o quadro
botaoLimpar.addEventListener("click", function () {
    if (tamanho > 0){
        criarMatriz(tamanho);
    } else {
        criarMatriz(tamanhoQuadro);
    };
});
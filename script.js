const paleta = document.querySelectorAll('.color'); // seleciona a paleta de cores

function criaQuadroInicial() {
  for (let index = 0; index < 5; index += 1) {
    const novaLinha = document.createElement('div');
    const pixelBoard = document.getElementById('pixel-board');
    const linha = pixelBoard.appendChild(novaLinha);
    linha.className = 'linha';
    for (let index1 = 0; index1 < 5; index1 += 1) {
      const novaCelula = document.createElement('div');
      linha.appendChild(novaCelula).className = 'pixel';
    }
  }
}

let corSelecionada = document.querySelector('.color-1'); // define a variável com a cor preta inicial
  // inicializa a variável com o rgb da cor preta.
let rgbSelecionado = window.getComputedStyle(corSelecionada).getPropertyValue('background-color');

function aplicaCor() {
  const quadro = document.querySelectorAll('.pixel'); // armazena todos os pixels num array
  for (let index = 0; index < quadro.length; index += 1) {
    const pixelSelecionado = quadro[index];
    pixelSelecionado.addEventListener('click', function () {
    // insere no pixel selecionado o rgb da cor selecionada na paleta
      pixelSelecionado.style.backgroundColor = rgbSelecionado;
    }); // add a segunda classe da div selecionada ao pixel clicado
  }
}

for (let index = 0; index < paleta.length; index += 1) { // insere class selected onde for clicado
  const corAtual = paleta[index]; // define a cor atual de acordo com o indice do array "paleta"
  const propBackgroundColor = window.getComputedStyle(paleta[index]).getPropertyValue('background-color');
  corAtual.style.backgroundColor = propBackgroundColor;
  corAtual.addEventListener('click', function () {
    for (let index1 = 0; index1 < paleta.length; index1 += 1) { // apaga a classe selected de todos
      const removeClasse = paleta[index1];
      removeClasse.classList.remove('selected');
    }
    corAtual.classList.add('selected');
    corSelecionada = corAtual; // armazena a cor atual numa variável global
    // coloca nesta variável o rgb da cor selecionada
    rgbSelecionado = window.getComputedStyle(corSelecionada).getPropertyValue('background-color');
  });
}

function limpaQuadro() {
  const botaoLimpar = document.getElementById('clear-board');
  const quadro = document.querySelectorAll('.pixel');
  botaoLimpar.addEventListener('click', function () {
    for (let index = 0; index < quadro.length; index += 1) { // passa por todo o quadro
      const quadroClear = quadro[index];
      quadroClear.className = ''; // apaga todas as classes nela
      quadroClear.classList.add('pixel'); // insere a classe padrão de volta
      quadroClear.style.backgroundColor = 'white';
    }
  });
}

const boardSize = document.getElementById('board-size');
const buttonGenerateBoard = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');
const removeLinhas = document.getElementsByClassName('linha');
let linha;

buttonGenerateBoard.addEventListener('click', function () {
  if (boardSize.value === '') {
    alert('Board inválido!');
  }
    // remover quadro antigo
  for (let index = removeLinhas.length - 1; index >= 0; index -= 1) {
    removeLinhas[index].remove(removeLinhas);
  }
    // inserir quadro novo
  if (boardSize.value < 5) {
    boardSize.value = 5;
  }
  if (boardSize.value > 50) {
    boardSize.value = 50;
  }
  for (let index = 0; index < boardSize.value; index += 1) {
    const novaLinha = document.createElement('div');
    linha = pixelBoard.appendChild(novaLinha);
    linha.className = 'linha';
    for (let index1 = 0; index1 < boardSize.value; index1 += 1) {
      const novaCelula = document.createElement('div');
      linha.appendChild(novaCelula).className = 'pixel';
    }
  }
  aplicaCor();
  limpaQuadro();
});

function numberRGB() {
  const number = Math.floor(Math.random() * 255);
  return number;
}
window.onload = function () {
  for (let index = 1; index < paleta.length; index += 1) {
    paleta[index].style.backgroundColor = `rgb(${numberRGB()} ,${numberRGB()} , ${numberRGB()})`;
  }
  criaQuadroInicial();
  aplicaCor();
  limpaQuadro();
};

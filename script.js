// função para escolher uma cor aleatória para a paleta de cores (cria um numero rgb)

const secondColor = document.querySelector('.second-color');
const thirdColor = document.querySelector('.third-color');
const fourthColor = document.querySelector('.fourth-color');

function randomColor(number) {
  return Math.floor(Math.random() * number);
}
function randomPalette() {
  secondColor.style.backgroundColor = `rgb(${randomColor(255)} , ${randomColor(255)} , ${randomColor(255)})`;
  thirdColor.style.backgroundColor = `rgb(${randomColor(255)} , ${randomColor(255)} , ${randomColor(255)})`;
  fourthColor.style.backgroundColor = `rgb(${randomColor(255)} , ${randomColor(255)} , ${randomColor(255)})`;
}

window.onload = randomPalette;

// função para definir tamanho do quadrado
function deletePixels() {
  const pixelBoard = document.getElementById('pixel-board');

  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

function createLinesAndColumns() {
  const input = document.getElementById('board-size');
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < input.value; index += 1) {
    const tr = document.createElement('div');
    tr.className = 'tr';
    pixelBoard.appendChild(tr);

    for (let count = 0; count < input.value; count += 1) {
      const td = document.createElement('div');
      td.className = 'pixel td';
      tr.appendChild(td);
    }
  }
}

function createTable() {
  deletePixels();

  const input = document.getElementById('board-size');

  if (input.value === '') {
    alert('Board inválido!');
  } else if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }

  createLinesAndColumns();
}

const generateTable = document.getElementById('generate-board');

generateTable.addEventListener('click', createTable);

// função para colorir pixels de acordo com a cor da paleta escolhida

const selectPixel = document.querySelectorAll('.pixel');

function changeColor(event) {
  const colorSelected = document.querySelector('.selected');

  event.target.style.backgroundColor = colorSelected.style.backgroundColor;
}

for (let index = 0; index < selectPixel.length; index += 1) {
  selectPixel[index].addEventListener('click', changeColor);
}

// função para alterar a cor da paleta selecionada

const getColor = document.querySelectorAll('.color');

function changeSelected(event) {
  const colorSelected = document.querySelector('.selected');

  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let count = 0; count < getColor.length; count += 1) {
  getColor[count].addEventListener('click', changeSelected);
}

// função para deixar os pixels com fundo branco de novo

const clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', function () {
  for (let list = 0; list < selectPixel.length; list += 1) {
    selectPixel[list].style.backgroundColor = 'white';
  }
});

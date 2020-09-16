//  declarando variáveis
const pixelBoard = document.getElementById('pixel-board');
const colors = document.querySelectorAll('.color');
const numberOfLines = 5;
const clearButton = document.getElementById('clear-board');
const generateBoardBttn = document.getElementById('generate-board');

//  remove board
function removeBoard() {
  pixelBoard.innerHTML = '';
}

//  evento de clique no quadro
function createEvent(pixelDiv) {
  pixelDiv.addEventListener('click', function () {
    const currentSelected = document.querySelector('.selected');
    pixelDiv.classList = 'pixel';
    const colorToPaint = currentSelected.style.backgroundColor;
    pixelDiv.style.backgroundColor = colorToPaint;
  });
}

//  botão de limpar quadro
clearButton.addEventListener('click', function () {
  const allPixels = document.querySelectorAll('.board div');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
});

//  função que enche a linha
function fillLine(line) {
  const pixelDiv = document.createElement('div');
  pixelDiv.classList.add('pixel', 'white');
  createEvent(pixelDiv);
  line.appendChild(pixelDiv);
}

//  função que cria linha
function createLine(numberOfColumns) {
  const line = document.createElement('div');
  for (let column = 0; column < numberOfColumns; column += 1) {
    fillLine(line);
  }
  pixelBoard.appendChild(line);
}

//  função que cria tabela
function createBoard(numberOfLinesIn) {
  for (let lineNumber = 0; lineNumber < numberOfLinesIn; lineNumber += 1) {
    createLine(numberOfLinesIn);
  }
}

//  função que remove cor selecionada
function clearSelected() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
}


//  evento de clique na paleta de cores
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', function (event) {
    clearSelected();
    event.target.classList.add('selected');
  });
}

//  escolha de tamanho
generateBoardBttn.addEventListener('click', function () {
  const resizer = document.getElementById('board-size');
  if (resizer.value <= 0) {
    alert('Board inválido!');
    return;
  }
  if (resizer.value < 5) {
    resizer.value = 5;
  }
  if (resizer.value > 50) {
    resizer.value = 50;
  }
  removeBoard();
  createBoard(resizer.value);
});

function getRandom() {
  return Math.random() * 255;
}

function randomColors() {
  colors[0].style.backgroundColor = 'black';
  for (let index = 1; index <= 3; index += 1) {
    colors[index].style.backgroundColor = `rgb(${getRandom()} , ${getRandom()} , ${getRandom()})`;
  }
}

randomColors();

//  cria tabela inicial
createBoard(numberOfLines);

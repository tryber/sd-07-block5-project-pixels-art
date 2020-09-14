// Color variables
const buttonRandomPalette = document.getElementById('random-palette');
const colorPalette = document.getElementsByClassName('color');
let colorPixels = document.getElementsByClassName('pixel');
let selectedColor = document.getElementsByClassName('selected');

// Resize/Reset variables
const clearBoard = document.getElementById('clear-board');
const inputColumns = document.getElementById('columns');
const inputLines = document.getElementById('lines');
const resizeReset = document.getElementById('resize-reset');
const pixelBoard = document.getElementById('pixel-board');
const generateBoard = document.getElementById('generate-board');
let pixelWidth = 40;
let pixelHeight = 40;
let numberOfColumns = 5;
let numberOfLines = 5;
let boardSize = document.getElementById('board-size').value;

//  Pixel Size
const inputPixelHeight = document.getElementById('pixel-height');
const inputPixelWidth = document.getElementById('pixel-width');
const buttonPixelSize = document.getElementById('pixel-size');

// Functions: Resize/Reset
function pixelBoardReset() {
  pixelBoard.innerHTML = '';
}

//  Functions: Color
function getColorFromPalette() {
  selectedColor[0].classList.remove('selected');
  event.target.classList.add('selected');
  selectedColor = document.getElementsByClassName('selected');
}

function changePixelColor() {
  selectedColor = document.getElementsByClassName('selected');
  event.target.style.backgroundColor = selectedColor[0].style.backgroundColor;
}

//  Functions: addEventListener to objects

function eventListenerToColors() {
  for (let index = 0; index < Object.keys(colorPalette).length; index += 1) {
    colorPalette[index].addEventListener('click', getColorFromPalette);
  }
}

function eventListenerToPixels() {
  colorPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < Object.keys(colorPixels).length; index += 1) {
    colorPixels[index].addEventListener('click', changePixelColor);
  }
}

function boardCreator() {
  pixelBoardReset();
  for (let line = 0; line < numberOfLines; line += 1) {
    let elementCreator = document.createElement('tr');
    elementCreator.className = 'line';
    pixelBoard.appendChild(elementCreator);
    for (let column = 0; column < numberOfColumns; column += 1) {
      elementCreator = document.createElement('td');
      elementCreator.className = 'pixel';
      document.getElementsByClassName('line')[line].appendChild(elementCreator);
    }
  }
}

function proceduresToCreateBoard() {
  boardCreator();
  eventListenerToPixels();
  pixelBoard.style.width = numberOfColumns * pixelWidth;
  pixelBoard.style.width += 'px';
}

function assignSize() {
  numberOfColumns = inputColumns.value;
  numberOfLines = inputLines.value;
  proceduresToCreateBoard();
}

function assignSizeForGenerateBoard() {
  numberOfColumns = boardSize;
  numberOfLines = boardSize;
  proceduresToCreateBoard();
}

function scaleBoardSizeOffRange() {
  if (boardSize < 5) {
    boardSize = 5;
    assignSizeForGenerateBoard();
  } else {
    boardSize = 50;
    assignSizeForGenerateBoard();
  }
}

function scaleBoardSizeOnRange() {
  if (boardSize >= 5 && boardSize <= 50) {
    assignSizeForGenerateBoard();
  } else {
    scaleBoardSizeOffRange();
  }
}

function testBeforeAssign() {
  boardSize = document.getElementById('board-size').value;
  if (boardSize === '') {
    alert('Board inválido!');
  } else {
    scaleBoardSizeOnRange();
  }
}

function fillBoardWhite() {
  for (let index = 0; index < Object.keys(colorPixels).length; index += 1) {
    colorPixels[index].style.backgroundColor = 'white';
  }
}

function changeSizePixel() {
  pixelWidth = inputPixelWidth.value;
  pixelHeight = inputPixelHeight.value;
  for (let index = 0; index < Object.keys(colorPixels).length; index += 1) {
    colorPixels[index].style.height = pixelHeight;
    colorPixels[index].style.height += 'px';
    colorPixels[index].style.width = pixelWidth;
    colorPixels[index].style.width += 'px';
  }
  proceduresToCreateBoard();
}

function zeroTo(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function randomColor() {
  let rgbColor = 'rgb(';
  rgbColor += zeroTo(256);
  rgbColor += ',';
  rgbColor += zeroTo(256);
  rgbColor += ',';
  rgbColor += zeroTo(256);
  rgbColor += ')';
  return rgbColor;
}

function randomizerPalette() {
  colorPalette[1].style.backgroundColor = randomColor();
  colorPalette[2].style.backgroundColor = randomColor();
  colorPalette[3].style.backgroundColor = randomColor();
}

eventListenerToColors();
eventListenerToPixels();

//  Buttons addEventListeners
clearBoard.addEventListener('click', fillBoardWhite);
resizeReset.addEventListener('click', assignSize);
generateBoard.addEventListener('click', testBeforeAssign);
buttonPixelSize.addEventListener('click', changeSizePixel);
buttonRandomPalette.addEventListener('click', randomizerPalette);

colorPalette[0].style.backgroundColor = 'black';
randomizerPalette();

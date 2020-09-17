const boardSize = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
const newDocument = document.querySelector('#new-document');
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const windowView = document.querySelector('.window-view');

const firstColor = document.querySelector('.color0');
const secondColor = document.querySelector('.color1');
const thirdColor = document.querySelector('.color2');
const forthColor = document.querySelector('.color3');

const clearBtn = document.querySelector('#clear-board');
const inputTitle = document.querySelector('#input-document-title');

const restoreBoard = document.querySelector('#restore-board');
const yesRestore = document.querySelector('#yes-restore');
const noRestore = document.querySelector('#no-restore');

let saveBoardSize = 0;

if (localStorage.length !== 0) {
  restoreBoard.style.display = 'inline-block';

  yesRestore.addEventListener('click', function() {
    restoreBoard.style.display = 'none';
    loadBoard();
  })

  noRestore.addEventListener('click', function() {
    localStorage.clear();
    document.location.reload(true);
  })

} else {
  newDocument.style.display = 'inline-block';
}

generateBoard.addEventListener('click', function() {
  loadBoard(boardSize.value);
})

function loadBoard(boardSizeValue) {
  if (boardSizeValue < 5) {
    boardSizeValue = 5;
  } else if (boardSizeValue > 50) {
    boardSizeValue = 50;
  }
  saveBoardSize = boardSizeValue;
  console.log(saveBoardSize);

  if (boardSizeValue !== undefined) {
    pixelBoard.innerHTML = '';
    newDocument.className = 'new-document-top';
    colorPalette.style.display = 'block';
    randomColor();
    generatePixels(boardSizeValue);
    boardSize.value = '';
    pixelBoard.style.display = 'inline-block';
    windowView.style.display = 'block';

    firstColor.addEventListener('click', setColorPalette);
    secondColor.addEventListener('click', setColorPalette);
    thirdColor.addEventListener('click', setColorPalette);
    forthColor.addEventListener('click', setColorPalette);

    clearBtn.addEventListener('click', clearBoard);
  }
}

function clearBoard() {
  let allPixels = document.querySelectorAll('.pixel');
  for (index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}

function randomColor() {
  //fonte: https://css-tricks.com/snippets/javascript/random-hex-color/
  for (index = 2; index < (colorPalette.children.length)-1; index += 1) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorPalette.children[index].style.backgroundColor = '#' + randomColor;
  }
}

function setColorPalette() {
  let listOfColors = document.querySelectorAll('.color');

  for (index = 0; index < listOfColors.length; index += 1) {
    if (listOfColors[index] === this) {
      listOfColors[index].className = 'color color' + index.toString() + ' selected';

    } else {
      listOfColors[index].className = 'color color' + index.toString();
    }
  }
}

function generatePixels(size) {
  pixelBoard.style.heigth = (size * 42) + 'px';
  pixelBoard.style.width = (size * 42) + 'px';
  
  for (let yIndex = 0; yIndex < size; yIndex += 1) {
    for (let xIndex = 0; xIndex < size; xIndex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
      const pixelsStyle = document.createElement('style');
      const setClass = 'px-' + (yIndex + 1).toString() + '-' + (xIndex + 1).toString();
      pixel.setAttribute('onclick', 'paintPixel(this.className)');
      pixel.className = 'pixel';
      pixel.className += ' ' + setClass;
      pixelBoard.appendChild(pixel);
      pixel.appendChild(pixelsStyle);
    }
  }
}

function paintPixel (readClass) {
  let arrayOfClass = readClass.split('-');
  const setClass = '.px-' + arrayOfClass[1] + '-' + arrayOfClass[2];
  const paint = document.querySelector(setClass);

  selectedColor();
  paint.style.backgroundColor = selectedColor();
}

function selectedColor() {
  let whatColorSelected = document.querySelector('.selected').classList[1];
  let elem = document.querySelector('.' + whatColorSelected);
  let color = getComputedStyle(elem).backgroundColor;
  return color;
}
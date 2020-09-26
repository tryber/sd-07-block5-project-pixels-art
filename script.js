const pixelBoard = document.querySelector('#pixel-board');
const generateBoard = document.querySelector('#generate-board');
let colorSelected = 'black';

let r;
let g;
let b;

function addClick(a) {
  const color = a;
  color.addEventListener('click', function (select) {
    colorSelected = color.style.backgroundColor;
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    select.target.className += ' selected';
  });
}

function removePixelBoard() {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

function generateColors() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  const color = document.createElement('div');
  color.setAttribute('id', 'color');
  color.setAttribute('class', 'color');
  document.querySelector('#color-palette').appendChild(color);
  color.style.backgroundColor = `rgb(${r}, ${g},  ${b})`;
  addClick(color);
}

function generateBlackColor() {
  const color = document.createElement('div');
  color.setAttribute('id', 'corPreta');
  color.setAttribute('class', 'color selected');
  document.querySelector('#color-palette').appendChild(color);
  color.style.backgroundColor = 'black';
  addClick(color);
}

let i = 0;
let rowMax = 5;
let columnMax = 5;

function pixelAddClick(a) {
  const pixel = a;
  pixel.addEventListener('click', function () {
    pixel.style.backgroundColor = colorSelected;
  });
}
function generatePixelBoard() {
  for (let row = 0; row < rowMax; row += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.setAttribute('id', `pixel-row${i}`);
    pixelRow.setAttribute('class', 'pixel-row');
    document.querySelector('#pixel-board').appendChild(pixelRow);
    for (let column = 0; column < columnMax; column += 1) {
      const pixel = document.createElement('div');
      pixel.setAttribute('id', 'pixel');
      pixel.setAttribute('class', 'pixel');
      pixel.style.backgroundColor = 'white';
      document.querySelector(`#pixel-row${i}`).appendChild(pixel);
      pixelAddClick(pixel);
    }
    i += 1;
  }
}

function resize(a) {
  const boardSizeN = a;
  if (boardSizeN > 50) {
    rowMax = 50;
    columnMax = 50;
    window.alert('Board Inválido!');
  } else if (boardSizeN < 5) {
    rowMax = 5;
    columnMax = 5;
    window.alert('Board Inválido!');
  } else {
    rowMax = boardSizeN;
    columnMax = boardSizeN;
  }
}

generateBoard.addEventListener('click', function () {
  const boardSize = document.querySelector('#board-size').value;
  const boardSizeN = Number(boardSize);
  resize(boardSizeN);
  removePixelBoard();
  generatePixelBoard();
});


const clearBoard = document.querySelector('#clear-board');
clearBoard.addEventListener('click', function () {
  const pixel = document.getElementsByClassName('pixel');
  for (let x = 0; x < pixel.length; x += 1) {
    pixel[x].style.backgroundColor = 'white';
  }
});

window.onload = function palette() {
  generateBlackColor();
  for (let row = 0; row < 3; row += 1) {
    generateColors();
  }
  generatePixelBoard();
};

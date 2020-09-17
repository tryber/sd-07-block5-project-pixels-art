const black = document.getElementById('black');
const colorOne = document.getElementById('color-one');
const colorTwo = document.getElementById('color-two');
const colorThree = document.getElementById('color-three');
const pixels = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');
const board = document.getElementById('pixel-board');
const inputNumber = document.getElementById('board-size');
const renderNewBoard = document.getElementById('generate-board');

function generateColor() {
  const first = Math.floor(Math.random() * 256);
  const second = Math.floor(Math.random() * 256);
  const third = Math.floor(Math.random() * 256);
  return `rgb(${first} , ${second} , ${third})`;
}

function newColors() {
  colorOne.style.backgroundColor = generateColor();
  colorThree.style.backgroundColor = generateColor();
  colorTwo.style.backgroundColor = generateColor();
}

document.onload = newColors();

function getSelectedColor() {
  const selectedColor = document.getElementsByClassName('selected')[0];
  const cssResult = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
  return cssResult;
}

function removeAll() {
  black.classList.remove('selected');
  colorOne.classList.remove('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.remove('selected');
}

function selectColor(element) {
  removeAll();
  element.classList.add('selected');
}

function coloringPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = getSelectedColor();
    });
  }
}

function initialSizeBoard() {
  for (let i = 0; i < 5; i += 1) {
    const newLine = document.createElement('div');
    newLine.classList.add('tr');
    board.appendChild(newLine);
    for (let j = 0; j < 5; j += 1) {
      const newColum = document.createElement('div');
      newColum.className = 'td pixel initial';
      newLine.appendChild(newColum);
    }
  }
  coloringPixels();
}

document.onload = initialSizeBoard();

colorOne.addEventListener('click', () => selectColor(colorOne));
black.addEventListener('click', () => selectColor(black));
colorTwo.addEventListener('click', () => selectColor(colorTwo));
colorThree.addEventListener('click', () => selectColor(colorThree));

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', clearBoard);

function createBoard(number) {
  board.innerHTML = '';
  for (let i = 0; i < number; i += 1) {
    const newLine = document.createElement('div');
    newLine.classList.add('tr');
    board.appendChild(newLine);
    for (let j = 0; j < number; j += 1) {
      const newColum = document.createElement('div');
      newColum.className = 'td pixel';
      newLine.appendChild(newColum);
    }
  }
}

function addColums(number) {
  number = inputNumber.value;
  if (!number) {
    alert('Board inválido!');
  }
  if (number > 50) {
    createBoard(50);
  } else if (number > 5) {
    createBoard(number);
    coloringPixels();
  }
}

renderNewBoard.addEventListener('click', addColums);

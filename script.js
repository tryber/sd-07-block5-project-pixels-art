const pixelBoard = document.getElementById('pixel-board');
const inputBoardSize = document.getElementById('board-size');
const buttonBlack = document.querySelector('.black');
const buttonOne = document.querySelector('.first');
const buttonTwo = document.querySelector('.second');
const buttonThree = document.querySelector('.third');
const buttonClear = document.getElementById('clear-board');
const buttonCreateBoard = document.getElementById('generate-board');

let firstTime = true;
let currentColor = 'black';
let canvasSize = 5;

function clearInput() {
  inputBoardSize.value = '';
}

function clearSelection() {
  const button = document.querySelector('.selected');
  button.classList.remove('selected');
}

function selectColor(event) {
  clearSelection();

  event.target.classList.add('selected');
  currentColor = event.target.style.backgroundColor;
}

function fillColor(event) {
  event.target.style.backgroundColor = currentColor;
}

function addClickListener() {
  document.querySelectorAll('.pixel').forEach((div) => {
    div.addEventListener('click', fillColor);
  });
}

function clearBoard() {
  document.querySelectorAll('.pixel').forEach((div) => {
    div.style.backgroundColor = 'white';
  });
}

function updatePlaceholder() {
  const message = `Tamanho do canvas: ${canvasSize}`;
  inputBoardSize.setAttribute('placeholder', message);
}

function checkNumber(numberOfLines) {
  if (numberOfLines < 5) numberOfLines = 5;
  if (numberOfLines > 50) numberOfLines = 50;
  canvasSize = numberOfLines;
  return numberOfLines;
}

function createBoard(numberOfLines) {
  numberOfLines = checkNumber(numberOfLines);
  pixelBoard.innerHTML = '';

  for (let line = 0; line < numberOfLines; line += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'pixel-line';

    for (let column = 0; column < numberOfLines; column += 1) {
      const divColumn = document.createElement('div');
      divColumn.className = 'pixel';
      divLine.appendChild(divColumn);
    }
    pixelBoard.appendChild(divLine);
  }
  pixelBoard.style.width = `${numberOfLines * 42}px`;
  pixelBoard.style.height = `${numberOfLines * 42}px`;
  clearInput();
  updatePlaceholder();
  addClickListener();
  firstTime = false;
}

function hasValue() {
  return (firstTime || inputBoardSize.value.length !== 0) ? createBoard(Number(inputBoardSize.value)) : alert('Board inválido!');
}

function makeRandomColor() {
  let color = '';
  while (color.length < 6) {
    color += (Math.random()).toString(16).substr(-6).substr(-1);
  }
  return `#${color}`;
}

function setColors() {
  const buttons = document.querySelectorAll('.color');
  buttons.forEach((button) => {
    if (!button.classList.contains('black')) {
      const color = makeRandomColor();
      button.style.backgroundColor = color;
    }
  });
  document.body.style.backgroundColor = makeRandomColor();
  inputBoardSize.style.backgroundColor = makeRandomColor();
  buttonBlack.style.backgroundColor = 'black';
}

buttonBlack.addEventListener('click', selectColor);
buttonOne.addEventListener('click', selectColor);
buttonTwo.addEventListener('click', selectColor);
buttonThree.addEventListener('click', selectColor);
buttonClear.addEventListener('click', clearBoard);
buttonCreateBoard.addEventListener('click', () => hasValue());

setColors();
addClickListener();
createBoard(canvasSize);

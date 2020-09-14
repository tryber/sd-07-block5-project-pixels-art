const pixelBoard = document.getElementById('pixel-board');
const inputBoardSize = document.getElementById('board-size');
const buttonBlack = document.querySelector('.black');
const buttonOne = document.querySelector('.first');
const buttonTwo = document.querySelector('.second');
const buttonThree = document.querySelector('.third');
const buttonColor = document.getElementsByClassName('color');
const buttonClear = document.getElementById('clear-board');
const buttonCreateBoard = document.getElementById('generate-board');
let firstTime = true;
let currentColor = 'black';

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

function isEmpty() {
  return (inputBoardSize.value.length === 0) ? alert('Board inválido!') : true;
}

function checkNumber(numberOfLines) {
  if (numberOfLines < 5) numberOfLines = 5;
  if (numberOfLines > 50) numberOfLines = 50;
  return numberOfLines;
}

function createBoard(numberOfLines) {
  if (firstTime || isEmpty()) {
    numberOfLines = checkNumber(numberOfLines);
    pixelBoard.innerHTML = '';

    for (let line = 0; line < numberOfLines; line += 1) {
      const divLine = document.createElement('div');
      divLine.className = 'pixel-line';

      for (let column = 0; column < numberOfLines; column += 1) {
        const divColumn = document.createElement('div');
        divColumn.className = 'pixel';
        divLine.appendChild(divColumn);

        pixelBoard.style.width = `${numberOfLines * 42}px`;
        pixelBoard.style.height = `${numberOfLines * 42}px`;
      }
      pixelBoard.appendChild(divLine);
    }
    addClickListener();
    firstTime = false;
  }
}

function makeRandomColor() {
  let color = '';
  while (color.length < 6) {
    color += (Math.random()).toString(16).substr(-6).substr(-1);
  }
  return `#${color}`;
}

function setColors() {
  const colors = document.querySelectorAll('.color');
  for (const element of colors) {
    if (!(element.classList.contains('black'))) {
      const color = makeRandomColor();
      element.style.backgroundColor = color;
    }
  }
  buttonBlack.style.backgroundColor = 'black';
}

buttonBlack.addEventListener('click', selectColor);
buttonOne.addEventListener('click', selectColor);
buttonTwo.addEventListener('click', selectColor);
buttonThree.addEventListener('click', selectColor);
buttonClear.addEventListener('click', clearBoard);
buttonCreateBoard.addEventListener('click', () => createBoard(Number(inputBoardSize.value)));

setColors();
addClickListener();
createBoard(5);

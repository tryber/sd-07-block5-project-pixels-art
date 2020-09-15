
let myArray = [
[[''], [''], [''], [''], ['']],
[[''], [''], [''], [''], ['']],
[[''], [''], [''], [''], ['']],
[[''], [''], [''], [''], ['']],
[[''], [''], [''], [''], ['']],
];

let currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue('background-color');
const colorBlack = document.querySelector('#color1');
const colorOne = document.querySelector('#color2');
const colorTwo = document.querySelector('#color3');
const colorThree = document.querySelector('#color4');
const divPixelBoard = document.querySelector('#pixel-board');
const clear = document.querySelector('#clear-board');
const generateBoard = document.querySelector('#generate-board');
const boardSize = document.querySelector('#board-size');

function createBoard() {
  for (let index = 0; index < myArray.length; index += 1) {
    const container = document.createElement('div');
    container.className = 'container';
    divPixelBoard.appendChild(container);
    for (let index2 = 0; index2 < myArray[index].length; index2 += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      container.appendChild(divPixel);
    }
  }
  function currentColorToBlack() {
    currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue('background-color');
    colorBlack.className = 'color palette0 selected';
    colorOne.className = 'color palette1';
    colorTwo.className = 'color palette2';
    colorThree.className = 'color palette3';
  }
  function currentColorToOne() {
    currentColor = window.getComputedStyle(document.querySelector('#color2')).getPropertyValue('background-color');
    colorOne.className = 'color palette1 selected';
    colorBlack.className = 'color palette0';
    colorTwo.className = 'color palette2';
    colorThree.className = 'color palette3';
  }

  function currentColorToTwo() {
    currentColor = window.getComputedStyle(document.querySelector('#color3')).getPropertyValue('background-color');
    colorTwo.className = 'color palette2 selected';
    colorBlack.className = 'color palette0';
    colorOne.className = 'color palette1';
    colorThree.className = 'color palette3';
  }

  function currentColorToThree() {
    currentColor = window.getComputedStyle(document.querySelector('#color4')).getPropertyValue('background-color');
    colorThree.className = 'color palette3 selected';
    colorBlack.className = 'color palette0';
    colorOne.className = 'color palette1';
    colorTwo.className = 'color palette2';
  }

  const classPixel = document.querySelectorAll('.pixel');

  for (let e = 0; e < classPixel.length; e += 1) {
    classPixel[e].addEventListener('click', function () {
      classPixel[e].style.background = currentColor;
    });
  }

  function clearBoard() {
    for (let e = 0; e < classPixel.length; e += 1) {
      classPixel[e].style.background = 'white';
    }
  }
  clear.addEventListener('click', clearBoard);

  colorThree.addEventListener('click', currentColorToThree);
  colorTwo.addEventListener('click', currentColorToTwo);
  colorOne.addEventListener('click', currentColorToOne);
  colorBlack.addEventListener('click', currentColorToBlack);
}
createBoard();

function randomColorOne() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * ((max - min) + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  colorOne.style.background = rgb;
}
randomColorOne();

function randomColorTwo() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * ((max - min) + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  colorTwo.style.background = rgb;
}
randomColorTwo();

function randomColorThree() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * ((max - min) + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  colorThree.style.background = rgb;
}
randomColorThree();


function ArrayNew() {
  myArray = [];
  for (let index = 0; index < boardSize.value; index += 1) {
    myArray.push([]);
    for (let index2 = 0; index2 < boardSize.value; index2 += 1) {
      myArray[index].push(3);
    }
  }
  boardSize.value = '';
  currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue('background-color');
  createBoard();
}

function checkBoardSize() {
  if (boardSize.value === '') {
    boardSize.value = 5;
    alert('Board inválido!');
  } else if (boardSize.value < 5) {
    boardSize.value = 5;
  } else if (boardSize.value > 50) {
    boardSize.value = 50;
  }
  return boardSize.value;
}

function removewBoard() {
  checkBoardSize();
  while (divPixelBoard.firstChild) {
    divPixelBoard.removeChild(divPixelBoard.firstChild);
  }
  ArrayNew();
}

generateBoard.addEventListener('click', removewBoard);

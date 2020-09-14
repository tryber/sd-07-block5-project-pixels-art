function chooseColor(event) {
  const black = document.querySelector('.black');
  const color1 = document.querySelector('.color1');
  const color2 = document.querySelector('.color2');
  const color3 = document.querySelector('.color3');
  const colors = [black, color1, color2, color3];
  colors.forEach((color) => {
    const classes = color.className.split(' ');
    if (classes.length === 3) {
      classes.pop();
      const classe = classes.join(' ');
      color.className = classe;
    }
    if (classes[1] === event.target.className.split(' ')[1]) {
      color.className = `${color.className} selected`;
    }
  });
}
function paintPixel(event) {
  const black = document.querySelector('.black');
  const color1 = document.querySelector('.color1');
  const color2 = document.querySelector('.color2');
  const color3 = document.querySelector('.color3');
  const colors = [black, color1, color2, color3];
  colors.forEach((color) => {
    const classes = color.className.split(' ');
    if (classes.length === 3 && classes[2] === 'selected') {
      event.target.style.backgroundColor = color.style.backgroundColor;
    }
  });
}
function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    const element = pixel[index];
    element.style.backgroundColor = '#ffffff';
  }
}
function pixelsEventListeners() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    const element = pixel[index];
    element.addEventListener('click', paintPixel);
  }
}
function testBoardSize() {
  const boardSize = document.querySelector('#board-size');
  if (boardSize.value === '') {
    alert('Board inválido!');
    return false;
  } else if (boardSize.value < 5) {
    boardSize.value = 5;
  } else if (boardSize.value > 50) {
    boardSize.value = 50;
  }
  return true;
}
function makeBoard() {
  const boardSize = document.querySelector('#board-size');
  const pixelBoard = document.querySelector('#pixel-board');
  if (testBoardSize() === false) {
    return;
  }
  pixelBoard.innerHTML = '';
  const N = boardSize.value;
  for (let row = 0; row < N; row += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'line';
    for (let column = 0; column < N; column += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newRow.appendChild(newPixel);
    }
    pixelBoard.appendChild(newRow);
  }
  pixelsEventListeners();
}
function randomColor() {
  let newColor = '#';
  for (let index = 0; index < 3; index += 1) {
    const randNumber = parseInt(255 * Math.random(), 10);
    if (randNumber < 16) {
      newColor = `${newColor}0${randNumber.toString(16)}`;
    } else {
      newColor = `${newColor}${randNumber.toString(16)}`;
    }
  }
  return newColor;
}
window.onload = function () {
  const black = document.querySelector('.black');
  const color1 = document.querySelector('.color1');
  const color2 = document.querySelector('.color2');
  const color3 = document.querySelector('.color3');
  const colors = [color1, color2, color3];
  const clearBoardButton = document.querySelector('#clear-board');
  const generateBoard = document.querySelector('#generate-board');

  colors.forEach((color) => {
    color.style.backgroundColor = randomColor();
  });

  black.style.backgroundColor = 'black';

  black.addEventListener('click', chooseColor);
  color1.addEventListener('click', chooseColor);
  color2.addEventListener('click', chooseColor);
  color3.addEventListener('click', chooseColor);
  clearBoardButton.addEventListener('click', clearBoard);
  generateBoard.addEventListener('click', makeBoard);
  pixelsEventListeners();
};

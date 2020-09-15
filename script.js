// Adding palette colors via script
const colorPalette = document.querySelector('#color-palette');

// Random number generator from 0 to 255
function randomNumber0to255() {
  return Math.round(Math.random() * 255);
}

// Generate random color for palette colors
function genRandomColor() {
  return `rgb(${randomNumber0to255()}, ${randomNumber0to255()}, ${randomNumber0to255()})`;
}

const colors = ['black', genRandomColor(), genRandomColor(), genRandomColor()];

for (let index = 0; index < colors.length; index += 1) {
  const color = document.createElement('div');
  color.className = 'color';
  color.style.backgroundColor = colors[index];

  if (color.style.backgroundColor === 'black') {
    color.className += ' selected';
  }
  // palette select color
  color.addEventListener('click', function (event) {
    for (let indexPalCol = 0; indexPalCol < colorPalette.children.length; indexPalCol += 1) {
      colorPalette.children[indexPalCol].className = 'color';
    }
    event.target.className += ' selected';
  });

  colorPalette.appendChild(color);
}

// Board of pixels
function createMatrix(dimension) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  const matrixDimension = dimension;
  for (let column = 0; column < matrixDimension; column += 1) {
    // Creating row for the pixels
    const pixelsRow = document.createElement('div');
    pixelsRow.className = 'pixels-row';
    for (let row = 0; row < matrixDimension; row += 1) {
      // Creating the pixel
      const pixel = document.createElement('div');
      pixel.className = 'pixel';

      // Event for fill pixel with selected color
      pixel.addEventListener('click', function (event) {
        const selected = document.querySelector('.selected');
        event.target.style.backgroundColor = selected.style.backgroundColor;
      });
      pixelsRow.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelsRow);
  }
}

const clear = document.querySelector('#clear-board');
// clear all pixels
clear.addEventListener('click', function () {
  const pixels = document.querySelectorAll('.pixel');
  for (let filledPixel = 0; filledPixel < pixels.length; filledPixel += 1) {
    pixels[filledPixel].style.backgroundColor = 'white';
  }
});

// create a customize matrix

const generateBoard = document.querySelector('#generate-board');

createMatrix(5);

generateBoard.addEventListener('click', function () {
  const boardSize = document.querySelector('#board-size');
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else {
    if (boardSize.value <= 5) boardSize.value = 5;
    else if (boardSize.value >= 50) boardSize.value = 50;
    createMatrix(boardSize.value);
  }
});

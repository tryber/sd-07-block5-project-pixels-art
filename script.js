const defaultLinesCols = 5;
const palletePixels = document.getElementsByClassName('pallete-pixel');
const divPixelBoard = document.getElementById('pixel-board');
const btnClearBoard = document.getElementById('clear-board');
const btnGenerateBoard = document.getElementById('generate-board');
const boardSizeInput = document.getElementById('board-size');
let selected = 'black';

function createLines(numberOfLines) {
  for (let lines = 1; lines <= numberOfLines; lines += 1) {
    const line = document.createElement('div');
    line.id = `line ${lines}`;
    line.className = 'line';
    divPixelBoard.appendChild(line);
  }
}

function fillLinesWithPixels(numberOfPixels) {
  for (let lines = 1; lines <= numberOfPixels; lines += 1) {
    const line = document.getElementById(`line ${lines}`);
    for (let pixels = 1; pixels <= numberOfPixels; pixels += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

function getColor() {
  document.addEventListener(
    'click',
    function (event) {
      if (event.target.classList.contains('pallete-pixel')) {
        for (
          let element = 0;
          element <= palletePixels.length - 1;
          element += 1
        ) {
          palletePixels[element].classList.remove('selected');
        }
        event.target.className += ' selected';
        selected = event.target.style.backgroundColor;
      }
    },
    false,
  );
}

function paintPixel() {
  document.addEventListener(
    'click',
    function (event) {
      if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = selected;
      }
    },
    false,
  );
}

function clearPixelBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let pixel = 0; pixel <= pixels.length - 1; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
}

function generateRandomValue() {
  return (Math.random() * 255).toFixed(0);
}

function generateRandomColor() {
  const redValue = generateRandomValue();
  const greenValue = generateRandomValue();
  const blueValue = generateRandomValue();

  return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function removeAllBoardContent() {
  divPixelBoard.innerHTML = '';
}

function createNewBoard(linesCols) {
  createLines(linesCols);
  fillLinesWithPixels(linesCols);
}

createLines(defaultLinesCols);
fillLinesWithPixels(defaultLinesCols);
getColor();
paintPixel();
btnClearBoard.addEventListener('click', clearPixelBoard);

boardSizeInput.onkeydown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    btnGenerateBoard.click();
  }
  if (event.key === '-') {
    event.preventDefault();
    return false;
  }
  return true;
};

btnGenerateBoard.addEventListener('click', () => {
  const minValue = 5;
  const maxValue = 50;
  if (!boardSizeInput.value) {
    alert('Board inválido!');
    removeAllBoardContent();
    createNewBoard(minValue);
  } else if (boardSizeInput.value < minValue) {
    removeAllBoardContent();
    createNewBoard(minValue);
  } else if (boardSizeInput.value > maxValue) {
    removeAllBoardContent();
    createNewBoard(maxValue);
  } else {
    removeAllBoardContent();
    createNewBoard(boardSizeInput.value);
  }
});

window.onload = () => {
  for (let element = 0; element <= palletePixels.length - 1; element += 1) {
    palletePixels[element].style.backgroundColor = generateRandomColor();
  }
  palletePixels[0].style.backgroundColor = 'black';
};

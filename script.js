const color1 = document.querySelector('#color-1');
const color2 = document.querySelector('#color-2');
const color3 = document.querySelector('#color-3');
const color4 = document.querySelector('#color-4');
const colorPalette = document.querySelector('#color-palette');
const btnClear = document.querySelector('#clear-board');
const btnVqv = document.querySelector('#generate-board');
const inputBoardSize = document.querySelector('#board-size');

let selectedColor = 'black';

function colorGeneration() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function removeSelectedClass(stringClass) {
  const classArray = stringClass.split(' ');
  classArray.splice(2, 1);
  return classArray.join(' ');
}

function createPixelBoard(nValue) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  for (let i = 0; i < nValue; i += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    for (let j = 0; j < nValue; j += 1) {
      const pixelElement = document.createElement('div');
      pixelElement.className = 'pixel';
      pixelLine.appendChild(pixelElement);
    }
    pixelBoard.appendChild(pixelLine);
  }
}

color1.style.backgroundColor = 'black';
color2.style.backgroundColor = colorGeneration();
color3.style.backgroundColor = colorGeneration();
color4.style.backgroundColor = colorGeneration();

colorPalette.addEventListener('click', function (event) {
  if (event.target.className.includes('color')) {
    const oldSelectedElement = document.querySelector('.selected');
    const oldClassName = removeSelectedClass(oldSelectedElement.className);
    oldSelectedElement.className = oldClassName;
    event.target.className += ' selected';
    selectedColor = event.target.style.backgroundColor;
  }
});

const pixelBoard = document.querySelector('#pixel-board');

pixelBoard.addEventListener('click', function (elementEvent) {
  if (elementEvent.target.className === 'pixel') {
    elementEvent.target.style.backgroundColor = selectedColor;
  }
});

btnClear.addEventListener('click', function () {
  const pixelList = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
});

btnVqv.addEventListener('click', function () {
  const valueBoardSize = inputBoardSize.value;
  if (valueBoardSize === '') {
    alert('Board inválido!');
  } else if (valueBoardSize < 5) {
    createPixelBoard(5);
  } else if (valueBoardSize > 50) {
    createPixelBoard(50);
  } else {
    createPixelBoard(valueBoardSize);
  }
});

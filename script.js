
const numberOfLine = 5;
const numberOfColumn = 5;

const getDivPixelBoard = document.getElementById('pixel-board');

function removeChildsPixel() {
  while (getDivPixelBoard.firstChild) {
    getDivPixelBoard.removeChild(getDivPixelBoard.firstChild);
  }
}

function checkChildPixel() {
  if (getDivPixelBoard.childElementCount > 0) {
    removeChildsPixel();
  }
}
function generatePixelMatriz(linePixels, columnPixels) {
  checkChildPixel();
  for (let line = 1; line <= linePixels; line += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'tr';
    getDivPixelBoard.appendChild(divLine);

    for (let column = 1; column <= columnPixels; column += 1) {
      const divColumn = document.createElement('div');
      divColumn.className = 'pixel td';
      divLine.appendChild(divColumn);
    }
  }
}

generatePixelMatriz(numberOfLine, numberOfColumn);

const getPixelList = document.getElementsByClassName('color');
function generationRandomColorRGB() {
  const maxNumberRGB = 256;
  const decimalNumber = () => Math.floor(Math.random() * maxNumberRGB);
  return `rgb(${decimalNumber()},${decimalNumber()},${decimalNumber()})`;
}

function randomColorPalette() {
  for (let index = 1; index < getPixelList.length; index += 1) {
    getPixelList[index].style.backgroundColor = generationRandomColorRGB();
  }
}

randomColorPalette();
function findIndexPaletteSelected() {
  let searchElement;
  for (let index = 0; index < getPixelList.length; index += 1) {
    searchElement = getPixelList[index].getAttribute('class');
    if (searchElement.includes('selected')) {
      return index;
    }
  }
  return 0;
}

function getBackgroundColorPixelSelected(index) {
  const stylesPaletteSelected = window.getComputedStyle(getPixelList[index]);
  return stylesPaletteSelected.backgroundColor;
}

function reduceClasseSelectedFromOldPalette(index) {
  const getAttributesClass = getPixelList[index].getAttribute('class');
  const getAttributesClassReduce = getAttributesClass.replace('selected', '');
  return getAttributesClassReduce;
}

function updateClassesOldPalette(index, attributesClass) {
  attributesClass = attributesClass.trim();
  getPixelList[index].className = attributesClass;
}

function updateClassesNewSelectedPalette(targetSelected) {
  const newAttributeClass = ' selected';
  targetSelected.className += newAttributeClass;
}

function clearColorPixel() {
  const lengthElements = document.getElementsByClassName('pixel').length;
  const color = 'white';
  for (let index = 0; index < lengthElements; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = color;
  }
}

function getInputSizePixelValue() {
  return document.getElementById('board-size').value;
}
function borderSizeValidation(size) {
  if (size <= 5 && size !== '') return 5;
  if (size >= 50 && size !== '') return 50;
  return size;
}

document.getElementById('clear-board').addEventListener('click', clearColorPixel);

document.getElementById('pixel-board').addEventListener('click', function (event) {
  const classEvent = 'pixel td';
  if (event.target.className === classEvent) {
    const indexPaletteSelected = findIndexPaletteSelected();
    const backgroundColor = getBackgroundColorPixelSelected(indexPaletteSelected);
    event.target.style.backgroundColor = backgroundColor;
  }
});

document.getElementById('color-palette').addEventListener('click', function (event) {
  const indexPaletteSelected = findIndexPaletteSelected();
  const attributesClassReduce = reduceClasseSelectedFromOldPalette(indexPaletteSelected);
  updateClassesOldPalette(indexPaletteSelected, attributesClassReduce);
  updateClassesNewSelectedPalette(event.target);
});
document.getElementById('generate-board').addEventListener('click', function () {
  const inputSizeValue = getInputSizePixelValue();
  const inputSize = borderSizeValidation(inputSizeValue);
  if (inputSize === '') {
    alert('Board inválido!');
  } else generatePixelMatriz(inputSize, inputSize);
});

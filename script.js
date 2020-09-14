function generateRandom() {
  const firstNumber = Math.ceil(Math.random() * 255);
  const secondNumber = Math.ceil(Math.random() * 255);
  const thirdNumber = Math.ceil(Math.random() * 255);

  const colorNumber = `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`;
  return colorNumber;
}

// Define color-pallete variables
const colorOne = document.getElementsByClassName('color')[0];
const colorTwo = document.getElementsByClassName('color')[1];
const colorThree = document.getElementsByClassName('color')[2];
const colorFour = document.getElementsByClassName('color')[3];
const clearButton = document.getElementById('clear-board');

colorOne.style.backgroundColor = 'black';
colorTwo.style.backgroundColor = generateRandom();
colorThree.style.backgroundColor = generateRandom();
colorFour.style.backgroundColor = generateRandom();

// Define selected color with color selected class
const selectedColor = document.getElementsByClassName('color selected');
const pixelBoard = document.getElementById('pixel-board');
const generateTable = document.getElementById('generate-board');
const boardSizeInput = document.getElementById('board-size');

// Array of all elements with class color
const paletteSelection = document.getElementsByClassName('color');

// Array of all elements in the pixel board
const pixelSelection = document.getElementsByClassName('pixel');

  // Function that picks a color
function selectColor(event) {
  selectedColor[0].className = 'color';
  event.target.className = 'color selected';
}

// Loop to AddEventListener to all elements in color palette
for (let item = 0; item < paletteSelection.length; item += 1) {
  paletteSelection[item].addEventListener('click', selectColor);
}

// colors all table to white
clearButton.addEventListener('click', function () {
  for (let box = 0; box < pixelSelection.length; box += 1) {
    pixelSelection[box].style.backgroundColor = 'white';
  }
});

function removeTable() {
  const tableContent = document.getElementsByTagName('tbody')[0];
  pixelBoard.removeChild(tableContent);
}

// function that fills a pixel and changes its background color to the selected one.
function fillColor(event) {
  const color = selectedColor[0].style.backgroundColor;
  event.target.style.backgroundColor = color;
}

function eventListenerNewPixels() {
  for (let pixel = 0; pixel < pixelSelection.length; pixel += 1) {
    const pixelBox = pixelSelection[pixel];
    pixelBox.addEventListener('click', fillColor);
  }
}
// generate table with N elements in height and width based on user input
generateTable.addEventListener('click', function () {
  removeTable();
  const newBody = document.createElement('tbody');
  pixelBoard.appendChild(newBody);
  let size = boardSizeInput.value;
  if (size === '') {
    alert('Board inválido!');
  } else if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  }
  for (let row = 1; row <= size; row += 1) {
    const newRow = document.createElement('tr');
    newBody.appendChild(newRow);
    for (let i = 1; i <= size; i += 1) {
      const newBox = document.createElement('td');
      newBox.className = 'pixel';
      newRow.appendChild(newBox);
    }
  }
  eventListenerNewPixels();
});
// Loop to AddEventListener to all elements in the pixel board
for (let pixel = 0; pixel < pixelSelection.length; pixel += 1) {
  const pixelBox = pixelSelection[pixel];
  pixelBox.addEventListener('click', fillColor);
}

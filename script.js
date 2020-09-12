// Save the selected color
let selectedColorRGB = '';

// function to apply selected class to color pallet
function applySelectedClass(colorElement) {
  // Apply the class selected
  colorElement.className += ' selected';

  // Save color selected
  selectedColorRGB = getComputedStyle(colorElement).getPropertyValue('background-color');
}

// function to remove the class selected of all pallet
function removeSelectedClass() {
  // For each color Pallet
  const allColorPallet = document.querySelectorAll('.color');
  for (let index = 0; index < allColorPallet.length; index += 1) {
    // remove class selected
    allColorPallet[index].className = allColorPallet[index].className.replace(' selected', '');
  }
}

// function to change the selected color pallet
function changeSelectedColorPallet(event) {
  // remove selected class of all colors pallet
  removeSelectedClass();

  // appĺy selected class on target
  applySelectedClass(document.getElementById(event.target.id));
}

// Function to apply the saved color in a pixel
function applyBackgroundColor(event) {
  event.target.style.backgroundColor = selectedColorRGB;
}

// Function clear-board - set all pixels with background white
function clearBoard() {
  // For each pixel
  const allPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    // apply background color = white
    allPixels[index].style.backgroundColor = 'rgb(255,255,255)';
  }
}

// Function to check value from input
function checkInputSize(numSize) {
  // if size is empty, alert user
  if (numSize === '') {
    alert('Board inválido!');
    numSize = 5;
  }
  // Adjust to default size 5 >= size
  if (numSize < 5) {
    numSize = 5;
  }
  // Adjust to default size size <= 50
  if (numSize > 50) {
    numSize = 50;
  }
  // Set input with adjusted size
  document.getElementById('board-size').value = numSize;
  return numSize;
}

// Function append pixels
function appendPixels(parentNode, sizeBoard) {
  for (let indexPixel = 0; indexPixel < sizeBoard; indexPixel += 1) {
    // Create pixel element  <div class='pixel'></div>
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    // Assign event applyBackgroundColor
    pixel.addEventListener('click', applyBackgroundColor);
    // Append the pixel to board line
    parentNode.appendChild(pixel);
  }
}

// Function append board lines
function appendBoardLines(parentNode, sizeBoard) {
  for (let indexLine = 0; indexLine < sizeBoard; indexLine += 1) {
    // Create the line <div class='board-line'>
    const boardLine = document.createElement('div');
    boardLine.className = 'board-line';
    // Create the pixels
    appendPixels(boardLine, sizeBoard);
    // Append the board line to board pixel
    parentNode.appendChild(boardLine);
  }
}

// Function that generate the pixel board
function generateBoard() {
  // Get input value
  let sizeBoard = document.getElementById('board-size').value;
  // check input
  sizeBoard = checkInputSize(sizeBoard);
  // Get the pixel board
  const pixelBoard = document.getElementById('pixel-board');
  // Clear the board
  pixelBoard.innerHTML = '';
  // Create the board
  appendBoardLines(pixelBoard, sizeBoard);
}

// Execute function to select the first color pallet
applySelectedClass(document.querySelector('.color'));

// Assign the function changeSelectedColorPallet on all colors Pallet
// For each color Pallet
const allColorPallet = document.querySelectorAll('.color');
for (let index = 0; index < allColorPallet.length; index += 1) {
  allColorPallet[index].addEventListener('click', changeSelectedColorPallet);
}

// Assign the function applyBackgroundColor on all pixels
// For each pixel
const allPixels = document.querySelectorAll('.pixel');
for (let index = 0; index < allPixels.length; index += 1) {
  allPixels[index].addEventListener('click', applyBackgroundColor);
}

// Assign the function clearBoard to button
document.getElementById('clear-board').addEventListener('click', clearBoard);

// Assign the function generateBoard to button
document.getElementById('generate-board').addEventListener('click', generateBoard);

// List of named colors
const colors = {};
colors.names = {
  aqua: '#00ffff',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  // black: '#000000',
  blue: '#0000ff',
  brown: '#a52a2a',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgrey: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkviolet: '#9400d3',
  fuchsia: '#ff00ff',
  gold: '#ffd700',
  green: '#008000',
  indigo: '#4b0082',
  khaki: '#f0e68c',
  lightblue: '#add8e6',
  lightcyan: '#e0ffff',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  magenta: '#ff00ff',
  maroon: '#800000',
  navy: '#000080',
  olive: '#808000',
  orange: '#ffa500',
  pink: '#ffc0cb',
  purple: '#800080',
  violet: '#800080',
  red: '#ff0000',
  silver: '#c0c0c0',
  // white: '#ffffff',
  yellow: '#ffff00',
};

// function to random colors
colors.random = function () {
  const colorList = Object.keys(this.names);
  const colorNumber = Math.ceil(Math.random() * colorList.length);
  return this.names[colorList[colorNumber]];
};

// function to generate randon colors to the pallets next black (first)
function generateColorPallet() {
  // Get pallet elements
  const colorsPallet = document.querySelectorAll('.color');
  // control repeat colors
  const colorsApplied = [];
  // Set a random background color
  for (let indexColor = 1; indexColor < colorsPallet.length; indexColor += 1) {
    let randomColor = colors.random();
    // while is a repeated color, change color
    while (colorsApplied.indexOf(randomColor) >= 0) {
      randomColor = colors.random();
    }
    // save random color
    colorsApplied.push(randomColor);
    // apply a random color
    colorsPallet[indexColor].style.backgroundColor = randomColor;
  }
}

// Generate random colors for pallet
generateColorPallet();

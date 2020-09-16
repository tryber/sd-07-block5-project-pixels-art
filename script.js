let colorBrush = 'Black';
let boardSize = 5;
const stringColors = [
  'Black',
  'grey11',
  'grey21',
  'grey31',
  'DimGray',
  'Gray',
  'DarkGray',
  'Silver',
  'LightGrey',
  'Gainsboro',
  'SlateBlue',
  'SlateBlue1',
  'SlateBlue3',
  'DarkSlateBlue',
  'MidnightBlue',
  'Navy',
  'DarkBlue',
  'MediumBlue',
  'Blue',
  'CornflowerBlue',
  'RoyalBlue',
  'DodgerBlue',
  'DeepSkyBlue',
  'LightSkyBlue',
  'SkyBlue',
  'LightBlue',
  'SteelBlue',
  'LightSteelBlue',
  'SlateGray',
  'LightSlateGray',
  'Cyan',
  'DarkTurquoise',
  'Turquoise',
  'MediumTurquoise',
  'LightSeaGreen',
  'DarkCyan',
  'Teal',
  'Aquamarine',
  'MediumAquamarine',
  'CadetBlue',
  'DarkSlateGray',
  'MediumSpringGreen',
  'SpringGreen',
  'PaleGreen',
  'LightGreen',
  'DarkSeaGreen',
  'MediumSeaGreen',
  'SeaGreen',
  'DarkGreen',
  'Green',
  'ForestGreen',
  'LimeGreen',
  'Lime',
  'LawnGreen',
  'Chartreuse',
  'GreenYellow',
  'YellowGreen',
  'OliveDrab',
  'DarkOliveGreen',
  'Olive',
  'DarkKhaki',
  'Goldenrod',
  'DarkGoldenrod',
  'SaddleBrown',
  'Sienna',
  'RosyBrown',
  'Peru',
  'Chocolate',
  'SandyBrown',
  'NavajoWhite',
  'Wheat',
  'BurlyWood',
  'Tan',
  'MediumSlateBlue',
  'MediumPurple',
  'BlueViolet',
  'Indigo',
  'DarkViolet',
  'DarkOrchid',
  'MediumOrchid',
  'Purple',
  'DarkMagenta',
  'Magenta',
  'Violet',
  'Orchid',
  'Plum',
  'MediumVioletRed',
  'DeepPink',
  'HotPink',
  'PaleVioletRed',
  'LightPink',
  'Pink',
  'LightCoral',
  'IndianRed',
  'Crimson',
  'Maroon',
  'DarkRed',
  'FireBrick',
  'Brown',
  'Salmon',
  'DarkSalmon',
  'LightSalmon',
  'Coral',
  'Tomato',
  'Red',
  'OrangeRed',
  'DarkOrange',
  'Orange',
  'Gold',
  'Yellow',
  'Khaki',
  'AliceBlue',
  'GhostWhite',
  'Snow',
  'Seashell',
  'FloralWhite',
  'WhiteSmoke',
  'Beige',
  'OldLace',
  'Ivory',
  'Linen',
  'Cornsilk',
  'AntiqueWhite',
  'BlanchedAlmond',
  'Bisque',
  'LightYellow',
  'LemonChiffon',
  'LightGoldenrodYellow',
  'PapayaWhip',
  'PeachPuff',
  'Moccasin',
  'PaleGoldenrod',
  'MistyRose',
  'LavenderBlush',
  'Lavender',
  'Thistle',
  'Azure',
  'LightCyan',
  'PowderBlue',
  'PaleTurquoise',
  'Honeydew',
  'MintCream',
];

function randomColors() {
  const numbersOfColors = 142;
  let color = stringColors[Math.floor(Math.random() * numbersOfColors)];
  if (color !== 'white') {
    return color;
  }
  color = stringColors[Math.floor(Math.random() * numbersOfColors)];
  return color;
}

function createBox(className) {
  const element = document.createElement('div');
  element.className = className;
  return element;
}

function createBoard(linesColumns) {
  const pixelStart = document.querySelector('#pixel-board');
  pixelStart.innerHTML = '';
  for (let line = 0; line < linesColumns; line += 1) {
    const blockline = createBox('line center');
    pixelStart.appendChild(blockline);
    const finalWidth = 40 * linesColumns;
    pixelStart.appendChild(blockline).style.width = finalWidth;
    for (let column = 0; column < linesColumns; column += 1) {
      const pixel = createBox('pixel');
      blockline.appendChild(pixel);
    }
  }
}

function createPalette() {
  const paletteStart = document.querySelector('#color-palette');
  paletteStart.innerHTML = '';
  const colorPalette = [];
  colorPalette[0] = 'black';
  let colorline = [];
  colorline = createBox('color black selected');
  paletteStart.appendChild(colorline).style.backgroundColor = 'black';
  for (let color = 1; color < 4; color += 1) {
    colorPalette[color] = randomColors();
    colorline = createBox(`color ${colorPalette[color]}`);
    paletteStart.appendChild(colorline).style.backgroundColor = `${colorPalette[color]}`;
  }
}

function changeColor() {
  //  https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
  document.querySelectorAll('.color').forEach((colorindex) => {
    colorindex.addEventListener('click', (event) => {
      const last = document.querySelector('.selected');
      event.target.classList.add('selected');
      if (last !== event.target) {
        last.classList.remove('selected');
      }
      colorBrush = event.target.classList[1];
      document.querySelector('.dialog').innerHTML = `Brush stroke color is: <strong>${colorBrush}</strong>`;
    });
  });
}

function changeCanvas() {
  document.querySelectorAll('.pixel').forEach((canvasindex) => {
    canvasindex.addEventListener('click', (event) => {
      event.target.className = `pixel ${colorBrush}`;
      event.target.style.backgroundColor = colorBrush;
    });
  });
}

function clearBoard() {
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', function () {
    colorBrush = 'Black';
    createBoard(boardSize);
    changeColor();
    changeCanvas();
  });
}

function reSizeBoard() {
  const resBoard = document.querySelector('#generate-board');
  resBoard.addEventListener('click', function () {
    const newBoardSize = document.querySelector('#board-size');
    if (newBoardSize.value < 5) {
      boardSize = 5;
    }
    if (newBoardSize.value > 50) {
      boardSize = 50;
    }
    if (newBoardSize.value >= 5 && newBoardSize.value <= 50) {
      boardSize = newBoardSize.value;
    }
    if (newBoardSize.value === '') {
      alert('Board inválido!');
    }
    colorBrush = 'Black';
    createBoard(boardSize);
    changeColor();
    changeCanvas();
  });
}

window.onload = function () {
  createBoard(boardSize);
  createPalette();
  changeColor();
  changeCanvas();

  clearBoard();
  reSizeBoard();
};

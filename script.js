// Create color palette
const createColorSinglePalette = (color) => {
  const colorPaletteDiv = document.querySelector('#color-palette');
  const colorDiv = document.createElement('div');
  colorDiv.className = 'color';
  colorDiv.dataset.event = 'selectColor';
  colorDiv.style.backgroundColor = color;
  colorPaletteDiv.appendChild(colorDiv);
  return colorDiv;
}
const colorGeneratorRandom = () => {
  return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}
const populateColorsPalette = (number) => {
  const firstColor = createColorSinglePalette('black');
  firstColor.classList.add('selected')
  for (let index = 1; index <= number; index += 1) {
    createColorSinglePalette(colorGeneratorRandom());
  }
}

// Create board canvas
const createLinePixel = () => {
  const linePixelBoard = document.createElement('div');
  linePixelBoard.className = "line-pixel-board";
  return linePixelBoard;
}
const createPixelInLine = () => {
  const pixelDiv = document.createElement('div');
  pixelDiv.className = 'pixel';
  pixelDiv.dataset.event = 'changeColor';
  pixelDiv.style.backgroundColor = 'white';
  return pixelDiv;
}
const createCanvasBoard = (number) => {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let line = 1; line <= number; line += 1) {
    const line = createLinePixel();
    for (let pixel = 1; pixel <= number; pixel += 1) {
      line.appendChild(createPixelInLine());
    }
    pixelBoard.appendChild(line);
  }
}

// Select color
let colorComputed = 'black';
const selectColor = (event) => {
  const currentColorSelected = document.querySelector('.selected');
  currentColorSelected.classList.remove('selected')
  event.target.classList.add('selected');
  getColorSelect(event);
}
const getColorSelect = (event) => {
  const color = window.getComputedStyle(event.target).getPropertyValue('background-color');
  colorComputed = color;
}
const setColorChangePixel = (event) => {
  const pixel = event.target;
  pixel.style.backgroundColor = colorComputed;
}

// Clear button
const clearButtonPixelBoard = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

// Resize pixel border


const resizeCanvasBoard = () => {

  let inputResizeValue = Number(document.querySelector('#board-size').value);
  if (inputResizeValue >= 5 && inputResizeValue <= 50) {
    removeCurrentBoardCanvas();
    createCanvasBoard(inputResizeValue);
  } else if (inputResizeValue > 50) {
    inputResizeValue = 50;
    removeCurrentBoardCanvas();
    createCanvasBoard(inputResizeValue);
  } else {
    alert("Board inválido!")
  }
}
const removeCurrentBoardCanvas = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.remove();
  }
}

// Event handle's
const handleControllerEvents = (...types) => {
  for (const type of types) {
    switch (type) {
      case 'click':
        controllerEventsClicks(type);
        break;
    }
  }
}
const controllerEventsClicks = (type) => {
  document.addEventListener(type, (event) => {
    const dataSetEvent = event.target.dataset.event;
    switch (dataSetEvent) {
      case 'selectColor':
        selectColor(event);
        break;
      case 'changeColor':
        setColorChangePixel(event);
        break;
      case 'clearButton':
        clearButtonPixelBoard();
        break;
      case 'resizeCanvas':
        resizeCanvasBoard();
        break;
    }
  })
}

// Load page
window.onload = () => {
  populateColorsPalette(3);
  createCanvasBoard(5)
  handleControllerEvents('click')
}

const linesCols = 5;
const divPixelBoard = document.getElementById('pixel-board');
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
    for (let pixels = 1; pixels <= numberOfPixels; pixels += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      const line = document.getElementById(`line ${pixels}`);
      line.appendChild(pixel);
    }
  }
}

function getColor() {
  document.addEventListener(
    'click',
    function (event) {
      if (event.target.classList.contains('pallete-pixel')) {
        selected = event.target.id;
      }
    },
    false
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
    false
  ); 
}

createLines(linesCols);
fillLinesWithPixels(linesCols);
getColor();
paintPixel();

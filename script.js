// Seleciona a cor para pintar o pixel

let color = 'black';
function selectedColor(event) {
  const divSelected = document.querySelector('.selected');
  color = window.getComputedStyle(event.target).getPropertyValue('background-color');
  divSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

// Pinta o pixel

function paintPixel(event) {
  event.target.style.backgroundColor = color;
}

// Cria as cores da paleta
for (let i = 0; i < 4; i += 1) {
  const colorPalette = document.getElementById('color-palette');
  const colorDiv = document.createElement('div');
  colorPalette.appendChild(colorDiv);

  const arrayOfColors = ['black', 'salmon', 'green', 'blue'];
  for (let j = 0; j < arrayOfColors.length; j += 1) {
    if (i === j) {
      colorDiv.className = `color ${arrayOfColors[j]}`;
    }
  }

  if (colorDiv.classList.contains('black')) {
    colorDiv.className += ' selected';
  }

  colorDiv.addEventListener('click', selectedColor);
}

// Cria o quadro de pixels
window.onload = function() {

  function createBox() {
    const box = document.createElement('div');
    box.className = 'pixel';
    box.addEventListener('click', paintPixel);
    return box;
  }
  for (let i = 0; i < 5; i += 1) {
    const board = document.getElementById('pixel-board');
    const lineBoardBox = document.createElement('div');
    for (let j = 0; j < 5; j += 1) {
      lineBoardBox.appendChild(createBox());
    }
    board.appendChild(lineBoardBox).className = 'pixel-line';
  }
};

// Reseta a cor branca dos pixels
function turnWhite() {
  const paintedPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < paintedPixel.length; i += 1) {
    paintedPixel[i].style.backgroundColor = 'white';
  }
}
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', turnWhite);

const colorPalette = document.querySelector('#color-palette');

let selectedColor = 'black';

colorPalette.addEventListener('click', function (event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.className += ' selected';
  selectedColor = event.target.style.backgroundColor;
});

const pixelBoard = document.querySelector('#pixel-board');

pixelBoard.addEventListener('click', function (event) {
  event.target.style.backgroundColor = selectedColor;
});

const clearButton = document.querySelector('#clear-board');
const pixels = document.querySelectorAll('.pixel');

clearButton.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});
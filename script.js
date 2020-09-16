
const board = document.getElementById('pixel-board');
const amountOfSquares = 5;

for (let counter = 0; counter < amountOfSquares; counter += 1) {
  for (let index = 0; index < amountOfSquares; index += 1) {
    const square = document.createElement('div');
    square.className += 'pixel';
    board.appendChild(square);
  }
  board.innerHTML += '<br>';
}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('color')) {
    const selectColor = document.querySelector('.selected');
    selectColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
});
// baseado em https://app.betrybe.com/course/fundamentals/javascript/dom-manipulation/js-part-6
const pixelBoard = document.getElementsByClassName('pixel');
for (let i = 0; i < pixelBoard.length; i += 1) {
  pixelBoard[i].addEventListener('click', function (event) {
    const colors = document.getElementsByClassName('selected')[0];
    const pixelColor = event.target;
    pixelColor.style.backgroundColor = getComputedStyle(colors).backgroundColor;
  });
}

const clear = document.getElementById('clear-board');
clear.addEventListener('click', function () {
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.backgroundColor = 'white';
  }
});

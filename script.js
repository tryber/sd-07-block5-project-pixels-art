//Defining the colors
const black = document.querySelector('#black');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

let selected = document.querySelector('.selected');
const colors = document.querySelectorAll('.color')

black.style.backgroundColor = 'black';
red.style.backgroundColor = 'red';
green.style.backgroundColor = 'green';
blue.style.backgroundColor = 'blue';


//Drawing the pixel board;
function initialPixelBoard() {
  let boardSize = 5;
  let pixelBoard = document.querySelector('.pixel-board');

  for (let rows = 0; rows < boardSize; rows += 1) {
    
    let pixelRow = document.createElement('div');
    pixelRow.classList.add('pixel-row');  
    
    for (let cells = 0; cells < boardSize; cells += 1) {
      
      let pixelCell = document.createElement('div');
      pixelCell.classList.add('pixel', 'border');
      pixelCell.style.backgroundColor = 'white';
      pixelRow.appendChild(pixelCell)
    }
    
    pixelBoard.appendChild(pixelRow);
  }
};

function gettingTheColors() {
  for (const btn of colors) {
    btn.addEventListener('click', function () {
      if (!event.target.classList.contains('selected')) {
        selected.classList.remove('selected');
        event.target.classList.add('selected');
      }
      selected = document.querySelector('.selected');
    })
  }
};

function paintTheBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (const cell of pixels) {
    cell.addEventListener('click', function () {
      event.target.style.backgroundColor = selected.style.backgroundColor;
    })
  }
};

//Clearing the board
document.querySelector('#clear-board').addEventListener('click', function () {
  const pixels = document.querySelectorAll('.pixel');
  for (const cell of pixels) {
    cell.style.backgroundColor = 'white';
  }
});

initialPixelBoard();
gettingTheColors();
paintTheBoard();
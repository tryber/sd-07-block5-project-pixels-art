let selected = document.querySelector('.selected');
const colors = document.querySelectorAll('.color');

function initialPixelBoard(boardSize) {
  const pixelBoard = document.querySelector('.pixel-board');
  for (let rows = 0; rows < boardSize; rows += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.classList.add('pixel-row');
    for (let cells = 0; cells < boardSize; cells += 1) {
      const pixelCell = document.createElement('div');
      pixelCell.classList.add('pixel', 'border');
      pixelCell.style.backgroundColor = 'white';
      pixelRow.appendChild(pixelCell);
    }
    pixelBoard.appendChild(pixelRow);
  }
}

function randomColors() {
  colors[0].style.backgroundColor = 'black';

  for (let random = 1; random < colors.length; random += 1) {
    const randomRed = Math.ceil(Math.random() * 255) + 1;
    const randomGreen = Math.ceil(Math.random() * 255) + 1;
    const randomBlue = Math.ceil(Math.random() * 255) + 1;
    colors[random].style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  }
}

function gettingTheColors() {
  for (const btn of colors) {
    btn.addEventListener('click', function () {
      if (!event.target.classList.contains('selected')) {
        selected.classList.remove('selected');
        event.target.classList.add('selected');
      }
      selected = document.querySelector('.selected');
    });
  }
}

function paintTheBoard() {
  const pixels = document.querySelectorAll('.pixel');

  for (const cell of pixels) {
    cell.addEventListener('click', function () {
      event.target.style.backgroundColor = selected.style.backgroundColor;
    })
  }
}


//  User-generated border
function userBoard() {
  const pixelBoard = document.querySelector('.pixel-board');
  const generateBoard = document.querySelector('#generate-board');

  generateBoard.addEventListener('click', function () {
    const userBoardSize = document.getElementById('board-size');

    if (userBoardSize.value === '') {
      alert('Board inválido!');
    } else if (userBoardSize.value >= 0 && userBoardSize.value < 5) {
      userBoardSize.stepUp(5 - userBoardSize.value);
    } else if (userBoardSize.value > 50) {
      userBoardSize.stepDown(userBoardSize.value - 50);
    }
    pixelBoard.innerHTML = '';
    initialPixelBoard(userBoardSize.value); //ok
    gettingTheColors();
    paintTheBoard();
  });
}
//  Clearing the board
document.querySelector('#clear-board').addEventListener('click', function () {
  const pixels = document.querySelectorAll('.pixel');
  for (const cell of pixels) {
    cell.style.backgroundColor = 'white';
  }
});

initialPixelBoard(5);
randomColors();
gettingTheColors();
paintTheBoard();
userBoard();

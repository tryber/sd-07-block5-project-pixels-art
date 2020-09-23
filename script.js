
const pixelBoard = document.getElementById('pixel-board');

const boardSize = document.getElementById('board-size');


const divLines = [];
const pixel = [];


function rndRGB() {
  return (Math.floor(parseInt(Math.random() * 255, 10)));
}


function randRGB() {
  return (`rgb(${rndRGB()} , ${rndRGB()} , ${rndRGB()})`);
}

function testBoardSize() {
  if (parseInt(boardSize.value, 10) < 5) { // parseInt(boardSize.min)) {
    boardSize.value = 5; // boardSize.min;
  }
  if (parseInt(boardSize.value, 10) > parseInt(boardSize.max, 10)) {
    boardSize.value = boardSize.max;
  }
}

function positionCanvas(N) {
  
  const dimension = (40 * N) + (2 * N);
  pixelBoard.style.height = `${dimension}px`;
  pixelBoard.style.width = `${dimension}px`;

  
  const main = document.querySelector('main');

  

  main.style.height = 'calc(100% - 165px)';
  main.style.width = '100%';

  const canvas = document.querySelector('.canvas');
  const heightMain = parseInt(window.getComputedStyle(main).height, 10);
  const widthMain = parseInt(window.getComputedStyle(main).width, 10);
  let canvasTop = (heightMain / 2) - (dimension / 2);
  let canvasLeft = (widthMain / 2) - (dimension / 2);

  if (canvasTop < 10) {
    canvasTop = 10;
  }
  if (canvasLeft < 10) {
    canvasLeft = 10;
  }


  if (heightMain <= (dimension + (2 * 7) + (2 * 1) + (2 * 10))) {
    main.style.height = `${(dimension + (2 * 7) + (2 * 1) + (2 * 20))}px`;
  }
  if (widthMain <= (dimension + (2 * 7) + (2 * 1) + (2 * 10))) {
    main.style.width = `${(dimension + (2 * 7) + (2 * 1) + (2 * 20))}px`;
  }
  canvas.style.top = `${canvasTop}px`;
  canvas.style.left = `${canvasLeft}px`;
}


function pixelGenerator(N) {
  
  pixelBoard.innerHTML = '';

  positionCanvas(N);

 
  for (let i = 0; i < N; i += 1) {
    divLines[i] = document.createElement('div');
    divLines[i].className = 'boardLines';
    pixelBoard.appendChild(divLines[i]);


    for (let j = 0; j < N; j += 1) {
      pixel[(i * N) + j] = document.createElement('div');
      pixel[(i * N) + j].className = 'pixel';
      divLines[i].appendChild(pixel[(i * N) + j]);
    }
  }
  return (true);
}

boardSize.addEventListener('change', testBoardSize);


const generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', function () {
  if ((boardSize.value <= 0)) {
    alert('Board inválido!');
    return (false);
  }
  if (boardSize.value < 5) {
    boardSize.value = 5;
  }
  if (boardSize.value > 50) {
    boardSize.value = 50;
  }
  pixelGenerator(boardSize.value);
});


pixelGenerator(5);


const colorSelected = document.getElementsByClassName('color');
colorSelected[1].style.backgroundColor = randRGB();
colorSelected[2].style.backgroundColor = randRGB();
colorSelected[3].style.backgroundColor = randRGB();


const colorPalette = document.getElementById('color-palette');

colorPalette.addEventListener('click', function (event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');

  const fontColor = document.getElementsByClassName('colorFont');
  fontColor[0].style.backgroundColor = window.getComputedStyle(event.target).backgroundColor;
});

pixelBoard.addEventListener('click', function (event) {
  const color = document.querySelector('.selected');
  
  event.target.style.backgroundColor = window.getComputedStyle(color).backgroundColor;
});

const buttonClear = document.getElementById('clear-board');

buttonClear.addEventListener('click', function () {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});
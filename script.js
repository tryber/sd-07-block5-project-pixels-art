// colorindo os elementos da paleta de cores
const arrayPaletteColor = document.getElementsByClassName('color');
// console.log(arrayPaletteColor);
arrayPaletteColor[0].style.backgroundColor = 'black';
arrayPaletteColor[0].classList.add('selected');

for (let index = 1; index < 4; index += 1) {
  arrayPaletteColor[index].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} , ${Math.floor(Math.random() * 255)} , ${Math.floor(Math.random() * 255)})`;
}

// adicionando evento click na paleta de cores
function addEventClick() {
  for (let index = 0; index < arrayPaletteColor.length; index += 1) {
    arrayPaletteColor[index].addEventListener('click', function (event) {
      const selected = document.querySelector('.selected'); // pega a cor que está selecionada
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}

// função para criar um pixel
function createPixel(className) {
  const pixel = document.createElement('div');
  pixel.classList.add(className);
  return pixel;
}

// função criar a div de cada linha de pixels
function createLine(numberPixels) {
  const divLine = document.createElement('div');
  for (let index = 0; index < numberPixels; index += 1) {
    const pixel = createPixel('pixel');
    divLine.appendChild(pixel);
  }
  return divLine;
}

// função para criar board de tamanho nxn
function createPixelBoard(numberPixels) {
  // recebe numero pixels
  const board = document.getElementById('pixel-board'); // pega a div do HTML
  for (let line = 1; line <= numberPixels; line += 1) {
    // add a qntd de linhas
    const divLine = createLine(numberPixels); // cria a linha
    board.appendChild(divLine);
  }
}

// código criado em conjuno no grupo de estudos Trybe Turma-07 ------
// pintar board
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', function (event) {
  const selected = document.querySelector('.selected');
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
  }
});

// limpar o board
const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', function () {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

// Board definido pelo usuário com min 5 e máximo 50px
const buttonCreatBoard = document.getElementById('generate-board');
buttonCreatBoard.addEventListener('click', function () {
  const numberPixelsLine = document.getElementById('board-size').value;
  const numberPixelsMin = 5;
  const numberPixelsMax = 50;
  const board = document.getElementById('pixel-board');
  board.innerHTML = '';
  // console.log(numberPixelsLine);
  if (numberPixelsLine === '') {
    alert('Board inválido!');
  } else if (numberPixelsLine < 5) {
    createPixelBoard(numberPixelsMin);
  } else if (numberPixelsLine > 50) {
    createPixelBoard(numberPixelsMax);
  } else {
    createPixelBoard(numberPixelsLine);
  }
});

const numberPixelsLineInitial = 5;

createPixelBoard(numberPixelsLineInitial);
addEventClick();

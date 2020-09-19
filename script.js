// altera a cor do pixel selecionado no quadro de pixels
function changeBackgroundColor() {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  this.style.backgroundColor = selectedColor;
}

// aletera a classe selected conforme seleção da paleta de cores
function selectColor(allElements, selectedElement) {
  for (let index = 0; index < allElements.length; index += 1) {
    allElements[index].className = 'color';
  }
  selectedElement.className = 'color selected';
}

// limpa o quadro de pixels
function clearBoardPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

// gerador de cores rbg aleatório
function rgbRandom() {
  return Math.floor(Math.random() * 256);
}

// criação da paleta de cores
function colorPaletteGenerator(elements) {
  const paletaCores = ['black'];
  for (let index = 1; index < 4; index += 1) {
    paletaCores.push(`rgb(${rgbRandom()},${rgbRandom()},${rgbRandom()})`);
  }
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].style.backgroundColor = paletaCores[index];
    elements[index].addEventListener('click', function () {
      selectColor(elements, this);
    });
  }
}

// limitando o input '#board-size' entre 5 e 50
function limitBoardSize(inputSize) {
  let size = '';
  if (inputSize < 5) {
    size = 5;
  } else if (inputSize > 50) {
    size = 50;
  } else size = inputSize;
  document.querySelector('#board-size').value = '';
  return size;
}

// gerando o pixel board
function pixelBoardGenerator(element, boardSize) {
  if (boardSize === '') {
    alert('Board inválido!');
  } else {
    boardSize = limitBoardSize(boardSize);
    element.innerHTML = '';
    element.style.maxWidth = `${(boardSize * 40) + (boardSize * 2)}px`;
    for (let pixel = 0; pixel < boardSize ** 2; pixel += 1) {
      const board = document.createElement('div');
      board.className = 'pixel';
      board.addEventListener('click', changeBackgroundColor);
      element.appendChild(board);
    }
  }
}

window.onload = function () {
  const divColor = document.querySelectorAll('.color');

  // cria paleta de cores aleatória
  colorPaletteGenerator(divColor);

  // criação do quadro de pixels 5x5
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoardGenerator(pixelBoard, 5);

  // limpa quadro de pixels
  const clearBoardButton = document.querySelector('#clear-board');
  clearBoardButton.addEventListener('click', clearBoardPixel);

  // criação do quadro de pixel personalizado, entre 5x5 e 50x50 pixels
  const generateBoardButton = document.querySelector('#generate-board');
  generateBoardButton.addEventListener('click', function () {
    const boardSizeInput = document.querySelector('#board-size').value;
    pixelBoardGenerator(pixelBoard, boardSizeInput);
  });
};

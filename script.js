// Seleciona o id #board-size
const boardSize = document.querySelector('#board-size');
// Seleciona o id #generate-board
const btnGenerateBoard = document.querySelector('#generate-board');
// Seleciona o id #pixel-board
const pixelBoard = document.querySelector('#pixel-board');
// Declaração de variavel
let boardSizeValue = '';
// Seleciona todas as divs com classe .pixel
let allPixels = document.querySelectorAll('.pixel');
// Seleciona todas as divs com classe color
const color = document.querySelectorAll('.color');
// Seleciona a div com classe selected
let selectedDiv = document.querySelector('.selected');
// Seleciona o button com id #clear-board
let clearAllBtn = document.querySelector('#clear-board');
// Adiciona um evento no input e retorna o valor digitado pelo usuário;
boardSize.addEventListener('input', function () {
  boardSizeValue = document.querySelector('#board-size').value;
  return boardSizeValue;
});
// Função responsável por criar as linhas
function createLine() {
  for (let i = 0; i < parseInt(boardSizeValue, 0); i += 1) {
    // Cria um elemento div e atrubui a classe e id line
    const line = document.createElement('div');
    line.className = 'line';
    line.id = 'line';
    // Adiciona a div criada a pixelBoard
    pixelBoard.appendChild(line);
  }
}
// Função responsável por criar cada pixel em cada linha
function createPixel() {
  // Seleciona todas as divs com classe line
  const line = document.querySelectorAll('.line');
  for (let i = 0; i < line.length; i += 1) {
    for (let j = 0; j < line.length; j += 1) {
      // criando um uma div e atribuindo a classe pixel
      const pixelMaker = document.createElement('div');
      pixelMaker.className = 'pixel';
      // Adiciona a div criada na linha selecionada
      line[j].appendChild(pixelMaker);
    }
  }
}
// Função responsável por apagar o quadro
function deleteBoard() {
  // Enquanto pixelBoard tiver algum filho será deletado o primeiro filho
  while (pixelBoard.hasChildNodes()) {
    pixelBoard.removeChild(pixelBoard.childNodes[0]);
  }
}
function createEventPixel() {
  // Atualiza a variavel allPixels
  allPixels = document.querySelectorAll('.pixel');
  for (let j = 0; j < allPixels.length; j += 1) {
    // Cria um evento em cada pixel
    allPixels[j].addEventListener('click', function () {
      // Atualiza a variavel selectedDiv
      selectedDiv = document.querySelector('.selected');
      // Atribui o atual style.backgroundColor da selectedDiv a allPixels selecionado
      allPixels[j].style.backgroundColor = window.getComputedStyle(selectedDiv).backgroundColor;
    });
  }
}
// Chama a função createEventPixel
createEventPixel();
// Função responsavel de criar o quadro chamando outras funções
function createBoard() {
  deleteBoard();
  createLine();
  createPixel();
  createEventPixel();
}
// Adiciona um evento ao botão btnGenerateBoard
btnGenerateBoard.addEventListener('click', function () {
  // Se o valor de boardSizeValue for vazio retorna um alert
  if (boardSizeValue === '') {
    alert('Board inválido!');
  }
  // Chama a função createBoard
  createBoard();
});
// Função responsável por selecionar a cor
function selected() {
  for (let i = 0; i < color.length; i += 1) {
    // Cria um evento em cada div com classe color
    color[i].addEventListener('click', function () {
      // Atualiza a variavel selectedDiv
      selectedDiv = document.querySelector('.selected');
      // Remove a classe select da div selecionada
      selectedDiv.classList.remove('selected');
      // Adicona a classe selected a div color clicada
      color[i].classList.add('selected');
    });
  }
}
// Chama a função selected
selected();
// Função responsável por limpar o quadro
function clearAll() {
  // Atualiza a variavel clearAllBtn
  clearAllBtn = document.querySelector('#clear-board');
  // Adiciona um evento a clearAllBtn
  clearAllBtn.addEventListener('click', function () {
    // Atualiza a variavel allPixels
    allPixels = document.querySelectorAll('.pixel');
    for (let j = 0; j < allPixels.length; j += 1) {
      // Passa por todos pixels mudando a cor de background para white
      allPixels[j].style.backgroundColor = 'white';
    }
  });
}
// Chama a função clearAll
clearAll();

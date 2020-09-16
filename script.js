// cria botões para selecionar cor
const btnBlack = document.querySelector('#black');
const btnOrange = document.querySelector('#orange');
const btnOrchid = document.querySelector('#orchid');
const btnBlue = document.querySelector('#blue');
let color = 'black';
// trata evento selecionar elementos com cor
btnBlack.addEventListener('click', function () {
  btnBlack.classList.add('selected');
  btnOrange.classList.remove('selected');
  btnOrchid.classList.remove('selected');
  btnBlue.classList.remove('selected');
  color = window.getComputedStyle(btnBlack).getPropertyValue('background-color');
});
btnOrange.addEventListener('click', function () {
  btnOrange.classList.add('selected');
  btnBlack.classList.remove('selected');
  btnOrchid.classList.remove('selected');
  btnBlue.classList.remove('selected');
  color = window.getComputedStyle(btnOrange).getPropertyValue('background-color');
});
btnOrchid.addEventListener('click', function () {
  btnOrchid.classList.add('selected');
  btnBlack.classList.remove('selected');
  btnOrange.classList.remove('selected');
  btnBlue.classList.remove('selected');
  color = window.getComputedStyle(btnOrchid).getPropertyValue('background-color');
});
btnBlue.addEventListener('click', function () {
  btnBlue.classList.add('selected');
  btnBlack.classList.remove('selected');
  btnOrchid.classList.remove('selected');
  btnOrange.classList.remove('selected');
  color = window.getComputedStyle(btnBlue).getPropertyValue('background-color');
});
//  trata evento acrescentar cor no quadrado/ refatora p/ codeClimate/ ajuda Thadeu Ramos
function trocaCor() {
  document.querySelectorAll('.pixel').forEach((item) => {
    item.addEventListener('click', function () {
      item.style.backgroundColor = color;
    });
  });
}
//  cria linhas e quadradinhos
const pixelBoard = document.querySelector('#pixel-board');
const buttonInput = document.querySelector('#generate-board');
function makeBoard(number) {
  pixelBoard.innerHTML = '';
  for (let lIndex = 0; lIndex < number; lIndex += 1) {
    const lPixelBoard = document.createElement('div');
    lPixelBoard.className = 'line';
    pixelBoard.appendChild(lPixelBoard);
    for (let pIndex = 0; pIndex < number; pIndex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      lPixelBoard.appendChild(pixel);
    } trocaCor();
  }
}
//  gera numeros para cores randomicas
function getRandomArray() {
  const array = [];
  for (let index = 0; index < 3; index += 1) {
    const number = Math.round(Math.random() * 255);
    array.push(number);
  }
  return array;
}
//  trata evento criar o board com 5 pixel ao abrir a página
window.onload = function () {
  makeBoard(5);
  const color2 = getRandomArray();
  const color3 = getRandomArray();
  const color4 = getRandomArray();

  btnOrange.style.backgroundColor = `rgb(${color2})`;
  btnOrchid.style.backgroundColor = `rgb(${color3})`;
  btnBlue.style.backgroundColor = `rgb(${color4})`;
};
buttonInput.addEventListener('click', function () {
  const numberInput = document.querySelector('#board-size').value;
  const number = numberInput;
  if (number === '') {
    alert('Board inválido!');
  } else if (number < 5) {
    makeBoard(5);
  } else if (number > 50) {
    makeBoard(50);
  } else {
    makeBoard(number);
  }
});
//  cria botão que limpa tudo
const board = document.getElementsByClassName('pixel');
const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', function () {
  for (let index = 0; index < board.length; index += 1) {
    board[index].style.backgroundColor = 'white';
  }
});

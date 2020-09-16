window.onload = function () {
  document.getElementsByClassName('color')[0].classList.add('selected');
};

const tabelaLinha = [1, 5];
const tabelaCelula = [4, 5];
const tipoTag = ['div', 'tr'];
const tipoTag2 = ['div', 'td'];
const qualIdVincular = ['color-palette', 'pixel-board'];
const nomeClasse = ['color', 'pixel'];
const classeVinculo = ['paletaCoresLinha', 'pixelLinha'];
const btVqv = document.getElementById('generate-board');
const inputBoard = document.getElementById('board-size');
const tableId = document.getElementById('pixel-board');

function linhaTabela(tpTag, idVinculo, classVinculo) {
  const quadradinho = document.createElement(tpTag);
  document.getElementById(idVinculo).appendChild(quadradinho);
  quadradinho.style.display = 'table-row';
  quadradinho.className = classVinculo;
}

function backGndColor() {
  const backGndColorSelected =
    document.getElementsByClassName('color selected')[0].style.backgroundColor;
  this.style.backgroundColor = backGndColorSelected;
}

function colunaTabela(tpTag2, nmClasse, classVinculo2, index1) {
  const quadradinho = document.createElement(tpTag2);
  document.getElementsByClassName(classVinculo2)[index1].appendChild(quadradinho);
  quadradinho.style.display = 'table-cell';
  quadradinho.className = nmClasse;
  if (quadradinho.className === 'pixel') {
    quadradinho.addEventListener('click', backGndColor);
  }
}

function selecionarCor() {
  if (document.getElementsByClassName('color selected')[0]) {
    document.getElementsByClassName('color selected')[0].classList.remove('selected');
  }
  this.classList.add('selected');
}

function coresEscolhas(coresDoRandon) {
  const arrayCores = coresDoRandon;
  for (let i = 0; i < arrayCores.length; i += 1) {
    document.getElementsByClassName('color')[i].style.backgroundColor = arrayCores[i];
    document.getElementsByClassName('color')[i].addEventListener('click', selecionarCor);
  }
}

function randonColors() {
  const coresRandon = ['black'];
  const cores = ['yellow', 'red', 'green', 'purple', 'aqua', 'peachpuff', 'pink', 'indigo', 'darkred', 'lightgreen'];
  for (let contagem = 0; contagem < 3; contagem += 1) {
    const randonCor = Math.ceil(Math.random() * 7);
    coresRandon.push(cores.splice(randonCor, 1));
  }
  coresEscolhas(coresRandon);
}

function botaoLimpar() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
document.getElementById('clear-board').addEventListener('click', botaoLimpar);

function criaPaletaDeEscolhas(i) {
  for (let index1 = 0; index1 < tabelaLinha[i]; index1 += 1) {
    linhaTabela(tipoTag[i], qualIdVincular[i], classeVinculo[i]);
    for (let index2 = 0; index2 < tabelaCelula[i]; index2 += 1) {
      colunaTabela(tipoTag2[i], nomeClasse[i], classeVinculo[i], index1);
    }
  }
}

function createBoard(qntCell) {
  tabelaLinha.pop();
  tabelaLinha.push(qntCell);
  tabelaCelula.pop();
  tabelaCelula.push(qntCell);
  criaPaletaDeEscolhas(1);
}

function minManRange() {
  const qntCell1 = inputBoard.value;
  if (qntCell1 < 5) {
    createBoard(5);
  } else if (qntCell1 > 50) {
    createBoard(50);
  } else {
    createBoard(qntCell1);
  }
}

function eraseBoard() {
  if (tableId.childElementCount > 0) {
    do {
      tableId.removeChild(tableId.children[0]);
    }
    while (tableId.childElementCount > 0);
  }
  minManRange();
}

function emptyCheck() {
  if (inputBoard.value === '') {
    alert('Board inválido!');
  } else {
    eraseBoard();
  }
}

criaPaletaDeEscolhas(0);
criaPaletaDeEscolhas(1);
randonColors();

btVqv.addEventListener('click', emptyCheck);

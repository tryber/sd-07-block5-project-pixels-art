const COR = ['black'];
const botaoLimpar = document.getElementById('clear-board');
const quadroDePixel = document.getElementById('pixel-board');
const pixels = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');
const botaoSize = document.getElementById('generate-board');
let posColor = 0;


const retiraSelected = function (elements) {
  elements.forEach((elem) => {
    elem.className = elem.className.replace(' selected', '');
  });
};

// Limpar cor dos pixels
const limparPaleta = function () {
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  });
};

const colorirPixels = function (event) {
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = COR[posColor];
  }
};

function eliminaTags() {
  const netos = document.querySelectorAll('.pixel');
  const filhos = document.querySelectorAll('.pixel-linha');

  netos.forEach((item) => {
    item.parentNode.removeChild(item);
  });

  filhos.forEach((item) => {
    item.parentNode.removeChild(item);
  });
}

function criaTag(num) {
  const divPai = document.getElementById('pixel-board');

  for (let index = 0; index < num; index += 1) {
    const novoFilho = document.createElement('div');
    novoFilho.classList.add('pixel-linha');

    for (let pos = 0; pos < num; pos += 1) {
      const neto = document.createElement('div');
      neto.className = 'pixel';
      novoFilho.appendChild(neto);
    }

    divPai.appendChild(novoFilho);
  }
}

// Definindo as ações do botão de seleção de tamanho pelo usuario
const gerarPixels = function () {
  const size = document.getElementById('board-size');

  if (size.value !== '') {
    eliminaTags();

    if (size.value < 5) {
      size.value = 5;
    } else if (size.value > 50) {
      size.value = 50;
    }

    criaTag(size.value);

    pixels.forEach((pixel) => {
      if (parseInt(size.value, 10) > 0) {
        pixel.style.width = `${size.value}px`;
        pixel.style.height = `${size.value}px`;
        pixel.style.backgroundColor = 'white';
      }
    });
  } else {
    alert('Board inválido!');
  }
  size.value = '';
};

/** FONTE: http://www.criarweb.com/artigos/gerar-cor-aleatoria-javascript.html#:~:text=Para%20criar%20uma%20cor%20aleat%C3%B3rio,c%C3%B3digo%20de%20uma%20cor%20aleat%C3%B3ria. */

function gerarCorAleatoria(arrayCor) {
  const hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  let qtdCores = 3;

  while (qtdCores) {
    let qtdCaracters = 6;
    let corAleatoria = '#';

    while (qtdCaracters) {
      const posicao = Math.floor(Math.random() * hexadecimal.length);
      corAleatoria += hexadecimal[posicao];
      qtdCaracters -= 1;
    }
    arrayCor.push(corAleatoria);
    qtdCores -= 1;
  }
  return arrayCor;
}

colors.forEach((element, index, array) => {
  element.addEventListener('click', function () {
    retiraSelected(array);
    element.className += ' selected';
    posColor = index;
  });
});

window.onload = function () {
  gerarCorAleatoria(COR);

  (function () {
    colors.forEach((divCor, index) => {
      divCor.style.backgroundColor = COR[index];
    });
  }());

  botaoSize.addEventListener('click', gerarPixels);
  botaoLimpar.addEventListener('click', limparPaleta);
  quadroDePixel.addEventListener('click', colorirPixels);
};

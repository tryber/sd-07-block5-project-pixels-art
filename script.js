function geraCor() {
  let r = Math.random() * (255);
  r = parseInt(r, 10);
  const g = Math.random() * (255);
  r = parseInt(g, 10);
  const b = Math.random() * (255);
  r = parseInt(b, 10);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}
function coresPaleta() {
  for (let index = 0; index < document.querySelector('#color-palette').children.length; index += 1) {
    const cor = geraCor();
    document.querySelector('#color-palette').children[index].style.backgroundColor = cor;
  }
  document.querySelector('#color-palette').children[0].style.backgroundColor = 'black';
}
function trocaCor() {
  const selecionandoPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < selecionandoPixel.length; index += 1) {
    selecionandoPixel[index].addEventListener('click', function () {
      this.style.backgroundColor = window.getComputedStyle(document.getElementsByClassName('color selected')[0]).backgroundColor;
    });
  }
}
function criaQuadro(tamanho) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  for (let index = 0; index < (tamanho); index += 1) {
    document.querySelector('#pixel-board').appendChild(document.createElement('div'));
    document.querySelector('#pixel-board').children[index].classList.add('linha');
    for (let index2 = 0; index2 < tamanho; index2 += 1) {
      document.querySelectorAll('.linha')[index].appendChild(document.createElement('div'));
      document.querySelectorAll('.linha')[index].children[index2].classList.add('pixel');
    }
  }
  trocaCor();
}
window.onload = function () {
  criaQuadro(5);
  coresPaleta();
};
const selecionandoCor = document.getElementById('color-palette').children;
for (let index = 0; index < selecionandoCor.length; index += 1) {
  selecionandoCor[index].addEventListener('click', function () {
    document.getElementsByClassName('color selected')[0].classList.remove('selected');
    this.classList.add('selected');
  });
}
const botaoLimpaTela = document.getElementById('clear-board');
const selecionandoPixel = document.getElementsByClassName('pixel');
botaoLimpaTela.addEventListener('click', function () {
  for (let index = 0; index < selecionandoPixel.length; index += 1) {
    selecionandoPixel[index].style.backgroundColor = 'white';
  }
  document.getElementById('board-size').value = '';
});
const botaoVqv = document.querySelector('#generate-board');
botaoVqv.addEventListener('click', function () {
  let tamanhoQuadro = document.querySelector('#board-size').value;
  if (tamanhoQuadro === '') {
    window.alert('Board inválido!');
  } else if (tamanhoQuadro < 5) {
    tamanhoQuadro = 5;
  } else if (tamanhoQuadro > 50) {
    tamanhoQuadro = 50;
  }
  criaQuadro(tamanhoQuadro);
});

const paletteColor = document.querySelectorAll('#color-palette .color');
function geraCores() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  const cores = `rgb(${r}, ${g}, ${b})`;
  return cores;
}
for (let index = 0; index < paletteColor.length; index += 1) {
  const colors = ['black', geraCores(), geraCores(), geraCores()];
  paletteColor[index].style.backgroundColor = colors[index];
}

function paintSelected() {
  const boardPixel = document.querySelectorAll('#pixel-board .pixel');
  for (let aux = 0; aux < paletteColor.length; aux += 1) {
    paletteColor[aux].addEventListener('click', () => {
      for (let sel = 0; sel < paletteColor.length; sel += 1) {
        if (paletteColor[sel].className === 'color selected') {
          paletteColor[sel].classList.remove('selected');
        }
      }
      paletteColor[aux].classList.add('selected');
      if (paletteColor[aux].className === 'color selected') {
        for (let index = 0; index < boardPixel.length; index += 1) {
          boardPixel[index].addEventListener('click', function () {
            boardPixel[index].style.backgroundColor = paletteColor[aux].style.backgroundColor;
          });
        }
      }
    });
  }
}

function limpar() {
  const boardPixel = document.querySelectorAll('#pixel-board .pixel');
  const botaoLimpar = document.querySelector('#clear-board');
  botaoLimpar.addEventListener('click', () => {
    for (let index = 0; index < boardPixel.length; index += 1) {
      boardPixel[index].style.backgroundColor = 'white';
    }
  });
}

function initPage() {
  const boardPixel = document.querySelectorAll('#pixel-board .pixel');
  for (let index = 0; index < boardPixel.length; index += 1) {
    paletteColor[0].classList.add('color');
    paletteColor[0].classList.add('selected');
    boardPixel[index].addEventListener('click', function () {
      boardPixel[index].style.backgroundColor = paletteColor[0].style.backgroundColor;
    });
  }
}
window.onload = initPage;

function initial(number) {
  for (let aux = 0; aux < number; aux += 1) {
    for (let index = 0; index < number; index += 1) {
      const pixels = document.createElement('div');
      pixels.className = 'pixel';
      document.querySelector('#pixel-board').appendChild(pixels);
    }
    const br = document.createElement('br');
    document.querySelector('#pixel-board').appendChild(br);
  }
  paintSelected();
  limpar();
  initPage();
}

const botaoGerar = document.querySelector('#generate-board');
const inputNumber = document.querySelector('#board-size');
let number = 5;
initial(number);
botaoGerar.addEventListener('click', () => {
  if (inputNumber.value === '' || inputNumber.value <= 0) {
    alert('Board inválido!');
    inputNumber.value = '';
    number = 5;
    initial(number);
  } else if (inputNumber.value > 0 && inputNumber.value < 5) {
    alert('Board inválido!');
    inputNumber.value = 5;
  } else if (inputNumber.value > 50) {
    alert('Board inválido!');
    inputNumber.value = 50;
  }
  for (let aux = 0; aux < number; aux += 1) {
    for (let index = 0; index < number; index += 1) {
      const pixel = document.querySelector('#pixel-board .pixel');
      document.querySelector('#pixel-board').removeChild(pixel);
    }
  }
  if (inputNumber.value >= 5) {
    number = inputNumber.value;
    initial(number);
  }
});

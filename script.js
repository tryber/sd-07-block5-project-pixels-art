const colors = document.querySelectorAll('.color');
const reset = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');
const corAtual = {
  bg: '#000000',
};

colors[0].style.backgroundColor = '#000000';
colors[0].classList.add('selected');

function geraCor() {
  const letras = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i += 1) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  if (cor === '#FFFFFF') {
    geraCor();
  }
  return cor;
}

for (let i = 1; i < colors.length; i += 1) {
  colors[i].style.backgroundColor = geraCor();
}

function removeSelected() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', function () {
    removeSelected();
    colors[i].classList.add('selected');
    const selected = document.querySelector('.selected');
    corAtual.bg = getComputedStyle(selected).backgroundColor;
  });
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function () {
    pixels[i].style.backgroundColor = corAtual.bg;
  });
}

reset.addEventListener('click', function () {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '#ffffff';
  }
  removeSelected();
  colors[0].classList.add('selected');
  const selected = document.querySelector('.selected');
  corAtual.bg = getComputedStyle(selected).backgroundColor;
});

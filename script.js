const colorBlack = document.getElementById('color-one');
colorBlack.style.backgroundColor = 'black';

const colorRed = document.getElementById('color-two');
colorRed.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;

const colorBlue = document.getElementById('color-three');
colorBlue.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;

const colorGreen = document.getElementById('color-four');
colorGreen.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;

// EVENTO DE SELEÇÃO DA COR ESCOLHIDA
document.getElementById('color-palette').addEventListener('click', function(event) {
  let colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
      colors[i].classList.remove('selected');
  }
  let selectedColor = event.target;
  selectedColor.classList.add('selected');
})

// EVENTO QUE JOGA A COR ESCOLHIDA NO PIXEL CLICADO
document.getElementById('pixel-board').addEventListener('click', function (event) {
  let selectedPixel = event.target;
  let selectedColor = document.querySelector('.selected');
  selectedPixel.style.backgroundColor = selectedColor.style.backgroundColor; 
})

// EVENTO PARA LIMPAR O BOARD DE PIXELS
document.getElementById('clear-board').addEventListener('click', function() {
  let pixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    let pixelOnClick = pixel[i];
    pixelOnClick.style.backgroundColor = 'white';
  }
})

// EVENTO PARA GERAR PIXEL BOARD PELO USUÁRIO
document.getElementById('generate-board').addEventListener('click', function() {
  
    let numberLines = document.getElementById('board-size').value;
    let dadBox = document.getElementById('pixel-board');
    
    if (numberLines === '') {
      alert('Board Inválido!');
    }

    if (numberLines < 5 && numberLines > 0) {
      alert('mínimo 5');
      dadBox.innerHTML = '';
      for (let i = 0; i < 25; i += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        dadBox.appendChild(pixel);
      }
    }

    if (numberLines > 50) {
      alert('máximo 50');
      dadBox.innerHTML = '';
      for (let i = 0; i < 2500; i += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        dadBox.appendChild(pixel);
      }
    }

    if (numberLines >= 5 && numberLines <= 50) {
      dadBox.innerHTML = '';
      for (let i = 0; i < numberLines * numberLines; i += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        dadBox.appendChild(pixel);
      }
    }
})

function quadroPixels() {
  for (let i = 0; i < 25; i += 1) {
    const quadro = document.getElementById('pixel-board');
    const divQuadro = document.createElement('div');
    divQuadro.id = `pixel${i + 1}`;
    divQuadro.className = 'pixel';
    divQuadro.addEventListener('click', function () {
      const getElement = document.getElementById(`${returnColor()}`);
      if (getElement.id === 'color1') {
        divQuadro.style.backgroundColor = 'black';
      } else if (getElement.id === 'color2') {
        divQuadro.style.backgroundColor = 'red';
      } else if (getElement.id === 'color3') {
        divQuadro.style.backgroundColor = 'green';
      } else if (getElement.id === 'color4') {
        divQuadro.style.backgroundColor = 'yellow';
      }
    });
    quadro.appendChild(divQuadro);
  }
}

quadroPixels();

const selectedColorBlack = document.getElementById('color1');
const selectedColorRed = document.getElementById('color2');
const selectedColorGreen = document.getElementById('color3');
const selectedColorYellow = document.getElementById('color4');

function removeSelected() {
  selectedColorBlack.classList.remove('selected');
  selectedColorRed.classList.remove('selected');
  selectedColorGreen.classList.remove('selected');
  selectedColorYellow.classList.remove('selected');
}

selectedColorBlack.addEventListener('click', function () {
  removeSelected();
  selectedColorBlack.classList.add('selected');
});

selectedColorRed.addEventListener('click', function () {
  removeSelected();
  selectedColorRed.classList.add('selected');
});

selectedColorGreen.addEventListener('click', function () {
  removeSelected();
  selectedColorGreen.classList.add('selected');
});

selectedColorYellow.addEventListener('click', function () {
  removeSelected();
  selectedColorYellow.classList.add('selected');
});

const btn = document.getElementById('clear-board');
btn.addEventListener('click', function () {
  const x = document.getElementById('pixel-board');
  const y = x.getElementsByTagName('*');
  let i;
  for (i = 0; i < y.length; i += 1) {
    y[i].style.backgroundColor = 'white';
  }
});

const x = document.getElementById('color-palette');
const y = x.getElementsByTagName('*');
function returnColor() {
  let i;
  let idSelected = '';

  for (i = 0; i < y.length; i += 1) {
    if (y[i].classList.contains('selected')) {
      idSelected = y[i].id;
    }
  }
  return `${idSelected}`;
}

returnColor();

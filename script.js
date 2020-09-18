const select = document.querySelector('#color-palette');
const pixel = document.querySelector('#pixel-board');
const clear = document.querySelector('#clear-board');
const changeSize = document.querySelector('#generate-board');

function randomPalette() {
  // Random color code source: https://css-tricks.com/snippets/javascript/random-hex-color/
  document.getElementById('second').style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.getElementById('third').style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.getElementById('fourth').style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  if (document.getElementById('second').style.backgroundColor === '255255255' || document.getElementById('third').style.backgroundColor === '255255255' || document.getElementById('fourth').style.backgroundColor === '255255255') {
    randomPalette();
  }
  createBoard();
}

select.addEventListener('click', function () {
  if (event.target.id === 'fourth') {
    document.getElementById('black').className = 'color black';
    document.getElementById('second').className = 'color second';
    document.getElementById('third').className = 'color third';
    document.getElementById('fourth').className = 'color fourth selected';
  } else if (event.target.id === 'black') {
    document.getElementById('black').className = 'color black selected';
    document.getElementById('second').className = 'color second';
    document.getElementById('third').className = 'color third';
    document.getElementById('fourth').className = 'color fourth';
  } else if (event.target.id === 'second') {
    document.getElementById('black').className = 'color black';
    document.getElementById('second').className = 'color second selected';
    document.getElementById('third').className = 'color third';
    document.getElementById('fourth').className = 'color fourth';
  } else if (event.target.id === 'third') {
    document.getElementById('black').className = 'color black';
    document.getElementById('second').className = 'color second';
    document.getElementById('third').className = 'color third selected';
    document.getElementById('fourth').className = 'color fourth';
  }
});

pixel.addEventListener('click', function () {
  const selectedColor = document.getElementsByClassName('selected')[0];
  const pixelColor = getComputedStyle(selectedColor).backgroundColor;
  if (event.target.className.includes('pixel')) {
    event.target.style.backgroundColor = pixelColor;
  }
});

clear.addEventListener('click', function () {
  const boardLength = document.querySelectorAll('#pixel-board .pixel').length;
  for (let index = 0; index < boardLength; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
  }
});

// Creating a board with JavaScript

// const boardSize = document.querySelector('#board-size').value;


function createBoard() {

  for (let index = 0; index < 25; index += 1) {

    if (index === 5 || index === 10 || index === 15 || index === 20) {
      const broke = document.createElement('br');
      pixel.appendChild(broke);
    }

    let pixelItem = document.createElement('div');
    pixelItem.className = 'pixel';
    pixelItem.id = `${index}`;
    pixel.appendChild(pixelItem);
    

  }
}

// ******************************************************************************
const states = document.getElementById('states');
const brazilianStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa',  'Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function stateslist() {
  for(let index = 0; index < brazilianStates.length; index += 1) {
    let state = brazilianStates[index];
    let statesItem = document.createElement('option');
    statesItem.innerText = state;
    states.appendChild(statesItem);
  }
}

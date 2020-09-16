// Criando o header
const headerPage = document.createElement('header');
headerPage.className = 'head-class';
document.body.appendChild(headerPage);
// Criando H1
const titleProject = document.createElement('h1');
titleProject.innerHTML = 'Paleta de Cores';
titleProject.className = 'title';
titleProject.setAttribute('id', 'title');
headerPage.appendChild(titleProject);
// Criando o main
const mainPage = document.createElement('main');
mainPage.className = 'main-class';
document.body.appendChild(mainPage);
// criando o footer
const footerPage = document.createElement('footer');
footerPage.className = 'footer-class';
footerPage.innerText = 'Josiel - Turma #7 - Trybe';
document.body.appendChild(footerPage);

function colorGenerate() {
  const colorList = ['#000000'];
  let hexaColor = '#';
  for (let index = 1; index <= 3; index += 1) {
    for (let color = 1; color <= 6; color += 1) {
      hexaColor += Math.floor(Math.random() * 10);
    }
    colorList.push(hexaColor);
    hexaColor = '#';
  }
  return colorList;
}

function createPaletteColors(parent) {
  const palette = document.createElement('section');
  palette.className = 'color-palette';
  palette.setAttribute('id', 'color-palette');
  parent.appendChild(palette);
  const colorsPalette = colorGenerate();
  for (let index = 0; index < colorsPalette.length; index += 1) {
    if (index === 0) {
      const colorOfPalette = document.createElement('span');
      colorOfPalette.className = 'color selected';
      colorOfPalette.setAttribute('id', colorsPalette[index]);
      colorOfPalette.style.backgroundColor = colorsPalette[index];
      palette.appendChild(colorOfPalette);
    } else {
      const colorOfPalette = document.createElement('span');
      colorOfPalette.className = 'color';
      colorOfPalette.setAttribute('id', colorsPalette[index]);
      colorOfPalette.style.backgroundColor = colorsPalette[index];
      palette.appendChild(colorOfPalette);
    }
  }
}
createPaletteColors(mainPage);

function createButton(parent) {
  const SectionButtonClear = document.createElement('section');
  SectionButtonClear.className = 'section-button-clear';
  parent.appendChild(SectionButtonClear);
  const buttonClear = document.createElement('button');
  buttonClear.className = 'clear-board';
  buttonClear.setAttribute('id', 'clear-board');
  buttonClear.innerText = 'Limpar';
  SectionButtonClear.appendChild(buttonClear);
}
createButton(mainPage);

function createImputForInsertSize(parent) {
  // Criando a section
  const sectionInputAndButton = document.createElement('section');
  sectionInputAndButton.setAttribute('id', 'section-input');
  sectionInputAndButton.className = 'section-input';
  parent.appendChild(sectionInputAndButton);
  // Criando o input
  const inputSizeSquad = document.createElement('input');
  inputSizeSquad.setAttribute('type', 'number');
  inputSizeSquad.setAttribute('min', '1');
  inputSizeSquad.setAttribute('max', '50');
  inputSizeSquad.setAttribute('id', 'board-size');
  inputSizeSquad.className = 'board-size';
  sectionInputAndButton.appendChild(inputSizeSquad);
  // criando o button
  const buttonSizeSquad = document.createElement('button');
  buttonSizeSquad.setAttribute('id', 'generate-board');
  buttonSizeSquad.className = 'generate-board';
  buttonSizeSquad.innerText = 'VQV';
  sectionInputAndButton.appendChild(buttonSizeSquad);
}
createImputForInsertSize(mainPage);

function createBasePixelBoard(parent, squadSize) {
  // Criar a div base.
  const divAll = document.createElement('div');
  divAll.className = 'pixel-board';
  divAll.setAttribute('id', 'pixel-board');
  divAll.style.height = `${squadSize * 40}px`;
  divAll.style.width = `${squadSize * 40}px`;
  parent.appendChild(divAll);
  for (let lineIndex = 0; lineIndex < squadSize; lineIndex += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'line';
    divAll.appendChild(divLine);
    const lineActual = lineIndex;
    for (let pixelIndex = 0; pixelIndex < squadSize; pixelIndex += 1) {
      const pixel = document.createElement('div');
      pixel.setAttribute('id', `${lineActual}${pixelIndex}`);
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      divLine.appendChild(pixel);
    }
  }
}
createBasePixelBoard(mainPage, 5);

function selectedColorClass() {
  document.body.addEventListener('click', function (event) {
    // Item atual selecionado
    const idSelected = document.querySelectorAll('.selected')[0].id;
    const elementSelected = document.getElementById(idSelected);
    // Item clicado
    const idClicked = event.target.id;
    const elementClicked = document.getElementById(idClicked);
    // Troca de seleção de cores na paleta.,
    if (event.target.nodeName === 'SPAN') {
      elementSelected.classList.remove('selected');
      elementClicked.classList.add('selected');
    }
    // Pintando o pixel
    const isPixel = document.getElementById(idClicked).classList[0];
    if (isPixel === 'pixel') {
      elementClicked.style.backgroundColor = idSelected;
    }
  });
}
selectedColorClass();

function clearPixelsBoard() {
  document.body.addEventListener('click', function (event) {
    // Limpando a board
    if (event.target.nodeName === 'BUTTON' && event.target.id === 'clear-board') {
      // console.log(event.target.id)
      const clearAllPixel = document.querySelectorAll('.pixel');
      for (let index = 0; index < clearAllPixel.length; index += 1) {
        clearAllPixel[index].style.backgroundColor = 'white';
      }
    }
  });
}
clearPixelsBoard();

function boardNewSizeGenerator(sizeBoard) {
  const tagMainSelected = document.querySelector('.main-class');
  const elementBoard = document.getElementById('pixel-board');
  tagMainSelected.removeChild(elementBoard);
  createBasePixelBoard(tagMainSelected, sizeBoard);
}

function alterSizeBoard() {
  document.body.addEventListener('click', function (event) {
    // Pegando o input
    if (event.target.nodeName === 'BUTTON' && event.target.id === 'generate-board') {
      let valueNewBoard = document.getElementById('board-size').value;
      // console.log(valueNewBoard)
      if (valueNewBoard === '' || valueNewBoard < 0) {
        alert('Board inválido!');
      } else if (valueNewBoard > 0 && valueNewBoard < 5) {
        valueNewBoard = 5;
        boardNewSizeGenerator(valueNewBoard);
      } else if (valueNewBoard > 50) {
        valueNewBoard = 50;
        boardNewSizeGenerator(valueNewBoard);
      } else {
        boardNewSizeGenerator(valueNewBoard);
      }
    }
  });
}
alterSizeBoard();

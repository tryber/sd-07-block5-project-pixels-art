function selectingColor(event) {
  if (event.target.className.match(/selected/g)) {
    return;
  }
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function paintingPixel(event) {
  if (event.target.classList.length > 1) {
    event.target.classList.remove(event.target.classList[1]);
  }
  const selectedColor = document.querySelector('.selected').classList[1];
  event.target.classList.add(selectedColor);
}

function clearColors() {
  const pixelList = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelList.length; i += 1) {
    const currentColor = pixelList[i].classList[1];
    pixelList[i].classList.remove(currentColor);
    pixelList[i].classList.add('white');
  }
}

function setDefaultValues(value) {
  if (value < 5) {
    value = 5;
  } else if (value > 50) {
    value = 50;
  }
  return value;
}

function construcGridDivs(gridSize) {
  const newDivGrid = document.createElement('div');
  newDivGrid.className = 'new-grid';
  for (let i = 0; i < gridSize; i += 1) {
    const rowDiv = document.createElement('div');
    newDivGrid.appendChild(rowDiv);
    rowDiv.className = 'div-row';
    for (let j = 0; j < gridSize; j += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.classList.add('white');
      rowDiv.appendChild(newPixel);
    }
  }
  document.body.appendChild(newDivGrid);
}

function generateGrid() {
  const gridSize = setDefaultValues(document.getElementById('board-size').value);
  if (gridSize > 0) {
    const grid = document.getElementById('pixel-board');
    document.body.removeChild(grid);
    construcGridDivs(gridSize);
  } else {
    alert('Board inválido!');
  }

}

function addRandomClass() {
  const classColorList = ['empty', 'red', 'blue', 'green', 'grey', 'yellow', 'purple', 'brown'];
  const palletList = document.getElementsByClassName('color');
  for (let i = 1; i < palletList.length; i += 1) {
    const chosenColor = classColorList[Math.ceil(Math.random() * (palletList.length - 1))];
    const index = classColorList.indexOf(chosenColor);
    classColorList.splice(index, 1);
    const palletClassList = palletList[i].className.split(' ');
    palletList[i].classList.remove(palletClassList[1]);
    palletList[i].classList.add(chosenColor);
  }
}

const colorPixelList = document.getElementsByClassName('color');
for (let i = 0; i < 4; i += 1) {
  colorPixelList[i].addEventListener('click', selectingColor);
}
const pixelList = document.getElementsByClassName('pixel');
for (let i = 0; i < pixelList.length; i += 1) {
  pixelList[i].addEventListener('click', paintingPixel);
}
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearColors);
const generateGridButton = document.getElementById('generate-board');
generateGridButton.addEventListener('click', generateGrid);
addRandomClass();

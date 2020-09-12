function createCanvas(value) {
  value = Number(value)

  for (let index = 0; index < value; index += 1) {
    let rowElement = document.createElement('div')
    rowElement.className = 'tr'
    for (let index2 = 0; index2 < value; index2 += 1) {
      let itemElement = document.createElement('div')
      itemElement.style.backgroundColor = 'rgb (255, 255, 255)'
      itemElement.className = 'td pixel'
      itemElement.addEventListener('click', () => {changeColor(itemElement)})
      rowElement.appendChild(itemElement)
    }
    canvasElement.appendChild(rowElement)
  }

  canvasElement.style.width = `${value * 42}px`
}

function destructCanvas() {
  let elementChild = document.querySelectorAll('.tr')
  for (let item of elementChild) {
    canvasElement.removeChild(item)
  }
}

function checkSizeCanvas(value) {
  if (value === '') {
    alert('Board inválido!')
    return 5
  } else if (Number(value) > 50) {
    return 50;
  } else if (Number(value) < 5) {
    return 5;
  }

  return Number(value);
}

function constructCanvas() {
  let dimension = checkSizeCanvas(inputValue.value);
  destructCanvas()
  createCanvas(dimension)
}

function clearCanvas() {
  let elementsClear = document.querySelectorAll('.td')

  for (let item of elementsClear) {
    item.style.backgroundColor = 'rgb(255, 255, 255)'
  }
}

function generateRandomColor() {

  return `${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}`
}

function createPalette() {
  colorPalette[0].style.backgroundColor = 'rgb(0, 0, 0)'
  colorPalette[0].addEventListener('click', () => {selectColor(colorPalette[0])})

  for (let index = 1; index < colorPalette.length; index += 1) {
    colorPalette[index].style.backgroundColor =
    'rgb(' + generateRandomColor() + ')'
    colorPalette[index].addEventListener('click', () => {selectColor(colorPalette[index])})
  }
}

function changeColor(item) {
  let selectColor = document.querySelector('.selected');
  let style = window.getComputedStyle(selectColor)['background-color']
  item.style.backgroundColor = style;
}

function selectColor(color) {
  paletteElement = document.querySelector('.selected');
  paletteElement.classList.remove('selected');
  color.classList.add('selected')
}

const canvasElement = document.querySelector('.canvas')
const colorPalette = document.querySelectorAll('.color')
const clearButton = document.querySelector('#clear-board')
const inputValue = document.querySelector('#board-size')
const buttonInput = document.querySelector('#generate-board')

clearButton.addEventListener('click', clearCanvas)
buttonInput.addEventListener('click', constructCanvas)

createPalette()
createCanvas(5)

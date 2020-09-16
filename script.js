let colors = document.querySelectorAll('.color');
let color1 = document.getElementById('color1')
let color2 = document.getElementById('color2')
let color3 = document.getElementById('color3')
let color4 = document.getElementById('color4')

function removeSelectedColor() {
  const paletteColor = document.querySelectorAll(".color");
  for (let i = 0; i < paletteColor.length; i++) {
    paletteColor[i].classList.remove('selected');
  }
}

let selectedColor = "black";

function getBlackColor(e) {
  let element = e.target;
  removeSelectedColor();
  element.classList.add('selected');
  selectedColor = 'black'
}
color1.addEventListener('click', getBlackColor);

function getGreenColor(e) {
  let element = e.target;
  removeSelectedColor();
  element.classList.add('selected');
  selectedColor = 'darkgreen'
}
color2.addEventListener('click', getGreenColor);

function getRedColor(e) {
  let element = e.target;
  removeSelectedColor();
  element.classList.add('selected');
  selectedColor = 'orangered'
}
color3.addEventListener('click', getRedColor);

function getBlueColor(e) {
  let element = e.target;
  removeSelectedColor();
  element.classList.add('selected');
  selectedColor = 'blue'
}
color4.addEventListener('click', getBlueColor);

let pickPixel = document.querySelector('#pixel-board');

function changePixelColor(e) {
  let pixel = e.target;
  pixel.style.backgroundColor = selectedColor;
}

pickPixel.addEventListener('click', changePixelColor);

let buttonClearBoard = document.querySelector('#clear-board')

function clearPixelBoard() {
  const clear = document.getElementsByClassName('pixel');
  for (let i = 0; i < clear.length; i += 1) {
    clear[i].style.backgroundColor = 'white';
  }
}

buttonClearBoard.addEventListener('click', clearPixelBoard);

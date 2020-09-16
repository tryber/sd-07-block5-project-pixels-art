let lineNumbers = 5;
const pixelBoard = document.getElementById('pixel-board');

let line = [];
let pixel = [];
let k = 0;

for (let index = 0; index < lineNumbers; index += 1) {
  line[index] = document.createElement('div');
  line[index].className = 'line';
  pixelBoard.appendChild(line[index]);

  for (let j = 0; j < lineNumbers; j += 1) {
    pixel[k] = document.createElement('div');
    pixel[k].className = 'pixel';
    line[index].appendChild(pixel[k]);
    k += 1;
  }
}

const colors = document.querySelectorAll('.color');

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', function () {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    colors[index].classList.add('selected');
    //  event.target.className += ' selected';
    //  event.target.classList.add('selected');
  });
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', function () {
    let selected = document.querySelector('.selected');
    pixel[index].style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
  });
}

const buttonClear = document.getElementById('clear-board');

buttonClear.addEventListener('click', function () {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});

// const grid = document.querySelectorAll('.pixel');
// let colorSelected = document.querySelector('.selected').style.backgroundColor;


// let corAtual = "black"
// function pintar(){ event.target.style.backgroundColor = corAtual}
// colors.addEventListener('click', function (event) {
//   if (event.target.className === 'selected') {
//   }
// }, false);

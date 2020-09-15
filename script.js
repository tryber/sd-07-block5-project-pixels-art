const pixelBoard = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
const clearBoard = document.querySelector('.clear-board');
const buttonGenerateBoard = document.querySelector('.generate-board');
let numberOfLinesAndColunms = 5;

for (let index = 0; index < colors.length; index += 1) {
  const RGB1 = Math.ceil(Math.random() * 255);
  const RGB2 = Math.ceil(Math.random() * 255);
  const RGB3 = Math.ceil(Math.random() * 255);

  if (index === 0) {
    colors[index].style.backgroundColor = 'black';
  } else {
    colors[index].style.backgroundColor = `rgb(${RGB1},${RGB2},${RGB3})`;
  }
}

function classTD(td) {
  td.className = 'pixel';
  return td;
}

function makeBoard(lineAndColunms) {
  for (let index = 0; index < lineAndColunms; index += 1) {
    const tr = document.createElement('div');
    pixelBoard.appendChild(tr);
    for (let j = 0; j < lineAndColunms; j += 1) {
      const td = document.createElement('div');
      classTD(td);
      tr.appendChild(td);
    }
  }
}

makeBoard(numberOfLinesAndColunms);

let pixels = document.querySelectorAll('.pixel');

colors.forEach(item => {
  item.addEventListener('click', function (event) {
    event.target.classList.add('selected');
    colors.forEach(item => {
      if (item !== event.target) {
        item.classList.remove('selected');
      }
    });
  });
});

function paintBoard(event) {
  const colorSelected = document.querySelector('.selected');
  const bgColor = window.getComputedStyle(colorSelected, null).getPropertyValue('background-color');
  event.target.style.backgroundColor = bgColor;
}

pixels.forEach(item => {
  item.addEventListener('click', paintBoard);
});

buttonGenerateBoard.addEventListener('click', function () {
  numberOfLinesAndColunms = document.getElementById('board-size').value;
  if (numberOfLinesAndColunms === '') {
    alert('Board inválido!');
    numberOfLinesAndColunms = 5;
  } else if (numberOfLinesAndColunms > 50) {
    numberOfLinesAndColunms = 50;
  } else if (numberOfLinesAndColunms < 5) {
    numberOfLinesAndColunms = 5;
  }
  pixelBoard.innerHTML = '';
  makeBoard(numberOfLinesAndColunms);
  pixels = document.querySelectorAll('.pixel');
  pixels.forEach(item => {
    item.addEventListener('click', paintBoard);
  });
});

clearBoard.addEventListener('click', function () {
  pixels.forEach(item => {
    item.style.backgroundColor = 'white';
  });
});

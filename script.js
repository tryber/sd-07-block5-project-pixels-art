
const buttonSize = document.querySelector('.generate');
const pixelBoard = document.querySelectorAll('.pixel')

const boxes = document.querySelectorAll('.pixel');
for (let index = 0; index < boxes.length; index += 1) {
  const selectBoxes = boxes[index];
  selectBoxes.addEventListener('click', function paint() {
    selectBoxes.style.backgroundColor = localStorage.getItem('color');
  });
}



buttonSize.addEventListener('click', function () {
  document.querySelector('.board-pixel').innerHTML = ''

  const inputSize = document.querySelector('.size-board');
  let number = inputSize.value

  if (inputSize.value === "") {
    alert('Board inválido!')
  } else if (number > 50) {
    number = 50
  } else if (number >= 5 && number <= 50) {
    number = Number(inputSize.value)
  } else if (number < 5) {
    number = 5
  }
  document.querySelector('.board-pixel').style.width = (number * 45) + "px"
  document.querySelector('.board-pixel').style.height = (number * 45) + "px"
  for (let index = 0; index < number; index += 1) {
    const muchBoxes = document.createElement("div")
    muchBoxes.className = 'pixel'
    document.querySelector('.board-pixel').appendChild(muchBoxes)

    for (let index1 = 0; index1 < number; index1 += 1) {
      const lineBox = document.createElement('div')
      lineBox.className = 'pixel'
      muchBoxes.appendChild(lineBox)
    }
  }
})

const colors = document.getElementsByClassName('color');

colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'blue';
colors[2].style.backgroundColor = 'green';
colors[3].style.backgroundColor = 'red';

function random(){


  colors[1].style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)} , ${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)} )`
  colors[2].style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)} , ${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)} )`
  colors[3].style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)} , ${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)} )`
  
}

const colorBlack = document.getElementsByClassName('color')[0];
const colorBlue = document.getElementsByClassName('color')[1];
const colorGreen = document.getElementsByClassName('color')[2];
const colorRed = document.getElementsByClassName('color')[3];



colorBlack.addEventListener('click', function () {
  colorBlack.className = 'color selected';
  colorBlue.className = 'color';
  colorRed.className = 'color';
  colorGreen.className = 'color';
  const colorSelected = document.querySelector('.selected');
  const blackColor = colorSelected.style.backgroundColor;
  localStorage.setItem('color', blackColor);
});

colorBlue.addEventListener('click', function () {
  colorBlue.className = 'color selected';
  colorGreen.className = 'color';
  colorRed.className = 'color';
  colorBlack.className = 'color';
  const colorSelected = document.querySelector('.selected');
  const blueColor = colorSelected.style.backgroundColor;
  localStorage.setItem('color', blueColor);
});

colorGreen.addEventListener('click', function () {
  colorGreen.className = 'color selected';
  colorBlue.className = 'color';
  colorRed.className = 'color';
  colorBlack.className = 'color';
  const colorSelected = document.querySelector('.selected');
  const greenColor = colorSelected.style.backgroundColor;
  localStorage.setItem('color', greenColor);
});

colorRed.addEventListener('click', function () {
  colorRed.className = 'color selected';
  colorBlue.className = 'color';
  colorGreen.className = 'color';
  colorBlack.className = 'color';
  const colorSelected = document.querySelector('.selected');
  const redColor = colorSelected.style.backgroundColor;
  localStorage.setItem('color', redColor);
});



const buttonClear = document.querySelector('.clear');
for (let index = 0; index < boxes.length; index += 1) {
  let boxexPixels = []
  boxexPixels = boxes[index]
  buttonClear.addEventListener('click', function clear() {
    boxexPixels.style.backgroundColor = 'white'
  });
}


const select = document.querySelector('.selected').style.backgroundColor
localStorage.setItem('color', select);
window.onload = function (){
  random() 
 
  
}
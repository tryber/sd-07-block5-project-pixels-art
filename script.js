let palleteColor = document.getElementsByClassName('color');
let colorSelected = 'rgb(0, 0, 0)';
let btnClear = document.getElementById('clear-board');
let inputSize = document.getElementById('board-size');
let btnCreate = document.getElementById('generate-board');

const defaultColor =  'rgb(255, 255, 255)';
const minValueBoard = 5;
const maxValueBoard = 50;

for(let i=0; i < palleteColor.length; i += 1){
  palleteColor[i].addEventListener('click', addColor);
}

function createPixelClickEvent(){
  let pixel = document.getElementsByClassName('pixel');

  for(let i=0; i < pixel.length; i += 1){
    pixel[i].addEventListener('click', changeColor);
  }

}

function changeColor(e){
  let itemToChange = document.getElementById(e.srcElement.id);

  itemToChange.style.backgroundColor = colorSelected;
}

function addColor(e){
  let itemColor = document.getElementById(e.srcElement.id);
  let itemColorId = itemColor.id;
  const style = window.getComputedStyle(itemColor, 'background-color');

  colorSelected = style.backgroundColor;

  let itemSelectedPrevious = document.querySelector('.selected');
  itemSelectedPrevious.classList.remove('selected');

  let itemSelected = document.querySelector(`#${itemColorId}`);
  itemSelected.classList.add('selected');

}

function clearPixels(){
  let pixel = document.getElementsByClassName('pixel');

  for(let i=0; i < pixel.length; i += 1){
    pixel[i].style.backgroundColor = defaultColor;
  }
}

function getNumber(number){
  return Math.floor(Math.random() * Math.floor(number));
}

function createPalletes(){
  let palette = document.querySelectorAll('.color');
  let colorArray = [colorSelected];

  for(let i = 0; i < 3; i += 1){
    let value = `rgb(${getNumber(255)} , ${getNumber(255)}, ${getNumber(255)})`;

    colorArray.push(value);
  }

  for(let i = 0; i < palette.length; i += 1){
    palette[i].style.backgroundColor = colorArray[i];
  }

  createPixelClickEvent();

}

function generateBoard(numberOfPixels){
  let id = 0;
  let boardPixel = document.getElementById('pixel-board');

  for(let j = 0; j < numberOfPixels; j += 1){
    for(let i = 0; i < numberOfPixels; i += 1){
      let pixelElement = document.createElement('div');

      pixelElement.id = `item-${id}`;
      pixelElement.className = 'pixel';

      id += 1;

      boardPixel.appendChild(pixelElement);
    }
  }

  createPixelClickEvent();
}

function clearPixelElements(){
  let nodePixel = document.querySelectorAll('.pixel');

  for (let i=0; i < nodePixel.length; i += 1){
    nodePixel[i].remove();
  }
}

function createBoard(){
  let totalPixels = inputSize.value;
  let board = document.getElementById('pixel-board');

  if( totalPixels === ''){
    alert('Board inválido!');
    return null;
  }

  if( ( totalPixels >= 5) && ( totalPixels <= 50) ){
    clearPixelElements();

    board.style.gridTemplateColumns = `repeat(${totalPixels}, 40px)`;
    generateBoard(totalPixels);
  }else if(  totalPixels >= 50){
    clearPixelElements();

    board.style.gridTemplateColumns = `repeat(${maxValueBoard}, 40px)`;
    generateBoard(maxValueBoard);
  }else{
    clearPixelElements();

    board.style.gridTemplateColumns = `repeat(${minValueBoard}, 40px)`;
    generateBoard(minValueBoard);
  }

}

btnClear.addEventListener('click', clearPixels);
btnCreate.addEventListener('click', createBoard);

window.onload = createPalletes;

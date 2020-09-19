// Função que cria o quadro de pixels
function createPixelsBoard(number) {
  let count = 0;
  let board = document.querySelector("#pixel-board");
  board.className = "pixels-board";
  for (let indexLine = 0; indexLine < number; indexLine += 1) {
    let line = document.createElement("div");
    line.id = `line${indexLine + 1}`;
    line.className = "line-display"
    board.appendChild(line);
    for (let indexColumn = 0; indexColumn < number; indexColumn += 1) {
      count += 1;
      let column = document.createElement("div");
      column.id = `pixel${count}`;
      column.className = "pixel column-display";
      line.appendChild(column);
    }
  }
}

const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");
const color4 = document.querySelector("#color4");
let selected = document.querySelector(".selected");

// Preto
function color1Select() {
  color1.classList.add("selected");
  color2.classList.remove("selected");
  color3.classList.remove("selected");
  color4.classList.remove("selected");
  selected = color1;
  const color1Background = window.getComputedStyle(color1).getPropertyValue("background-color");
  return color1Background;
}

// Vermelho
function color2Select() {
  color1.classList.remove("selected");
  color2.classList.add("selected");
  color3.classList.remove("selected");
  color4.classList.remove("selected");
  selected = color2;
  const color2Background = window.getComputedStyle(color2).getPropertyValue("background-color");
  return color2Background;
}

// Verde
function color3Select() {
  color1.classList.remove("selected");
  color2.classList.remove("selected");
  color3.classList.add("selected");
  color4.classList.remove("selected");
  selected = color3;
  const color3Background = window.getComputedStyle(color3).getPropertyValue("background-color");
  return color3Background;
}

// Azul
function color4Select() {
  color1.classList.remove("selected");
  color2.classList.remove("selected");
  color3.classList.remove("selected");
  color4.classList.add("selected");
  selected = color4;
  const color4Background = window.getComputedStyle(color4).getPropertyValue("background-color");
  return color4Background;
}

// Evento de click das cores selecionadas
color1.addEventListener("click", color1Select);
color2.addEventListener("click", color2Select);
color3.addEventListener("click", color3Select);
color4.addEventListener("click", color4Select);

// Função pintar os píxels
function paintBoard() {
  let pixelBoard = document.querySelectorAll(".pixel");
  for (let indexPixel = 0; indexPixel < pixelBoard.length; indexPixel += 1) {
    pixelBoard[indexPixel].addEventListener("click", function () {
      pixelBoard[indexPixel].style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
    });
  }
}

// Botão para limpar o quadro
const btnErase = document.querySelector("#clear-board");
btnErase.addEventListener("click", function () {
  let numberPixels = document.querySelectorAll(".pixel");
  for (let indexBoard = 0; indexBoard < numberPixels.length; indexBoard += 1) {
    numberPixels[indexBoard].style.backgroundColor = "white";
  };
});

// Botão para gerar o quadro com o tamanho definido pelo usuário
const buttonGenerate = document.querySelector("#generate-board");
buttonGenerate.addEventListener("click", function () {
  let size = document.querySelector("#board-size");
  let erase = document.querySelector("#pixel-board");
  erase.innerHTML = "";
  if (size.value == "") {
    alert("Board inválido!");
  }
  if (size.value < 5) {
    size.value = 5;
    createPixelsBoard(size.value);
  } else if (size.value > 50) {
    size.value = 50;
    createPixelsBoard(size.value)
  } else {
    createPixelsBoard(size.value);
  };
  paintBoard();
});

// Gera um número inteiro aleatório entre um valor mínimo e um máximo
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function newColor() {
  let red = randomNumber(0, 255);
  let green = randomNumber(0, 255);
  let blue = randomNumber(0, 255);
  let color = `rgb(${red}, ${green}, ${blue})`
  return color;
}

function changeNewColor() {
  color2.style.backgroundColor = newColor();
  color3.style.backgroundColor = newColor();
  color4.style.backgroundColor = newColor();
}

// Predefinições ao carregar a página
window.onload = function () {
  createPixelsBoard(5);
  paintBoard();
  changeNewColor();
}

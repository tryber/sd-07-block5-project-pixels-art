window.onload = function () {
  let randomColor = document.getElementsByClassName("color");
  for (let indexColor = 1; indexColor < randomColor.length; indexColor += 1) {
    let colorValueOne = Math.floor(Math.random() * 256);
    let colorValueTwo = Math.floor(Math.random() * 256);
    let colorValueThree = Math.floor(Math.random() * 256);
    randomColor[
      indexColor
    ].style.backgroundColor = `rgb(${colorValueOne}, ${colorValueTwo}, ${colorValueThree})`;
  }
};

let paint = document.getElementsByClassName("selected")[0];
let background = window.getComputedStyle(paint).backgroundColor;
let selectedColor = document.getElementById("color-palette");
let paintPixel = document.getElementById("pixel-board");
let resetPixel = document.getElementById("clear-board");
let buttonVqv = document.getElementById("generate-board");
let sizeBoard = document.getElementById("board-size");

selectedColor.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("selected") == false &&
    event.target.classList.contains("color") == true
  ) {
    paint.classList.remove("selected");
    event.target.className += " selected";
    paint = document.getElementsByClassName("selected")[0];
    background = window.getComputedStyle(paint).backgroundColor;
  }
});

paintPixel.addEventListener("click", function (event) {
  if (event.target.classList.contains("pixel") == true) {
    event.target.style.backgroundColor = background;
  }
});

resetPixel.addEventListener("click", function () {
  let reset = document.getElementsByClassName("pixel");
  for (let index = 0; index < reset.length; index += 1) {
    reset[index].style.backgroundColor = "white";
  }
});

buttonVqv.addEventListener("click", function () {
  if (sizeBoard.value == "") {
    alert("Board inválido!");
    return;
  } else if (sizeBoard.value <= 5) {
    sizeBoard.value = 5;
  } else if (sizeBoard.value >= 50) {
    sizeBoard.value = 50;
  }

  while (paintPixel.firstChild) {
    paintPixel.removeChild(paintPixel.firstChild);
  }
  for (let index = 0; index < sizeBoard.value; index += 1) {
    let createTable = document.createElement("tr");
    document.getElementById("pixel-board").appendChild(createTable);
    for (let indexPixel = 0; indexPixel < sizeBoard.value; indexPixel += 1) {
      let createPixel = document.createElement("td");
      createPixel.className = "pixel";
      createTable.appendChild(createPixel);
    }
  }
});

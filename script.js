let numLinhas = 5;
let pixelBoard = document.getElementById("pixel-board");

let pixel = [];
let linha = [];

let k = 0;
for (let i = 0; i < numLinhas; i += 1) {
  linha[i] = document.createElement("div");
  linha[i].className = "linha";
  pixelBoard.appendChild(linha[i]);

  for (let j = 0; j < numLinhas; j += 1) {
    pixel[k] = document.createElement("div");
    pixel[k].className = "pixel";
    linha[i].appendChild(pixel[k]);
    k = k + 1;
  }
}

let selectedColor = document.querySelectorAll(".color");

for (let i = 0; i < selectedColor.length; i += 1) {
  selectedColor[i].addEventListener("click", function () {
    let selected = document.querySelector(".selected");
    selected.classList.remove("selected");

    selectedColor[i].classList.add("selected");
  });
}

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener("click", function () {
    let selected = document.querySelector(".selected");
    console.log(selected);
    pixel[i].style.backgroundColor = window.getComputedStyle(
      selected
    ).backgroundColor;
  });
}

let clear = document.getElementById("clear-board");

clear.addEventListener("click", function () {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = "white";
  }
});

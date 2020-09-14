let mouse;
let colorPicked = document.querySelector(".selected");

window.onload = function () {
  mouse = window
    .getComputedStyle(colorPicked, null)
    .getPropertyValue("background-color");

  let random1 = document.querySelector(".red");
  let aletorio1 = Math.round(Math.random() * 255);
  random1.style.backgroundColor =
    "rgb(" + aletorio1 + "," + aletorio1 + "," + aletorio1 + ")";

  let random2 = document.querySelector(".blue");
  let aletorio2 = Math.round(Math.random() * 255);
  random2.style.backgroundColor =
    "rgb(" + aletorio2 + "," + aletorio2 + "," + aletorio2 + ")";

  let random3 = document.querySelector(".green");
  let aletorio3 = Math.round(Math.random() * 255);
  random3.style.backgroundColor =
    "rgb(" + aletorio3 + "," + aletorio3 + "," + aletorio3 + ")";
};

//----------------------------------------------------------------------------
// Reconhecendo em qual paleta está sendo clicada, adicionando uma classe selected para a paleta clicada e removendo a
// classe selected da paleta anterioriormente clicada

document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList.contains("black")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    } else if (event.target.classList.contains("red")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    } else if (event.target.classList.contains("blue")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    } else if (event.target.classList.contains("green")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    }
  },
  false
);

//----------------------------------------------------------------------------------
// Adicionando um evento click para todo elemento que possui a classe pixel. Essa classe recebe a cor de fundo da paleta que foi clicada anteriormente

document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList.contains("pixel")) {
      event.target.style.backgroundColor = mouse;
    }
  },
  false
);

//---------------------------------------------------------------------------------
// Limpando todo quadro de pixel de volta para fundo branco

let button = document.querySelector("#clear-board");

button.addEventListener("click", limpa);

function limpa() {
  let pixels = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = "white";
  }
}

//---------------------------------------------------------------------------------
let sectionBoard = document.querySelector("#pixel-board");

let buttonSize = document.querySelector("#generate-board");
buttonSize.addEventListener("click", generateBoard);

function generateBoard() {
  if (document.querySelector("#board-size").value == "") {
    return alert("Board inválido!");
  }
  limpa();

  if (document.querySelector("#board-size").value > 50) {
    document.querySelector("#board-size").value = 50;
  } else if (document.querySelector("#board-size").value < 5) {
    document.querySelector("#board-size").value = 5;
  }

  let size = document.querySelector("#board-size").value - 5;

  for (let i = 1; i <= size; i += 1) {
    let line = createLine("lines");
    sectionBoard.appendChild(line);
    for (let j = 0; j < 5; j += 1) {
      let pixel = createPixel("pixel");
      let newLines = document.querySelectorAll(".lines");
      newLines[4 + i].appendChild(pixel);
    }
  }

  for (let i = 0; i < size + 5; i += 1) {
    let lines = document.querySelectorAll(".lines");
    for (let j = 1; j <= size; j += 1) {
      let pixel = createPixel("pixel");
      lines[i].appendChild(pixel);
    }
  }
}

function createPixel(className) {
  let pixel = document.createElement("div");
  pixel.className = className;
  return pixel;
}

function createLine(className) {
  let line = document.createElement("div");
  line.className = className;
  return line;
}

window.onload = function () {

  //Função para gerar paleta de cores aletória.

  function randomColor(parametro) {
    let firstNumber = Math.ceil(Math.random() * 255);
    let secondNumber = Math.ceil(Math.random() * 255);
    let thirdNumber = Math.ceil(Math.random() * 255);
    let string = "rgb(" + firstNumber + "," + secondNumber + "," + thirdNumber + ")";
    parametro = string;
    return parametro = string;
  }

  let colorGenerated = "";

  //Referência dos elementos .color.
  let arrayColors = document.querySelectorAll(".color");

  //BackgroundColor de cada posição.
  arrayColors[0].style.backgroundColor = "black";
  arrayColors[1].style.backgroundColor = randomColor(colorGenerated);
  arrayColors[2].style.backgroundColor = randomColor(colorGenerated);
  arrayColors[3].style.backgroundColor = randomColor(colorGenerated);

  let selectedColor = document.querySelectorAll(".color.selected")[0].style.backgroundColor;

  for (let index = 0; index < arrayColors.length; index += 1) {
    if (index == 0) {
      arrayColors[index].addEventListener('click', function () {
        selectedColor = arrayColors[index].style.backgroundColor;
        arrayColors[index].classList.add("selected")
        for (let index = 0; index < arrayColors.length; index++) {
          if (index != 0) {
            arrayColors[index].classList.remove("selected");
          }
        }
      })
    } else if (index == 1) {
      arrayColors[index].addEventListener('click', function () {
        selectedColor = arrayColors[1].style.backgroundColor;
        arrayColors[index].classList.add("selected")
        for (let index = 0; index < arrayColors.length; index++) {
          if (index != 1) {
            arrayColors[index].classList.remove("selected");
          }
        }
      })
    } else if (index == 2) {
      arrayColors[index].addEventListener('click', function () {
        selectedColor = arrayColors[2].style.backgroundColor;
        arrayColors[index].classList.add("selected");
        for (let index = 0; index < arrayColors.length; index++) {
          if (index != 2) {
            arrayColors[index].classList.remove("selected");
          }
        }
      })
    } else {
      arrayColors[index].addEventListener('click', function () {
        selectedColor = arrayColors[3].style.backgroundColor;
        arrayColors[index].classList.add("selected");
        for (let index = 0; index < arrayColors.length; index++) {
          if (index != 3) {
            arrayColors[index].classList.remove("selected");
          }
        }
      })
    }
  }

  //Função para apagar as cores do quadro:
  let button = document.getElementById("clear-board");

  function eraseAll() {
    for (let index = 0; index < lines.length; index++) {
      lines[index].style.backgroundColor = "white";
    }
  }

  button.addEventListener('click', eraseAll);

  //Criando o quadro dinamicamente:
  let body = document.querySelector(".table");

  for (let i = 0; i <= arrayColors.length; i++) {
    let boxLine = document.createElement("div");
    boxLine.className = "tr";
    body.appendChild(boxLine);
    for (let j = 0; j <= arrayColors.length; j++) {
      let boxCol = document.createElement("div");
      boxCol.className = "pixel"
      boxLine.appendChild(boxCol);
    }
  }

  //Função para mudar a cor:
  let lines = document.querySelectorAll(".pixel");

  function changeColor(event) {
    event.target.style.backgroundColor = selectedColor;
  }

  for (let index = 0; index < lines.length; index++) {
    lines[index].addEventListener("click", changeColor);
  }

  //Função para gerar um quadro no tamanho que o usuário solicitar:
  let button2 = document.getElementById("generate-board");
  let inputSizeNumber = document.getElementById("board-size");

  button2.addEventListener('click', function () {

    if (inputSizeNumber.value <= 0) {
      return alert('Board inválido!');
    }
    if (inputSizeNumber.value < 5) {
      inputSizeNumber.value = 5;
    }
    if (inputSizeNumber.value > 50) {
      inputSizeNumber.value = 50;
    }

    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }

    for (let i = 0; i < inputSizeNumber.value; i++) {
      let boxLine = document.createElement("div");
      boxLine.className = "tr";
      body.appendChild(boxLine);
      for (let j = 0; j < inputSizeNumber.value; j++) {
        let boxCol = document.createElement("div");
        boxCol.className = "pixel"
        boxLine.appendChild(boxCol);
        boxCol.style.backgroundColor = "white";
      }
    }

    let lines = document.querySelectorAll(".pixel");
    function changeColor(event) {
      event.target.style.backgroundColor = selectedColor;
    }

    for (let index = 0; index < lines.length; index++) {
      lines[index].addEventListener("click", changeColor);
    }
  })
}

window.onload = teste;
   

let botaoCorPreta = document.getElementById("color1");
let botaoCorAzul = document.getElementById("color2");
let botaoCorVerde = document.getElementById("color3");
let botaoCorCinza = document.getElementById("color4");
let cores = document.getElementsByClassName("color");

//criar linhas
//criar colunas
let pixelBoard = document.getElementById("pixel-board")
let botaoVqv = document.getElementById("generate-board");

botaoVqv.addEventListener ("click", function () {
  let numeroPixel = document.getElementById("board-size").value
  if (numeroPixel < 5 && numeroPixel > 1) {
    numeroPixel = 5
  } else if (numeroPixel > 50) {
    numeroPixel = 50
  } else if (numeroPixel >= 5 || numeroPixel <= 50) {
    numeroPixel = numeroPixel
  } else {
      alert("Board inválido!")
  }
  while (pixelBoard.firstChild) {
      pixelBoard.removeChild(pixelBoard.firstChild)
  }
    for (let index = 0; index < numeroPixel; index += 1) {
        let linha = document.createElement("div");
        pixelBoard.appendChild(linha);
            for (index2 = 0; index2 < numeroPixel; index2 += 1){
                let pixelsFilhos = document.createElement("div");
                linha.appendChild(pixelsFilhos);
                linha.lastElementChild.className = "pixel"
            }
    }
  pintarPreta()
})

function teste() {
    let numeroPixel = 5
  for (let index = 0; index < numeroPixel; index += 1) {
    let linha = document.createElement("div");
    pixelBoard.appendChild(linha);
    
      for (index2 = 0; index2 < numeroPixel; index2 += 1){
        let pixelsFilhos = document.createElement("div");
        linha.appendChild(pixelsFilhos);
        linha.lastElementChild.className = "pixel"
      }
  }
  pintarPreta()
};

botaoCorPreta.addEventListener('click', pintarPreta);

function pintarPreta () {
  for (index = 0; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  };
  botaoCorPreta.classList.add('selected');
  let corPreta = window.getComputedStyle(botaoCorPreta, null).getPropertyValue("background-color");
  document.querySelectorAll('.pixel').forEach(item => {
    item.addEventListener('click', function () {
      item.style.backgroundColor = corPreta;
    });
  });
};

botaoCorAzul.addEventListener('click', function () {
  for (index = 0; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  };
  botaoCorAzul.classList.add('selected');
  let corAzul = window.getComputedStyle(botaoCorAzul, null).getPropertyValue('background-color');
  document.querySelectorAll('.pixel').forEach(item => {
    item.addEventListener('click', function() {
      item.style.backgroundColor = corAzul;
    });
  });
});

botaoCorVerde.addEventListener("click", function(){
    for (index = 0; index < cores.length; index += 1) {
        cores[index].classList.remove("selected")
    }
    botaoCorVerde.classList.add("selected")
let corVerde = window.getComputedStyle(botaoCorVerde, null).getPropertyValue("background-color");
document.querySelectorAll(".pixel").forEach(item => {
    item.addEventListener("click", function() {
        item.style.backgroundColor = corVerde

})
})
})

botaoCorCinza.addEventListener("click", function(){
    for (index = 0; index < cores.length; index += 1) {
        cores[index].classList.remove("selected")
    }
    botaoCorCinza.classList.add("selected")
let corCinza = window.getComputedStyle(botaoCorCinza, null).getPropertyValue("background-color");
document.querySelectorAll(".pixel").forEach(item => {
    item.addEventListener("click", function() {
        item.style.backgroundColor = corCinza

});
});
});

let limpar = document.getElementById('clear-board');

limpar.addEventListener("click", function () {
  let pixels = document.querySelectorAll('.pixel');
  for (index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)'
  }
});

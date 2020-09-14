// -------------- GERAR COR ALEATÓRIA -------------- //

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let paleta = document.querySelectorAll(".color")
  for (let index = 1; index < paleta.length; index += 1) {
      paleta[index].classList.add(getRandomColor())
      paleta[index].style.backgroundColor = getRandomColor()
  }

// -------------- ESCOLHER A COR DA PALETA -------------- //

    paleta[0].addEventListener("click", function() {
        removeSelecionados()
        this.classList.add("selected")
    })
    paleta[1].addEventListener("click", function() {
        removeSelecionados()
        this.classList.add("selected")
    })
    paleta[2].addEventListener("click", function() {
        removeSelecionados()
        this.classList.add("selected")
    })
    paleta[3].addEventListener("click", function() {
        removeSelecionados()
        this.classList.add("selected")
    })
    
function removeSelecionados() {
    paleta[0].classList.remove("selected")
    paleta[1].classList.remove("selected")
    paleta[2].classList.remove("selected")
    paleta[3].classList.remove("selected")
}
// -------------- GERANDO PIXELS -------------- //

let containerPixel = document.getElementById("pixel-board")
for (let index = 0; index < 25; index += 1) {
    let pixel = document.createElement('div')
    pixel.className = "pixel"
    containerPixel.appendChild(pixel)

}

// -------------- MUDANDO A COR DOS PIXELS -------------- //

let quadro = document.querySelectorAll('.pixel')
for (let index = 0; index < quadro.length; index += 1) {
    let pixelSelecionado = quadro[index]
    pixelSelecionado.addEventListener("click", function() {
        pixelSelecionado.style.backgroundColor = trocaCor()
    })
}

function trocaCor() {
    let corSelecionada = document.getElementsByClassName("selected")[0]
    let cor = window.getComputedStyle(corSelecionada).backgroundColor
    return cor
}

// -------------- BOTÂO CLEAR -------------- //

let button = document.getElementById("clear-board")
button.addEventListener("click", function() {
    for (let index = 0; index < quadro.length; index += 1) {
        quadro[index].style.backgroundColor = "white"
    }
})
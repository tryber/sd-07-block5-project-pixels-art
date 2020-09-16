let paletteElements = document.getElementsByClassName('color')
let pixelGrid = document.getElementsByClassName('pixel')
let clearButton = document.getElementById('clear-board')
let clearBoard = clearButton.addEventListener('click', clearGrid)


// Adicionando evento click aos elementos da paleta
for (let index = 0; index < paletteElements.length; index += 1) {
    paletteElements[index].addEventListener('click', selectedColorInPalette)
}

// Função para remover e adiocionar a class 'selected'
function selectedColorInPalette () {
    let elementTarget = this
    if (elementTarget.classList.contains('selected')) {
    } else {
        let removeSelectedClass = document.querySelector('.selected')
        removeSelectedClass.classList.remove('selected')
        elementTarget.classList.add('selected')
    }
}

// Adicionando evento click aos pixels
for (let index = 0; index < pixelGrid.length; index += 1) {
    pixelGrid[index].addEventListener('click', pixelPaint)
}

// Função para adiconar a classe 'filled' aos pixels, buscar o estilo de cor da paleta e pintar o pixel
function pixelPaint() {
    let pixelTarget = this
    pixelTarget.classList.add('filled')
    let selectedColor = document.querySelector('.selected')
    let colorToPaint = getComputedStyle(selectedColor).backgroundColor
    pixelTarget.style.backgroundColor = colorToPaint
}

// Função para limpar os pixels pintados e atribuir 'backgroundColor' branco
function clearGrid() {
    for (let index = 0; index < pixelGrid.length; index += 1) {
        if(pixelGrid[index].classList.contains('filled'))
            pixelGrid[index].classList.remove('filled')
            pixelGrid[index].style.backgroundColor = 'white'
    }
}
let arrayPalete = document.querySelectorAll('.color');
let inputSize = document.getElementById('board-size');
let buttonVqv = document.getElementById('generate-board');
let buttonClear = document.getElementById('clear-board');
let columns = 5;
let lines = document.querySelectorAll(".line");
let quadroPixel = document.getElementById('pixel-board');

// cria divs com a classe lines.
function addLines(numberLines) {
    for (let index = 0; index < numberLines; index += 1) {
        let line = document.createElement('div');
        line.className = 'line';
        quadroPixel.appendChild(line);
    }
}

// Cria pixels brancos
function createPixel() {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    return pixel;
}

// Preenche uma linha com 5 pixels dado a localização da line(divLine).
function fillLine(divLine) {
    for (let index = 0; index < columns; index += 1) {
        let pixel = createPixel();
        divLine.appendChild(pixel);
    }
}

// Usando a função fillLines preenche os 25 pixels.
function fillAll(arrayLines) {
    for (let index = 0; index < arrayLines.length; index += 1) {
        fillLine(arrayLines[index]);
    }
}
fillAll(lines);

// 6 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.
document.querySelector('.color.black').className = 'color black selected';

// 7 - Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.
for (index = 0; index < arrayPalete.length; index += 1) {
    let palete = arrayPalete[index];
    palete.addEventListener('click', function () {
        let selectedClass = document.querySelector('.selected');
        selectedClass.classList.remove('selected');
        palete.classList.add('selected');
    });
}

// 8 - Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.
function addColorPixel() {
    let arrayPixels = document.querySelectorAll('.pixel');
    for (index = 0; index < arrayPixels.length; index += 1) {
        let pixel = arrayPixels[index];
        pixel.addEventListener('click', function () {
            let selectedClass = document.querySelector('.selected');
            let colorToAdd = window.getComputedStyle(selectedClass).getPropertyValue("background-color");
            pixel.style.backgroundColor = colorToAdd;
        });
    }
}
addColorPixel();


// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
function clearPixel() {
    let arrayPixels = document.querySelectorAll('.pixel');
    buttonClear.addEventListener('click', function () {
        for (index = 0; index < arrayPixels.length; index += 1) {
            let pixel = arrayPixels[index];
            pixel.style.backgroundColor = "white";
        }
    });
}
clearPixel();


function updateBoard(sizeBoard) {
    quadroPixel.innerHTML = '';
    addLines(sizeBoard);
    columns = sizeBoard;
    lines = document.querySelectorAll(".line");
    fillAll(lines);
    addColorPixel();
    clearPixel();
}

// 10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário.
buttonVqv.addEventListener('click', function () {
    if (inputSize.value === null || inputSize.value === "") {
        alert('Board inválido!');
    }
    else if (inputSize.value < 5) {
        updateBoard(5);
    }
    else if (inputSize.value > 50) {
        updateBoard(50);
    }
    else {
        updateBoard(inputSize.value);
    }
});

// 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index += 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (index = 1; index < arrayPalete.length; index += 1) {
    arrayPalete[index].style.backgroundColor = getRandomColor();
}
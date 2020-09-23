window.onload = function () {
    createPixelBoard(5);
    initialColorSelected ();
    selectPixel();
}
let pixelBoard = document.querySelector('#pixel-board');

function initialColorSelected () {
    let firstColor = document.querySelector('.color-one');
    firstColor.classList.add('selected');
}

function selectPixel () {
    let pixels = document.querySelectorAll('.pixel');
        for (let index = 0; index < pixels.length; index += 1) {
            pixels[index].addEventListener('click', function () {
            let selectedColor = document.querySelector('.selected');
            this.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
            })
        }
}

let colorSelector = document.querySelectorAll('.color');
for (let index = 0; index < colorSelector.length; index += 1) {
    colorSelector[index].addEventListener('click', function () {
    let selectedColor = document.getElementsByClassName("selected")[0];
    selectedColor.classList.remove("selected");
    this.classList.add("selected");
    });
}

let clearButton = document.querySelector('#clear-board');
clearButton.addEventListener("click", function () {
        let pixels = document.getElementsByClassName("pixel");
        for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = "";
        }
});


let buttonCreatPixelBoard = document.getElementById("generate-board");
buttonCreatPixelBoard.addEventListener("click", function () {
    pixelBoard.innerHTML = '';
    let pixelsNumber = parseInt(document.getElementById("board-size").value);
    if (document.getElementById("board-size").value === "") {
        alert("Board inválido!")
        createPixelBoard(5);
    } else if (pixelsNumber >= 5 && pixelsNumber <= 50) {
        createPixelBoard(pixelsNumber);
    } else {
        createPixelBoard(5);
    }
})
function createPixelBoard (pixelsNumber) {
    for (lineNumber = 0; lineNumber < pixelsNumber; lineNumber += 1) { 
        let newLine = document.createElement("div");
        newLine.className = 'pixel-line'
        pixelBoard.appendChild(newLine);
        for (columnNumber = 0; columnNumber < pixelsNumber; columnNumber += 1) {
            let newPixel = document.createElement("div");
            newPixel.className = "pixel";
            newLine.appendChild(newPixel);
        }
    selectPixel();
    }
}
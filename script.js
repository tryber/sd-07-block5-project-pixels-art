let selectedColor = document.getElementById('first-color');
document.querySelectorAll('.color').forEach(configureColorPaletteItemsAsClickable);

let secondColor = document.getElementById('second-color');
secondColor.style.backgroundColor = randomColor();
let thirdColor = document.getElementById('third-color');
thirdColor.style.backgroundColor = randomColor();
let fourthColor = document.getElementById('fourth-color');
fourthColor.style.backgroundColor = randomColor();

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

function removeClass(item) {
    item.classList.remove('selected');
}

function configureColorPaletteItemsAsClickable(item) {
    item.addEventListener("click", function () {
        document.querySelectorAll('.color').forEach(removeClass);
        item.classList.add('selected');
        selectedColor = item;
    });
}

let pixelBoard = document.getElementById('pixel-board');
let pixelBoardSize = 5;
createBoard(5);

function createBoard(pixelBoardSize) {
    for(let index = 0; index < pixelBoardSize; index += 1) {
        let pixelLine = document.createElement("div");
        pixelLine.className = 'pixel-line';
        pixelBoard.appendChild(pixelLine);
        for (let index2 = 0; index2 < pixelBoardSize; index2 += 1) {
            let pixel = document.createElement("div");
            pixel.className = 'pixel';
            pixelLine.appendChild(pixel);
            pixel.addEventListener("click", function () {
                let color = window.getComputedStyle(selectedColor, null).getPropertyValue("background-color");
                pixel.style.backgroundColor = color;
            });  
        }
    }
}

let createPixelBoardButton = document.getElementById('generate-board');
createPixelBoardButton.addEventListener("click", fillPixelBoard);

function fillPixelBoard() {
    pixelBoardSize = document.getElementById('board-size').value;
    if (pixelBoard.length != 0) {
        pixelBoard.innerHTML = '';
    }
    if (pixelBoardSize.length === 0) {
        alert('Board inválido!');
    }
    else if (pixelBoardSize < 5) {
        pixelBoardSize = 5;
    }
    else if (pixelBoardSize > 50) {
        pixelBoardSize = 50;
    }
    createBoard(pixelBoardSize);
}

let button = document.getElementById('clear-board');
button.addEventListener("click", function () {
    document.querySelectorAll(".pixel").forEach(changeBackgroundColorToWhite);
});

function changeBackgroundColorToWhite(item) {
    item.style.backgroundColor = "white";
}

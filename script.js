window.onload = function() {
    defineColorsBackground();
    screen(5);
}

let board = document.querySelector("#pixel-board")
let buttons = document.querySelectorAll(".color");
let selectedButton = document.querySelector(".selected");
let clearButton = document.querySelector("#clear-board");

clearButton.addEventListener('click', cleanScreen)

function getRandomColors() {
    return (Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256));
}

function defineColorsBackground() {
    buttons[0].style.backgroundColor = "black";
    let helper = ["0, 0, 0"];
    for (let i = 1; i < buttons.length; i++) {
        helper[i] = getRandomColors();
        for (let j = 0; j < helper.length; j++) {
            if (helper[j] === helper[i]) {
                helper[i] = getRandomColors();
            }
        }
        buttons[i].style.backgroundColor = "rgb(" + getRandomColors() + ")";
    }
}

function screen(size) {
    let area = size;

    for (let i = 0; i < size; i++) {
        let linha = document.createElement("div")
        linha.className = "linha";
        for (let j = 0; j < size; j++) {
            let coluna = document.createElement("div");
            coluna.className = "pixel coluna";
            linha.appendChild(coluna);
        }
        board.appendChild(linha);
    }
}

function cleanScreen() {
    let linha = document.querySelectorAll(".linha");
    let coluna = document.querySelectorAll(".coluna");
    for (let i = 0; i < linha.length; i++) {
        linha[i].style.backgroundColor = "white";
        for (let j = 0; j < coluna.length; j++) {
            coluna[j].style.backgroundColor = "white";
        }
    }
}
let numberLines = 5;
let pixelBoard = document.getElementById(`pixel-board`);

let linha = [];
let pixel = [];
ind = 0;
for (let i = 0; i < numberLines; i += 1) {
    linha[i] = document.createElement(`div`);
    linha[i].className = `linha`;
    pixelBoard.appendChild(linha[i]);
    for (let j = 0; j < numberLines; j += 1) {
        pixel[ind] = document.createElement(`div`);
        pixel[ind].className = `pixel`;
        linha[i].appendChild(pixel[ind]);
        ind += 1;
    }
}

/*
let black = document.querySelector(".black");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
*/

let color = document.querySelectorAll(`.color`);
console.log(color);

for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener(`click`, function(event) {
        let selected = document.querySelector(`.selected`);
        selected.classList.remove(`selected`);
        //color[i].classList.add(`selected`);
        event.target.className += ` selected`;
    });
}

for (let i = 0; i <pixel.length; i += 1) {
    pixel[i].addEventListener(`click`, function(){
        let selected = document.querySelector(`.selected`);
        pixel[i].style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
    })
}

let buttonClear = document.getElementById(`clear-board`);

buttonClear.addEventListener(`click`, function(){
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = `white`;
    }
})
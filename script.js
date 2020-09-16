var black = document.querySelector(".black");
var green = document.querySelector(".green");
var red = document.querySelector(".red");
var yellow = document.querySelector(".yellow");
var colors = document.getElementsByClassName("color");
var pixels = document.getElementsByClassName('pixel');
var paint = "";
var limpar = document.querySelector("#clear-board");

function selectorB () {
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove("selected");
        console.log(colors[i])

        if(colors[i] === black){
            colors[i].classList.add("selected");
            paint = "black"
        }
    }
}

function selectorG () {
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove("selected");
        console.log(colors[i])

        if(colors[i] === green){
            colors[i].classList.add("selected");
            paint = "green"
        }
    }
}

function selectorR () {
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove("selected");
        console.log(colors[i])

        if(colors[i] === red){
            colors[i].classList.add("selected");
            paint = "red"
        }
    }
}

function selectorY () {
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove("selected");
        console.log(colors[i])

        if(colors[i] === yellow){
            colors[i].classList.add("selected");
            paint = "yellow"
        }
    }
}


for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function (event) {
    event.target.style.backgroundColor = paint;
  });
}

function clear() {
    for(let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = "white"
    }
}

black.addEventListener('click', selectorB);
green.addEventListener('click', selectorG);
red.addEventListener('click', selectorR);
yellow.addEventListener('click', selectorY);
limpar.addEventListener('click', clear);

window.onload = selectorB;
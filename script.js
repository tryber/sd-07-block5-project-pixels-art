let color = document.querySelector(".selected");
let colorPalette = document.querySelectorAll(".color");
let colorPixel = document.querySelectorAll(".pixel");
let clearBoard = document.querySelector("#clear-board");

clearBoard.addEventListener("click", function(){
    for(let index = 0; index < colorPixel.length; index += 1){
        colorPixel[index].style.backgroundColor = "white";
    }
})

function selectColorPalette (){
    for(let index = 0; index < colorPalette.length; index += 1){
        colorPalette[index].addEventListener("click", function(){
            color.classList.remove("selected")
            colorPalette[index].classList.add("selected");
            color = colorPalette[index];
        });
    }
}

function selectColorPixel (){
    for(let index = 0; index < colorPixel.length; index += 1){
        colorPixel[index].addEventListener("click", function(){
            let cor = window.getComputedStyle(color);
            colorPixel[index].style.backgroundColor = cor.backgroundColor;
        });
    }
}



selectColorPixel();
selectColorPalette();
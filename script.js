window.onload = function() {


//selecionando paleta
let colorSelected = document.querySelector('.selected');
const color = document.getElementsByClassName('color');

for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', function(e){

        colorSelected.classList.remove("selected");
        e.target.classList.add('selected');
        colorSelected = e.target;

  });
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function() {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {

      pixels[index].style.backgroundColor = "rgb(255,255,255)";
    }
  }
  )

function createTable() {

  let pixelBoard = document.getElementById("pixel-board");

  for (let index = 0; index < 5; index += 1) {

      let line = document.createElement("div");
      pixelBoard.appendChild(line).className = "line";

      for (let index = 0; index < 5; index++) {

          let pixel = document.createElement("div");
          line.appendChild(pixel).className = "pixel";
      }
    }
  }



let cadaPixel = document.querySelectorAll('.pixel');

for (let index = 0; index < cadaPixel.length; index += 1) {

     let corN = cadaPixel[index];
     corN.addEventListener('click', function(e){
         e.target.style.backgroundColor = getComputedStyle(colorSelected).backgroundColor;
     })
 }

}

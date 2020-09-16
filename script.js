window.onload = function (){
  let boardpixel = 5;
  fillBoard(boardpixel);

function fillBoard(boardpixel) {
  let board = document.getElementById("pixel-board");
  for(let lines = 0; lines < boardpixel; lines += 1) {
    let pixelLine = document.createElement("div");
    pixelLine.className = 'pixelLine';
    board.appendChild(pixelLine);
      for (let column = 0; column < boardpixel; column += 1) {
          let pixel = document.createElement("input");
          pixel.className = 'pixel';
          pixel.type = 'button';
          pixelLine.appendChild(pixel);
      }
  }
}

let palet = document.querySelectorAll('.color');
for (let index = 0; index < palet.length; index += 1){
    palet[index].addEventListener('click', function(){
      let selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      palet[index].classList.add('selected');
  })
}

let changeColorPixel = document.querySelectorAll('.pixel');
for (let index = 0; index < changeColorPixel.length; index += 1){
changeColorPixel[index].addEventListener('click',  function(){
  let selectedColor = document.querySelector('.selected');
  changeColorPixel[index].style.backgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
})
}

let limpar = document.getElementById('clear-board');
limpar.addEventListener('click', function(){
  let clearColorPixel = document.querySelectorAll('.pixel');
for (let index = 0; index < clearColorPixel.length; index += 1){
 clearColorPixel[index].style.backgroundColor = 'white';
}
})
}

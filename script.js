let color = document.querySelectorAll('.color');

for (index = 0; index < color.length; index += 1)
  color[index].addEventListener('click', function (event) {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.className += ' selected';
  });

let pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', function (event) {
  let selected = document.querySelector('.selected');
  event.target.style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
});

let buttonClearBoard = document.getElementById('clear-board');
let allPixel = document.querySelectorAll('.pixel');
buttonClearBoard.addEventListener('click', function () {
    for (let index = 0; index < allPixel.length; index += 1) {
      allPixel[index].style.backgroundColor = 'white';
      console.log(allPixel[index])
   }
 });
console.log(allPixel)
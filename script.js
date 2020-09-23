const selectedPixel = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board');
const colors = document.querySelectorAll('.color');
const selectedColor = document.getElementsByName('selected');



for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function () {
      if (index === 0) {
        colors[0].className += ' selected';
        colors[1].className = 'color red';
        colors[2].className = 'color green';
        colors[3].className = 'color pink';
      } else if (index === 1) { 
        colors[0].className = 'color black'; 
        colors[1].className += ' selected';
        colors[2].className = 'color green';
        colors[3].className = 'color pink';
      } else if (index === 2) {
        colors[0].className = 'color black';
        colors[1].className = 'color red';
        colors[2].className += ' selected';
        colors[3].className = 'color pink';
      } else if (index === 3) {
        colors[0].className = 'color black';
        colors[1].className = 'color red';
        colors[2].className = 'color green';
        colors[3].className += ' selected';
      }
    });
  }
  

  for (let index = 0; index < selectedPixel.length; index += 1) {
    selectedPixel[index].addEventListener('click', function (event) {
      let colors = document.getElementsByClassName('selected')[0];
      let pixelColor = event.target;
      pixelColor.style.backgroundColor = getComputedStyle(colors).backgroundColor;
    });
  }
clearButton.addEventListener('click', function(){
    for(let index = 0; index < selectedPixel.length; index += 1){
        selectedPixel[index].style.backgroundColor = 'white';
    }
});
let colors = document.querySelectorAll('.color');

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', function () {
    let selected = document.querySelector('.selected')

    selected.classList.remove('selected');

    colors[i].classList.add('selected')
  })
}


let pixels = document.querySelectorAll('.pixel');

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function () {

    let selected = document.querySelector('.selected');
    pixels[i].style.backgroundColor = window.getComputedStyle(selected).backgroundColor
  })
}


let button = document.getElementById('clear-board');

button.addEventListener('click', function () {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white'
  }
})

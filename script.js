/* Select a color and add/remove 'selected' class from others elements. The 'selected' 
class staying only on clicked element */
let color = document.querySelectorAll('.color');

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', function (event) {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.className += ' selected';
  });
}

// Clear button 
const clearBtn = document.querySelector('#clear-board');

clearBtn.addEventListener('click', function () {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});

// Fill pixel with class selected's background-color
const pixel = document.querySelectorAll('.pixel');

for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', function () {
    const selected = document.querySelector('.selected');
    pixel[i].style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
  });
  }

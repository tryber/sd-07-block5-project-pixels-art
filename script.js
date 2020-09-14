let whiteBoard = document.querySelector('#pixel-board');
let pixels = document.querySelectorAll('.pixel');
let colors = document.querySelectorAll('.color');
let selectedColor = 'black';
let leButton = document.querySelector('#clear-board');

function updateColor(){
    for (let index = 0; index < colors.length; index += 1){
       if (colors[index].classList.contains('selected')){
        colors[index].classList.remove('selected');
       } 
    }
}

//selects color
for (let index of colors){
    index.addEventListener('click', function(){
        updateColor();
        selectedColor = event.target.getAttribute('id');
        event.target.classList.add('selected');
    })
}

//paints pixels
function pixelCasso(event){
    switch (selectedColor) {
        case 'red': 
        event.target.classList.remove('white');
        event.target.classList.add('red');
        break;
        case 'blue':
        event.target.classList.remove('white');
        event.target.classList.add('blue');
        break;
        case 'green':
        event.target.classList.remove('white');
        event.target.classList.add('green');
        break;
        default:
        event.target.classList.remove('white');
        event.target.classList.add('black');
    }
}

for (let index2 of pixels){
    index2.addEventListener('click', pixelCasso);
}

leButton.addEventListener('click', function(){
    for (let index = 0; index < pixels.length; index += 1){
        pixels[index].className = 'pixel white';
    }
})
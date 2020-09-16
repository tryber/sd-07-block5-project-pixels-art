let selectedColor = '';
let gridPaleta = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.pixel');

const buttonClear = document.querySelector('#clear-board');

buttonClear.addEventListener('click', () => {
  for (let i=0; i<pixels.length; i += 1){
    pixels[i].style.backgroundColor = 'white';
  }
})

for (let i=0; i<pixels.length; i += 1){
  pixels[i].addEventListener('click', (object) => {
    const pixel = object.target;
    pixel.style.backgroundColor = selectedColor;
  })
}

function pageLoad(){
  const colors = ['black', 'red', 'blue', 'green'];
  for(let i=0; i< gridPaleta.length; i += 1){
    gridPaleta[i].style.backgroundColor = colors[i];
    gridPaleta[i].addEventListener('click', (object) => changeColor(object));
  };
  gridPaleta[0].classList = 'color selected';
  selectedColor = colors[0];
}

function changeColor(object){
  const selectedObject = object.target;
  if(selectedObject.classList[1]){
    selectedColor = selectedObject.style.backgroundColor;
  }else{
    const previouslySelected = document.querySelector('.selected');
    previouslySelected.classList = 'color';
    selectedObject.classList = 'color selected';
    selectedColor = selectedObject.style.backgroundColor;
  }
}

// Documento já começa com a cor preto escolhido como padrão
let selectedColor = document.getElementById('black-index');

// Escolhendo a cor na paleta
function indexClick(item) {
  item.addEventListener('click', function () {
    document.querySelectorAll('color selected');
    item.classList.add('selected');
    selectedColor = item;
    item.classList.remove('selected');
  });
}
document.querySelectorAll('.color').forEach(indexClick);

// Pintando o pixel
function changePixelSelect(item) {
  item.addEventListener('click', (color) => {
    color = window
      .getComputedStyle(selectedColor)
      .getPropertyValue('background-color');
    item.style.backgroundColor = color;
  });
}
document.querySelectorAll('.pixel').forEach(changePixelSelect);

// Botão de limpar
const pixels = document.querySelectorAll('.pixel');
const clearAllPixels = document.getElementById('clear-board');
clearAllPixels.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

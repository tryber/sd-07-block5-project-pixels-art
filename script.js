// Function to make background body color auto change.
// function changeBKGColor () {
//   const body = document.getElementsByTagName('body')[0];
//   const title = document.getElementsByTagName('h1')[0];
//   const rColorRGB = Math.floor(Math.random() * 255);
//   const gColorRGB = Math.floor(Math.random() * 255);
//   const bColorRGB = Math.floor(Math.random() * 255);
//   body.style.backgroundColor = 'rgb(' + rColorRGB + ',' + gColorRGB + ',' + bColorRGB + ')';
//   title.style.color = 'rgb(' + rColorRGB + 1 + ',' + gColorRGB + ',' + bColorRGB + 1 +')';
// }
// const time = setTimeout (changeBKGColor, 0);
// Remove the bars fron the line above to see the efect.
const paletRandonColors = document.querySelectorAll('.color');
for (let count = 1; count < paletRandonColors.length; count+=1) {
  paletRandonColors[count].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
}
// Function to creat board pixel.
function setBoardSize(numberLines) {
  let vqvButton = document.querySelector('#board-size').value;
  document.getElementById('pixel-board').innerHTML = '';
  if (vqvButton === '') {
    alert('Board inválido!');
  } else if (vqvButton < 5) {
    numberLines = 5;
  } else if (vqvButton > 50) {
      numberLines = 50;
    } else if ((vqvButton >= 5) || (vqvButton <= 50)) {
        numberLines = vqvButton;
      } let pixelBoard = document.getElementById('pixel-board');
        pixelBoard.style.width = (numberLines * 40) +'px';
        pixelBoard.style.height = (numberLines * 40) +'px';
        let pixel = [];
        let divSize = numberLines**2;
          for (let count = 0; count < divSize; count += 1) {
            pixel[count] = document.createElement('div');
            pixel[count].className = 'pixel pixelBackG';
            pixelBoard.appendChild(pixel[count]);
          } document.querySelector('#board-size').value = '';
            document.querySelector('#board-size').focus();
}
const vqvButton = document.getElementById('generate-board');
vqvButton.addEventListener('click', setBoardSize);
//vqvButton.addEventListener('click', changeBKGColor);

// Function to add 'selected' class at selected color.
const colorPalet = document.querySelectorAll('.color');
for (let i = 0; i < colorPalet.length; i += 1) {
  colorPalet[i].addEventListener('click', function(event) {
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.className += ' selected';
  });
}

// // Function to add selected color at selected pixel.
// const pixelIten = document.querySelectorAll('.pixel');
//   for (let count = 0; count < pixelIten.length; count += 1) {
//     let pixel = document.querySelectorAll('.pixel');
//     pixel[count].addEventListener('click', function(event) {
//       let selectedPixel = document.querySelector('.selected');
//       event.target.className = 'pixel ' + selectedPixel.classList[1];
//     })
//   }
// document.getElementById('pixel-board').addEventListener('click', function () {
//   const pixelIten = document.querySelectorAll('.pixel');
//   for (let count = 0; count < pixelIten.length; count += 1) {
//     let pixel = document.querySelectorAll('.pixel');
//     pixel[count].addEventListener('click', function(event) {
//       let selectedPixel = document.querySelector('.selected');
//       event.target.className = 'pixel ' + selectedPixel.classList[1];
//     })
//   }
// });

// Clear bord block
// document.getElementById('clear-board').addEventListener('click', function () {
//   let pixelIten = document.querySelectorAll('.pixel');
//   for (let count in pixelIten) {
//     pixelIten[count].className = 'pixel pixelBackG';
//   }
// });

// O bloco a cima que está comentado foi minha primeira lógica para solução do projeto,
// este aqui de baixo foi desenvolvido durante o grupo de estudos, dirigido pelo aluno
// Luciano Berchon - Turma 07.
const pixelBoard = document.querySelector('.pixel-board');
pixelBoard.addEventListener("click", function(event) {
  let selected = document.querySelector(".selected");
  event.target.style.backgroundColor =  window.getComputedStyle(selected).backgroundColor;
});

const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', function() {
  const pixelIten = document.querySelectorAll('.pixel');
  for (let count = 0; count < pixelIten.length; count += 1) {
    pixelIten[count].style.backgroundColor = 'white';
  }
});

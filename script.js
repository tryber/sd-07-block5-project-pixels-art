let color = document.querySelectorAll('color');

for (index = 0; index < color.length; index += 1)
  color[index].addEventListener('click', function () {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    color[index].classList.add('selected');
  });

// let buttonClearBoard = document.getElementById("clear-board");

// buttonClearBoard.addEventListener('click', function () {
//   for (index = 0; index < pixel.length; index =+ 1)
//     pixel.style.backgroundColor = 'white';
// });

// function clearBoard() {
//     document.getElementsByClassName("pixel").style.backgroundColor = 'white';
// };

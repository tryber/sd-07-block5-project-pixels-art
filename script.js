const color = document.querySelectorAll('.color');
color[0].classList.add('selected');


const colorPalette = document.querySelector('.color-palette');

for (let indexColor = 1; indexColor <= 3; indexColor += 1) {
  const rgb = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };
  color[indexColor].style.backgroundColor = `rgb(${Object.values(rgb)})`;
}

colorPalette.addEventListener('click', (event) => {
  const selectedColor = document.querySelector('.selected');
  
  if (!event.target.classList.contains('selected')) {
    selectedColor.classList.toggle('selected');
    event.target.classList.toggle('selected');
  }
});

const pixelBoard = document.querySelector('#pixel-board');

const pixels = () => {
  document.querySelectorAll('.pixel').forEach((eachPixel) => {
  eachPixel.addEventListener("click", () => {
    const selectedColor = window
      .getComputedStyle(document.querySelector(".selected"))
      .getPropertyValue("background-color");
    eachPixel.style.backgroundColor = selectedColor;
  });
});
}

pixels();

const clearBtn = document.querySelector('#clear-board');
clearBtn.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(eachPixel => eachPixel.style.backgroundColor = 'white');
});

const size = (inputSize) => {
  let result = inputSize;
  if (inputSize <= 5) {
    result = 5;
  } else if (inputSize >= 50) {
    result = 50;
  }
  return result;
};

const generateBoard = (size) => {
  const pixelBoard = document.querySelector('#pixel-board');
  for (line = 1; line <= size; line += 1) {
    let newLine = document.createElement('div');
    newLine.classList.add('linha');

    for (column = 1; column <= size; column += 1) {
      let newColumn = document.createElement('div');
      newColumn.classList.add('pixel', 'celula');
      newLine.appendChild(newColumn);
    }

    pixelBoard.appendChild(newLine);
  }
  pixels();
};

const generateBoardBtn = document.querySelector("#generate-board");
generateBoardBtn.addEventListener("click", () => {
  const inputSize = document.querySelector("#board-size").value;
  if (inputSize !== "") {
    document.querySelector('#pixel-board').innerHTML = '';
    generateBoard(size(inputSize));
  } else {
    alert("Board inválido!");
  }
});
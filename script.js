let selected = document.querySelector('.selected');
const colors = document.querySelectorAll('.color');

const palleta1 = document.querySelector("#color-1");
const palleta2 = document.querySelector("#color-2");
const palleta3 = document.querySelector("#color-3");
const palleta4 = document.querySelector("#color-4");

function gerarNumeros () {
    return Math.floor(Math.random() * 255 +1);
}

function criarCorAleatoria () {
    let R = gerarNumeros();
    let G = gerarNumeros();
    let B = gerarNumeros();
    let RGB;
    if (R == 255 && G == 255 && B == 255) { // se R = 255, se G = 255, se B = 255, estarei gerando novos números!
        R = Math.ceil(Math.random() * 255);
        G = Math.ceil(Math.random() * 255);
        B = Math.ceil(Math.random() * 255);
    } else {
        RGB = `rgb(${R}, ${G}, ${B})`;
    }
    return RGB
}


function inserirCorPaleta () {
    palleta1.style.backgroundColor = 'black'
    palleta2.style.backgroundColor = criarCorAleatoria ();
    palleta3.style.backgroundColor = criarCorAleatoria ();
    palleta4.style.backgroundColor = criarCorAleatoria ();
    //palleta1.classList.add('selected');
}

function buttonclearBoard () {
    let clearBoard = document.querySelector("#clear-board");
    clearBoard.addEventListener('click', function () {
        const pixels = document.querySelectorAll('.pixel');
        for (let index = 0; index < pixels.length; index += 1) {
            pixels[index].style.backgroundColor = 'white';
          }
    })
}

function coloringPalette() {
    selected = document.querySelector('.selected');
    const pixels = document.querySelectorAll('.pixel');
    for (const cell of pixels) {
      cell.addEventListener('click', function () {
        event.target.style.backgroundColor = selected.style.backgroundColor;
      });
    }
}

function gettingTheColors() {
    for (const btn of colors) {
      btn.addEventListener('click', function () {
        if (!event.target.classList.contains('selected')) {
          selected.classList.remove('selected');
          event.target.classList.add('selected');
        }
        selected = document.querySelector('.selected');
      });
    }
}


function generateBoard (boardSize) { //default param number 5 // com auxilio de Lucas Ribeiro - turma 7
    const pixelBoard = document.querySelector('.pixel-board');
    for (let rows = 0; rows < boardSize; rows += 1) {
      const pixelRow = document.createElement('div');
      pixelRow.classList.add('pixel-row');
      for (let cells = 0; cells < boardSize; cells += 1) {
        const pixelCell = document.createElement('div');
        pixelCell.classList.add('pixel', 'border');
        pixelCell.style.backgroundColor = 'white';
        pixelRow.appendChild(pixelCell);
      }
      pixelBoard.appendChild(pixelRow);
    }
}


function conditionCreateTable(){  //Com ajuda do meu novo amigo Lucas Martins Ribeiro - tryber turma 7
    const generateBoard1 = document.querySelector('#generate-board');
    let pixelBoard = document.getElementById('pixel-board');
    generateBoard1.addEventListener('click',function () {
        let boardSize = document.getElementById('board-size').value;
    
        if (boardSize < 5 || boardSize === undefined || boardSize === null
            ){
                boardSize.value = 5;  
                alert('Board Inválido!');
            } else if (boardSize > 50) {
                boardSize.value = 50;
                alert('Board Inválido!');
            }
            pixelBoard.innerHTML = '';
            generateBoard (boardSize);
            gettingTheColors ();
            coloringPalette()
    })
}



window.onload = () => {
    conditionCreateTable()
    inserirCorPaleta ()
    generateBoard (5)
    coloringPalette()
    buttonclearBoard ()
    gettingTheColors()
}

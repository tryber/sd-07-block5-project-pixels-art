let numbersOfBlocksInLine = 5;
document.getElementById('color-palette').addEventListener("click", function(event) {
  if (event.target.classList.contains('selected')) {
    alert('Esta cor já está selecionada')
  } else {
    let paints = document.querySelectorAll('.color')
    for (let index = 0; index < paints.length; index++) {
      paints[index].classList.remove('selected')
    }
    event.target.classList.add('selected')
  }
})

document.getElementById('pixel-board').addEventListener('click', function(event) {
  if (event.target.classList.contains('pixel')) {
    let selectedColor = document.querySelectorAll('.selected')[0]
    let colorToUse = window.getComputedStyle(selectedColor, null).getPropertyValue("background-color")
    event.target.style.backgroundColor = colorToUse
  }
})

function clearBoard() {
  let allPixels = document.querySelectorAll('.pixel')
  for (let index = 0; index < allPixels.length; index+=1) {
    allPixels[index].style.backgroundColor = 'white'
  }
}

function defineBoardSize() {
  let inputSizeValue = document.getElementById('define-board-size').value;
  let containerSize = (inputSizeValue * 210)/numbersOfBlocksInLine;
  document.getElementById("pixel-board").style.width = `${containerSize}px`
  document.getElementById("pixel-board").innerHTML = ""
  for (let index = 0; index < inputSizeValue**2; index+=1) {
    let block = document.createElement('div')
    block.className = "pixel"
    document.getElementById("pixel-board").appendChild(block)
  }
}

document.getElementById('clear-board').addEventListener('click', clearBoard)
window.onload = function() {
  for (let index = 0; index < numbersOfBlocksInLine**2; index+=1) {
    let block = document.createElement('div')
    block.className = "pixel"
    document.getElementById("pixel-board").appendChild(block)
  }
}

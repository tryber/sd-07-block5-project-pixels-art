const select = document.querySelector('#color-palette');
const paint = document.querySelector('#pixel-board');
const clear = document.querySelector('#clear-board');
const changeSize = document.querySelector('#generate-board');

function randomPalette() {
  //Random color code source: https://css-tricks.com/snippets/javascript/random-hex-color/
  document.getElementById('second').style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  document.getElementsByClassName('third')[0].style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  document.getElementsByClassName('fourth')[0].style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

select.addEventListener('click', function () {
  if (event.target.id == 'fourth' ) {
    document.getElementById('black').className = 'color black';
    document.getElementById('second').className = 'color second';
    document.getElementById('third').className = 'color third';
    document.getElementById('fourth').className = 'color fourth selected';
  } else if (event.target.id == 'black') {
    document.getElementById('black').className = 'color black selected';
    document.getElementById('second').className = 'color second';
    document.getElementById('third').className = 'color third';
    document.getElementById('fourth').className = 'color fourth';
  } else if (event.target.id == 'second') {
    document.getElementById('black').className = 'color black';
    document.getElementById('second').className = 'color second selected';
    document.getElementById('third').className = 'color third';
    document.getElementById('fourth').className = 'color fourth';
  } else if (event.target.id == 'third') {
    document.getElementById('black').className = 'color black';
    document.getElementById('second').className = 'color second';
    document.getElementById('third').className = 'color third selected';
    document.getElementById('fourth').className = 'color fourth';
  }
})

paint.addEventListener('click', function () {

  //alert(event.target.className.style.backgroundColor)

  selectedColor = document.getElementsByClassName('selected')[0];
  selectedClass = selectedColor.className;
  array = selectedClass.split(' ');
  newClass = array[1];
  if (event.target.className.includes('pixel')) {
    event.target.className = `pixel ${newClass}`;
  }
});

clear.addEventListener('click', function () {
  let boardLength = document.querySelectorAll('#pixel-board .pixel').length;
  for (index = 0; index < boardLength; index += 1) {
    document.getElementsByClassName('pixel')[index].className = 'pixel';
  }
})

changeSize.addEventListener('click', function () {
  textSize = document.querySelector('#board-size').value;
    if (textSize == '') {
    alert('Board inválido!')
  } else if (parseInt(textSize) <= 5) {
    for ( index = 0; index < 25; index += 1) {
      document.getElementsByClassName('pixel')[index].style.height = '5px';
      document.getElementsByClassName('pixel')[index].style.width = '5px';
      document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
    }
  } else if (parseInt(textSize) >= 50) {
    for ( index = 0; index < 25; index += 1) {
      document.getElementsByClassName('pixel')[index].style.height = '50px';
      document.getElementsByClassName('pixel')[index].style.width = '50px';
      document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
    }
  } else {
    for ( index = 0; index < 25; index += 1) {
      document.getElementsByClassName('pixel')[index].style.height = `${textSize}px`;
      document.getElementsByClassName('pixel')[index].style.width = `${textSize}px`;
      document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
    }
  }
});




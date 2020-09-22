window.onload = function () {
  const itensPaleta = document.querySelectorAll('li');
  let chosenColor = document.querySelector('.selected');
  const allQuadros = document.getElementsByTagName('td');

  function switchColors() {
    for (let index = 0; index < itensPaleta.length; index += 1) {
      itensPaleta[index].classList.remove('selected');
    }
    this.classList.add('selected');
    chosenColor = document.querySelector('.selected');
  }

  function paintPixel() {
    this.className = `pixel ${chosenColor.classList[1]}`;
  }

  for (let i = 0; i < itensPaleta.length; i += 1) {
    itensPaleta[i].addEventListener('click', switchColors);
  }

  for (let i = 0; i < allQuadros.length; i += 1) {
    allQuadros[i].addEventListener('click', paintPixel);
  }
};

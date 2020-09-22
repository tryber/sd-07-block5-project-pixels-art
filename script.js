let pixelBoard = document.querySelector('#pixel-board');

let paletaCores = document.getElementsByClassName('color');

for (let index = 0; index < paletaCores.length; index += 1) {
    console.log("entrei no for");
    paletaCores[index].addEventListener("click", function() {selecionaCor(paletaCores[index]);});
}

for (let index = 1; index < 26; index += 1) {
    let myPixel = document.createElement('DIV');
    myPixel.className = "pixel";
    pixelBoard.appendChild(myPixel);
    myPixel.addEventListener("click", function() {pintarPixel(myPixel);});
    if (index % 5 === 0) {
        pixelBoard.appendChild(document.createElement('BR'));
    }
}

document.querySelector('.black').className = "color black selected";

function selecionaCor(cor){
    for (let index = 0; index < paletaCores.length; index += 1) {
        if(paletaCores[index].classList.contains('selected')) {
            paletaCores[index].classList.remove('selected');
        }
    }
    cor.classList.add('selected');
}

function pintarPixel(pixel) {
    console.log("pintei um pixel");
    let corSelecionada = document.getElementsByClassName('selected');
    pixel.style.backgroundColor = corSelecionada[0].classList[1];
}
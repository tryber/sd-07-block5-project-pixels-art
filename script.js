const tabelaDePixel = document.getElementById('pixel-board')
let pixel = [];
let linha = [];
let numeroDeLinhas = 5
let contaPixel = 0

for (let i = 0; i < numeroDeLinhas; i += 1) {
    linha[i] = document.createElement('div');
    linha[i].className = 'linha';
    tabelaDePixel.appendChild(linha[i])
    for (let j = 0; j < 5; j += 1) {
        pixel[contaPixel] = document.createElement('div');
        pixel[contaPixel].className = 'pixel'
        linha[i].appendChild(pixel[contaPixel]);
        contaPixel += 1;
    }
}
let color = document.querySelectorAll('.color')
for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener("click", function(){
       let selected = document.querySelector('.selected')
       selected.classList.remove('selected')
       color[i].classList.add('selected')
    })
    
}

for (let i = 0; i < contaPixel; i += 1) {
    pixel[i].addEventListener("click", function(){
        let pintar = document.querySelector('.selected')
        pintar = getComputedStyle(pintar)
        corDoPixel = getComputedStyle(pixel[i])
        pixel[i].style.backgroundColor = pintar.backgroundColor

    })
}
let limpar = document.getElementById('clear-board')
limpar.addEventListener('click', function(){
    for (let i = 0; i < contaPixel; i += 1) {
        pixel[i].style.backgroundColor = 'white'
    }
})


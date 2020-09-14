
let quadrados = document.querySelectorAll(".pixel");
let botaoDeLimpar = document.querySelector("#clear-board");
let cores= document.querySelectorAll(".color");

//essa variavel é encarregada de cuidar de que quando houver um click em um quadradinho usando o window.getComputedStyle ele manda um chamado para o meu DOM modificar a cor de fundo do meu quadradinho selecionado nessa função eu prcisei de ajuda do meu irmão, uma pessoa de fora da trybe para entender como usar e qual a estrutura de window.getComputedStyle pois eu realmente não havia entendido e ele me ajudou com isso
quadrados.forEach(function(item){
    item.addEventListener("click", function(){
        let selecionado = document.querySelector(".selected")
        item.style.backgroundColor = window.getComputedStyle(selecionado).backgroundColor;
    })
})
// essa função é encarregada de resetar a let selecionado para atribuir a classe selected a outra div que sera a cor escolhida para pintar o quadradinho escolhido, usando o forEach eu caminho por todas as opções para que essa atualização seja feita
function selecionarCor (item){
    item.addEventListener("click", function(){
        let selecionado = document.querySelector(".selected");
        selecionado.classList.remove("selected");
        item.classList.add("selected")
    })
}
cores.forEach(selecionarCor)




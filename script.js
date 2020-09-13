// Seleção de cores da paleta

let black = document.querySelector("#black");
let azul = document.querySelector("#blue");
let red = document.querySelector("#red");
let purple = document.querySelector("#purple");
let cor = "black";

let ultima = document.querySelector(".selected");
let cor2 = corAleatoria();
let cor3 = corAleatoria();
let cor4 = corAleatoria();

azul.style.backgroundColor = cor2;
red.style.backgroundColor = cor3;
purple.style.backgroundColor = cor4;


function corAleatoria() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let aleatoria = "rgb(" + x + "," + y + "," + z + ")";
    return (aleatoria)
    }

black.addEventListener("click",function(){
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("black").classList.add("selected");
    cor = "black"
})

azul.addEventListener("click",function(){
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("blue").classList.add("selected");
    cor = cor2;
})

red.addEventListener("click",function(){
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("red").classList.add("selected");
    cor = cor3;
})


purple.addEventListener("click",function(){
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("purple").classList.add("selected");
    cor = cor4;
})


// Tamanho do board definido pelo usuário
let input = document.getElementById("board-size");
let tamanho =0;

input.addEventListener("change", function(){
    tamanho = input.value;
    if (tamanho<5){
        tamanho=5;
    }else if (tamanho>50){
        tamanho=50;
    }
})
let vqv  = document.getElementById("generate-board");
vqv.addEventListener("click", function(){
    if (tamanho === 0){
        alert("Board inválido!")
        
    } else{
    document.getElementById("pixel-board").innerHTML = ' ';
    
    for (let i =0;i<tamanho;i+=1){
        let linha = document.createElement("tr");
        linha.classList = "linha";
        document.getElementById("pixel-board").appendChild(linha);
        console.log ("linha");
        for (let j=0;j<tamanho;j+=1){
            let pixel = document.createElement("td");
            pixel.classList = "pixel"
            document.getElementsByClassName("linha")[i].appendChild(pixel);
        }
    }
    criarEventos();
    
    }
})

//Mudar a cor dos pixels

function criarEventos(){
    let qualPixel = document.querySelectorAll(".pixel")
for (let i = 0; i < qualPixel.length; i++) {
    (function(i) {
         qualPixel[i].addEventListener("click", function() {
           
             qualPixel[i].style.backgroundColor = cor;          
        })
    })(i);
 }
}
criarEventos();

//botão para limpar o desenho
let botao = document.getElementById("clear-board");
botao.addEventListener("click", function(){
    let qualPixel = document.querySelectorAll(".pixel")
    for (let i=0;i<qualPixel.length; i+=1){
        qualPixel[i].style.backgroundColor = "white";
    }
})
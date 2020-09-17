// criar um variavel dinâmico para usuario digita numero de quadrados. 
let numberLines = 5;

// criando uma variavel que sera igual a Id pixel-board
let pixelBorad = document.getElementById("pixel-board");

// criando a variaveis para linha e quadrado
let pixel = [];
let line = [];

//adicionar um div  com a classe linha
line[0] = document.createElement("div");
line[0].className = "line"

// armazenar os quadrado
let lineZero = 0 ;

// criar a linha de comprimento
for(let index = 0; index < numberLines; index +=1){
line[index] = document.createElement("div");
line[index].className = "line";
pixelBorad.appendChild(line[index]);


//criar os quadrados  dentro da linha
for(let ind2 = 0 ; ind2 < numberLines; ind2 +=1){
pixel[lineZero] = document.createElement("div");
pixel[lineZero].className="pixel";
line[index].appendChild(pixel[lineZero]);
lineZero = lineZero + 1;


}
}

// criando  a variavel para pegar todos os elemento com a class .color
let color= document.querySelectorAll(".color");

// removendo o selected e add e outro lugar com o click
for(let index = 0; index < color.length; index +=1){

color[index].addEventListener("click", function(event){
let selected = document.querySelector(".selected");
selected.classList.remove('selected');
event.target.className += " selected";
})
}

// colocar cor no quadrado que foi clicado
for(let index = 0; index < pixel.length; index +=1){
pixel[index].addEventListener("click", function(){
    let selected = document.querySelector(".selected");
    pixel[index].style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
})
}

//colocar o botão no variavel
let buttonClear = document.getElementById("clear-board");

buttonClear.addEventListener('click',function(){
for(let index = 0; index < pixel.length; index += 1){
pixel[index].style.backgroundColor = "rgb(255,255,255)";

}
});

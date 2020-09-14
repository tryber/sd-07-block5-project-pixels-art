let corUm = document.querySelector(".selected");
corUm.style.backgroundColor = "black"

let corDois = document.querySelector("#cor2");
corDois.style.backgroundColor = "purple";

let corTres = document.querySelector("#cor3");
corTres.style.backgroundColor = "yellow";

let corQuatro = document.querySelector("#cor4");
corQuatro.style.backgroundColor = "red";

// selecionando e removendo seleção
corUm.addEventListener("click", function () {
  document.querySelector(".selected").classList.remove("selected");
  corUm.classList.add("selected");
});

corDois.addEventListener("click", function () {
  document.querySelector(".selected").classList.remove("selected");
  corDois.classList.add("selected");
});

corTres.addEventListener("click", function () {
document.querySelector(".selected").classList.remove("selected");
corTres.classList.add("selected");
});

corQuatro.addEventListener("click", function () {
document.querySelector(".selected").classList.remove("selected");
corQuatro.classList.add("selected");
});

let pixel = document.querySelectorAll(".pixel");
console.log(pixel);
  
function colorir(i){
  pixel[i].addEventListener('click', function () {
    let corSelecionada = document.querySelector(".selected");
    pixel[i].style.backgroundColor = corSelecionada.style.backgroundColor;
 });
}

for (let i = 0; i < pixel.length; i += 1) {
    colorir(i);
}

let botaoLimpar = document.querySelector("#clear-board");
botaoLimpar.addEventListener("click", function(){
    for (let i = 0; i < pixel.length; i += 1){
       pixel[i].style.backgroundColor = "white";
    }
});
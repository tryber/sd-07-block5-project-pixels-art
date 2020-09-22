
let black = document.querySelector(".black");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let selected = document.querySelector(".selected");
let pixel = document.querySelectorAll(".pixel");



    
    
selected = window.getComputedStyle(selected, null).getPropertyValue("background-color");

black.addEventListener("click", function (){
    selected = window.getComputedStyle(black, null).getPropertyValue("background-color"); 
    black.classList.remove('selected'); /*https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList add e remove classList, para retirar caso clicque duas vezes no mesmo item da paleta e add para adicionar  */
    black.classList.add('selected');
    blue.classList.remove('selected');
    red.classList.remove('selected');
    green.classList.remove('selected');
      
})

blue.addEventListener("click", function (){
    blue.classList.remove('selected');
    blue.classList.add('selected');
    selected = window.getComputedStyle(blue, null).getPropertyValue("background-color"); 
    black.classList.remove('selected');
    red.classList.remove('selected');
    green.classList.remove('selected');
    
})


red.addEventListener("click", function (){
    selected = window.getComputedStyle(red, null).getPropertyValue("background-color");  
    red.classList.remove('selected');
    red.classList.add('selected');
    blue.classList.remove('selected');
    black.classList.remove('selected');
    green.classList.remove('selected');
})

green.addEventListener("click", function (){
    selected = window.getComputedStyle(green, null).getPropertyValue("background-color");  
    green.classList.remove('selected');
    green.classList.add('selected');
    blue.classList.remove('selected');
    red.classList.remove('selected');
    black.classList.remove('selected');
})


for(let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener("click", function(){
        pixel[i].style.backgroundColor = selected;
    });
}








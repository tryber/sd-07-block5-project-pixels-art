let numberLines = 5;
let pixelBoard = document.getElementById("pixel-board");

let pixel = []
let linha = []

let k = 0
for (let i = 0; i < numberLines; i +=1){
    linha[i] = document.createElement("div");
    linha[i].className = "linha"
    pixelBoard.appendChild(linha[i]);

    for(let j = 0; j < numberLines; j += 1 ){
      pixel[k] = document.createElement("div");
      pixel[k].className = "pixel"
      linha[i].appendChild(pixel[k])
      k = k + 1;
    }
}
console.log(pixel);



let colorSelected = document.getElementsByClassName("color");
//let pixel = [];

for(let i = 0; i < 4; i += 1){
    colorSelected[i].addEventListener("click", function(){
        document.querySelector(".selected").classList.remove("selected");
        colorSelected[i].classList.add("selected")
    });
}


//for(let i = 0; i < pixel.length; i += 1){
//    pixel[i].addEventListener("click", function(){
//        let selected = document.querySelector(".selected")
//        console.log(selected);

//        pixel[i].style.backgroundColor = selected.style.backgroundColor
//        console.log(window.getComputedStyle(selected).backgroundColor)
//    })
//}
//

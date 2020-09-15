window.onload = function(){
    
    let colorBlack = document.getElementById("black");
    let colorBlue = document.getElementById("blue");
    let colorGreen = document.getElementById("green");
    let colorRed = document.getElementById("red");
    let colorSelect = "black";
    let btnClear = document.getElementById("clear-board");


    colorBlue.addEventListener("click", function(){
        colorBlue.classList.add("selected");
        colorBlack.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorRed.classList.remove("selected");
        colorSelect = "blue";
    });
    colorGreen.addEventListener("click", function(){
        colorGreen.classList.add("selected");
        colorBlack.classList.remove("selected");
        colorBlue.classList.remove("selected");
        colorRed.classList.remove("selected");
        colorSelect = "green";
    });
    colorRed.addEventListener("click", function(){
        colorRed.classList.add("selected");
        colorBlack.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorBlue.classList.remove("selected");
        colorSelect = "red";
    });
    colorBlack.addEventListener("click", function(){
        colorBlack.classList.add("selected");
        colorBlue.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorRed.classList.remove("selected");
        colorSelect = "black"
    });

    for(let index = 0; index <= 24; index += 1){
        let pixelValor = document.querySelectorAll(".pixel")[index];
        pixelValor.addEventListener("click", function(){
        pixelValor.style.backgroundColor = colorSelect;
        });
    } 
    
    btnClear.addEventListener("click", function(){
        for(let indexClear = 0; indexClear <= 24; indexClear += 1){
            let pixelClear = document.querySelectorAll(".pixel")[indexClear];
            pixelClear.style.backgroundColor = "white";
        }
    })
}
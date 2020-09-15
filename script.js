window.onload = function(){
    //Declarando variáveis
    let colorBlack = document.getElementById("black");
    let colorBlue = document.getElementById("blue");
    let colorGreen = document.getElementById("green");
    let colorRed = document.getElementById("red");
    let colorSelect = "black";
    let btnClear = document.getElementById("clear-board");
    //Bonus
    let divMother = document.getElementById("pixel-board");
    let btnVQV = document.getElementById("generate-board");
      
    //Adicionando 4 eventos para selecionar cor específica
    colorBlue.addEventListener("click", function(){
        colorBlue.classList.add("selected");
        //removendo das outras 3 cores
        colorBlack.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorRed.classList.remove("selected");
        colorSelect = "blue";
    });
    colorGreen.addEventListener("click", function(){
        colorGreen.classList.add("selected");
        //removendo das outras 3 cores
        colorBlack.classList.remove("selected");
        colorBlue.classList.remove("selected");
        colorRed.classList.remove("selected");
        colorSelect = "green";
    });
    colorRed.addEventListener("click", function(){
        colorRed.classList.add("selected");
        //removendo das outras 3 cores
        colorBlack.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorBlue.classList.remove("selected");
        colorSelect = "red";
    });
    colorBlack.addEventListener("click", function(){
        colorBlack.classList.add("selected");
        //removendo das outras 3 cores
        colorBlue.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorRed.classList.remove("selected");
        colorSelect = "black"
    });
    //Colorindo o quadro inicial
    for(let index = 0; index < 25; index += 1){ 
        let pixelValor = document.querySelectorAll("div .pixel")[index];
        pixelValor.addEventListener("click", function(){
        pixelValor.style.backgroundColor = colorSelect;
        });
    }
    //Apagando o quadro inicial
    btnClear.addEventListener("click", function(){
        for(let indexClear = 0; indexClear < 25; indexClear += 1){
            let pixelClear = document.querySelectorAll("div .pixel")[indexClear];
            pixelClear.style.backgroundColor = "white";
        }
    });
    //Novo desafio
    btnVQV.addEventListener("click", function(){
        //Checando o valor input
        let inputNumb = document.getElementById("board-size");
        if(inputNumb.value >= 50){
            inputNumb.value = 50;
        }
        else if(inputNumb.value == 0){
            alert("Board inválido!");
            inputNumb.value = 5;
        }
        else if(inputNumb.value <= 5){
            inputNumb.value = 5;
        }
        else{
            inputNumb = inputNumb;
        }
        //Excluindo div's antigas
        let divTr4 = document.querySelectorAll("div .tr")[4];
        divMother.removeChild(divTr4);
        let divTr3 = document.querySelectorAll("div .tr")[3];
        divMother.removeChild(divTr3);
        let divTr2 = document.querySelectorAll("div .tr")[2];
        divMother.removeChild(divTr2);
        let divTr1 = document.querySelectorAll("div .tr")[1];
        divMother.removeChild(divTr1);
        let divTr0 = document.querySelectorAll("div .tr")[0];
        divMother.removeChild(divTr0);
        
        //Criando div's e incluindo-as no quadro
        let inputNumbQuad = (inputNumb.value * inputNumb.value);
        for(let divIndex = 0; divIndex < inputNumb.value; divIndex += 1){
            let linhaDiv = document.createElement("div");
            divMother.appendChild(linhaDiv);
            linhaDiv.className = "tr";
            for(let divIndex2 = 0; divIndex2 < inputNumb.value; divIndex2 += 1){
                let divPixelSon = document.createElement("div");
                linhaDiv.appendChild(divPixelSon);
                divPixelSon.className = "pixel";
            }
        }
        //Usando estrutura de repetição para pintar os pixels
        for(let index = 0; index < inputNumbQuad; index += 1){ 
            let pixelValor = document.querySelectorAll("div .pixel")[index];
            pixelValor.addEventListener("click", function(){
            pixelValor.style.backgroundColor = colorSelect;
            });
        }
        //Adicionando o evento de tornar os pixels branco novamente
        btnClear.addEventListener("click", function(){
            for(let indexClear = 0; indexClear < inputNumbQuad; indexClear += 1){
                let pixelClear = document.querySelectorAll("div .pixel")[indexClear];
                pixelClear.style.backgroundColor = "white";
            }
        });
    
    });  
}
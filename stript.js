window.onload = function(){
    /* valorInicial() */
    criarPrimeiraTela()
    criarPaleta()
}

/* Cor aleatória Simples - https://stackoverflow.com/questions/1484506/random-color-generator*/



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

/* Criando Paleta Aleatória */

let color2 = getRandomColor()
let color3 = getRandomColor()
let color4 = getRandomColor()

function criarPaleta(){
    let bcolor1 = document.querySelector(".c1")
    let bcolor2 = document.querySelector(".c2")
    let bcolor3 = document.querySelector(".c3")
    let bcolor4 = document.querySelector(".c4")

    bcolor1.style.backgroundColor = "black"
    bcolor2.style.backgroundColor = color2
    bcolor3.style.backgroundColor = color3
    bcolor4.style.backgroundColor = color4
}

/* Crianto a Tela */

/* function valorInicial(){
    let printSize = document.querySelector("#board-size")
    printSize.value = 5
} */

function criarPrimeiraTela(){
    let printSize = 5
    if (printSize != "") {
        let tabela = document.querySelector("#pixel-board")
        tabela.innerHTML = ""
        for (let i = 0; i< printSize; i+=1){
            let linha = document.createElement("tr")
                for (let i = 0; i< printSize; i+=1) {
                    let coluna = document.createElement("td")
                    coluna.className = "pixel"
                    coluna.style.height = "40px"
                    coluna.style.width = "40px"
                    coluna.style.backgroundColor = "branco"
                    coluna.style.border = "black 1px solid"
                    coluna.addEventListener("click", pintar)
                    linha.append(coluna)
                }
            tabela.append(linha)
       }
    }
}

function criarTela(){
    let printSize = tamanho()
    if (printSize != "") {
        let tabela = document.querySelector("#pixel-board")
        tabela.innerHTML = ""
        for (let i = 0; i< printSize; i+=1){
            let linha = document.createElement("tr")
                for (let i = 0; i< printSize; i+=1) {
                    let coluna = document.createElement("td")
                    coluna.className = "pixel"
                    coluna.style.height = "40px"
                    coluna.style.width = "40px"
                    coluna.style.backgroundColor = "branco"
                    coluna.style.border = "black 1px solid"
                    coluna.addEventListener("click", pintar)
                    linha.append(coluna)
                }
            tabela.append(linha)
       }
    }
}

function tamanho(){
    let printSize = document.querySelector("#board-size").value
    if (printSize === "") {alert("Board inválido!")}
    else if (printSize > 50) {printSize = 50}
    else if (printSize < 5 ) {printSize = 5}
    return printSize
    
}

function limparTela(){
    let tabela = document.querySelector("#pixel-board")
    let printSize = tabela.rows.length
    if (printSize != "") {
        let tabela = document.querySelector("#pixel-board")
        tabela.innerHTML = ""
        for (let i = 0; i< printSize; i+=1){
            let linha = document.createElement("tr")
                for (let i = 0; i< printSize; i+=1) {
                    let coluna = document.createElement("td")
                    coluna.className = "pixel"
                    coluna.style.height = "40px"
                    coluna.style.width = "40px"
                    coluna.style.backgroundColor = "branco"
                    coluna.style.border = "black 1px solid"
                    coluna.addEventListener("click", pintar)
                    linha.append(coluna)
                }
            tabela.append(linha)
       }
    }
}

/* Botão Limpar */

let btnLimpar = document.querySelector("#clear-board")
btnLimpar.addEventListener("click", limparTela)

/* Botão VQV */

let btnVQV = document.querySelector("#generate-board")
btnVQV.addEventListener("click",criarTela)

/* Pintando */

let corAtual = "black"

function pintar(){
    event.target.style.backgroundColor = corAtual
}

/* Menu Cores */
let c1 = document.querySelector(".c1")
c1.addEventListener("click", clickc1)

let c2 = document.querySelector(".c2")
c2.addEventListener("click", clickc2)

let c3 = document.querySelector(".c3")
c3.addEventListener("click", clickc3)

let c4 = document.querySelector(".c4")
c4.addEventListener("click", clickc4)

function clickc1(){
    corAtual = "black"
    c1.className = "color c1 selected"
    c2.className = "color c2"
    c3.className = "color c3"
    c4.className = "color c4"
}

function clickc2(){
    corAtual = color2
    c1.className = "color c1"
    c2.className = "color c2 selected"
    c3.className = "color c3"
    c4.className = "color c4"
}

function clickc3(){
    corAtual = color3
    c1.className = "color c1"
    c2.className = "color c2"
    c3.className = "color c3 selected"
    c4.className = "color c4"
}

function clickc4(){
    corAtual = color4
    c1.className = "color c1"
    c2.className = "color c2"
    c3.className = "color c3"
    c4.className = "color c4 selected"
}

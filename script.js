//getComputedStyles

window.onload = function() {

    const paleta = document.getElementsByClassName("color");
    const pixels = document.getElementsByClassName("pixel")
    const mainContainer = document.getElementById("mainContainer")
    

    function fillPalette(){
        const colors = ['rgb(0,0,0)', 'rgb(0,128,0)', 'rgb(255,255,0)','rgb(0,0,255)'];
        
        
        for (let index = 0; index < 4; index += 1) {
            let color = colors[index]
            paleta[index].style.backgroundColor = color; 
        }
    }

    function createFirstBoard(){
        const pixelBoard = document.createElement("div");
        pixelBoard.id = "pixel-board"
        for(let index = 0; index < 5; index+=1){
            let line = document.createElement("div")
            line.className = "line"
            for ( let index2 = 0; index2 < 5; index2 +=1 ) {
                let pixel = document.createElement("div")
                pixel.className = "pixel"
                pixel.style.backgroundColor = "white"
                line.appendChild(pixel)     
            }
        pixelBoard.appendChild(line)
        }

        mainContainer.appendChild(pixelBoard)
    }

    fillPalette();
    createFirstBoard();
    
    //adiciona um leitor de eventos em cada cor da paleta
    for (const color of paleta) {
        color.addEventListener('click',function(){
            for(let index = 0; index < paleta.length; index += 1 ){
                paleta[index].classList.remove('selected')
            }
            color.classList.add("selected")
        })
    }

    for (const pixel of pixels) {
        pixel.addEventListener('click',function(){
            let colorSelected = document.querySelector(".selected")
            pixel.style.backgroundColor = colorSelected.style.backgroundColor
        })
    }
    
}




let collorPallet = document.getElementsByClassName("color")
collorPallet[0].style.backgroundColor = "rgb(0, 0, 0)"
for (let count = 1; count < collorPallet.length ; count +=1 ){
    collorPallet[count].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);     
}

let pixels = document.getElementsByClassName("pixel");
function clearPixels(){
    for (let count = 0; count < pixels.length; count+=1){
    pixels[count].style.backgroundColor = "rgb(255, 255, 255)";
    }
}

let selected = collorPallet[0];

document.addEventListener("click", function(event){
    if(event.target.className == "pixel"){
        event.target.style.backgroundColor = selected.style.backgroundColor;
    }
    else if (event.target.className == "color"){
        selected.className = "color";
        selected = event.target;
        selected.className = "color selected";
                
        }
})
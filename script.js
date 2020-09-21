let colorSelected = document.getElementsByClassName("color");

for(let i = 0; i < 4; i += 1){
    colorSelected[i].addEventListener("click", function(){
        document.querySelector(".selected").classList.remove("selected");
        colorSelected[i].classList.add("selected")
    });
}

//testando1
let colorSelected = document.getElementsByClassName("color");
let pixel = [];

for(let i = 0; i < 4; i += 1){
    colorSelected[i].addEventListener("click", function(){
        document.querySelector(".selected").classList.remove("selected");
        colorSelected[i].classList.add("selected")
    });
}


for(let i = 0; i < pixel.length; i += 1){
    pixel[i].addEventListener("click", function(){
        let selected = document.querySelector(".selected")
        console.log(selected);

        pixel[i].style.backgroundColor = selected.style.backgroundColor
        console.log(window.getComputedStyle(selected).backgroundColor)
    })
}

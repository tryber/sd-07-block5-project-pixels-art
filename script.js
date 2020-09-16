document.querySelectorAll(".color")[0].classList.add("selected");
document.querySelector("#clear-board").addEventListener("click",function(){
  document.querySelectorAll('.pixel').forEach(item => {
        item.style.backgroundColor = "white";
  })
});

document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', event => {
        let selectedColor = document.querySelector(".selected");  
        let previusColor = document.querySelector(".selected");
        let colorexib = window.getComputedStyle(item,null).getPropertyValue("background-color")
        previusColor.classList.remove("selected");
        item.classList.add("selected");
        document.querySelector(".exibition-color").style.backgroundColor = colorexib;
    })
  })

  document.querySelectorAll('.pixel').forEach(item => {
    item.addEventListener('click', event => {
        let elementSelected = document.querySelector(".selected");
        let elementWithCssProp = window.getComputedStyle(elementSelected,null).getPropertyValue("background-color");
        item.style.backgroundColor = elementWithCssProp;
    })
  })
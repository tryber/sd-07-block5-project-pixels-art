let mouse;
let colorPicked = document.querySelector(".selected");

document.getElementById('clear-board').addEventListener('click', function(){
  console.log('eu estou aqui');
  let pixels = document.querySelectorAll('.pixel');
  for(let index = 0; index < pixels.length; index += 1){
    pixels[index].style.backgroundColor = 'white';
  }
});

document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList.contains("black")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    } else if (event.target.classList.contains("red")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    } else if (event.target.classList.contains("blue")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    } else if (event.target.classList.contains("green")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    }
  },
  false
);

document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList.contains("pixel")) {
      event.target.style.backgroundColor = mouse;
    }
  },
  false
);


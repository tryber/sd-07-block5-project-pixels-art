window.onload = function () {

  document.getElementById("clear-board").addEventListener("click",function () {
    const elements = document.getElementsByClassName("pixel");
    for (let key = 0; key < elements.length; key += 1) {
      elements[key].style.backgroundColor = "rgb(255, 255, 255)";
    }
  });

  let elementPixel;
  let origin;
  let pixel = document.querySelectorAll(".pixel");

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener("click", function (e) {
      elementPixel = e.target;
      origin = document.querySelector(".selected");
      elementPixel.style.backgroundColor = origin.classList[1];
    });
  }

  let color = document.getElementsByClassName("color");
  let elementColor;

  for (let j = 0; j < color.length; j += 1) {
    color[j].addEventListener("click", function (e){
      origin = document.querySelector(".selected");
      origin.classList.remove("selected");
      elementColor = e.target;
      elementColor.classList.add("selected");
    });
  }
}

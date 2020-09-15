window.onload = function(){

let color = "black";
let blackSelect = document.getElementById("black");
let pinkSelect = document.getElementById("pink");
let greenSelect = document.getElementById("green");
let blueSelect = document.getElementById("blue");
let pixelSelect = document.getElementsByClassName("pixel");
let btSelect = document.getElementById("clear-board");

document.getElementById("black").addEventListener("click", function () {
  color = "black";
  console.log(color);
  blackSelect.className = "color selected black ";
  pinkSelect.className = "color  pink ";
  greenSelect.className = "color green ";
  blueSelect.className = "color blue";
});

document.getElementById("pink").addEventListener("click", function () {
  color = "pink";
  blackSelect.className = "color black ";
  pinkSelect.className = "color selected pink ";
  greenSelect.className = "color green ";
  blueSelect.className = "color blue";
  console.log(color);
});

document.getElementById("green").addEventListener("click", function () {
  color = "green";
  blackSelect.className = "color black ";
  pinkSelect.className = "color  pink ";
  greenSelect.className = "color selected green ";
  blueSelect.className = "color blue";
  console.log(color);
});

document.getElementById("blue").addEventListener("click", function () {
  color = "blue";
  blackSelect.className = "color black ";
  pinkSelect.className = "color pink ";
  greenSelect.className = "color green ";
  blueSelect.className = "color selected blue";
  console.log(blueSelect);
});

//linha 1

document.getElementById("square1").addEventListener("click", function () {
  document.getElementById("square1").style.backgroundColor = color;
});
document.getElementById("square2").addEventListener("click", function () {
  document.getElementById("square2").style.backgroundColor = color;
});
document.getElementById("square3").addEventListener("click", function () {
  document.getElementById("square3").style.backgroundColor = color;
});
document.getElementById("square4").addEventListener("click", function () {
  document.getElementById("square4").style.backgroundColor = color;
});
document.getElementById("square5").addEventListener("click", function () {
  document.getElementById("square5").style.backgroundColor = color;
});

//linha 2

document.getElementById("square6").addEventListener("click", function () {
  document.getElementById("square6").style.backgroundColor = color;
});
document.getElementById("square7").addEventListener("click", function () {
  document.getElementById("square7").style.backgroundColor = color;
});
document.getElementById("square8").addEventListener("click", function () {
  document.getElementById("square8").style.backgroundColor = color;
});
document.getElementById("square9").addEventListener("click", function () {
  document.getElementById("square9").style.backgroundColor = color;
});
document.getElementById("square10").addEventListener("click", function () {
  document.getElementById("square10").style.backgroundColor = color;
});

//linha 3

document.getElementById("square11").addEventListener("click", function () {
    document.getElementById("square11").style.backgroundColor = color;
  });
  document.getElementById("square12").addEventListener("click", function () {
    document.getElementById("square12").style.backgroundColor = color;
  });
  document.getElementById("square13").addEventListener("click", function () {
    document.getElementById("square13").style.backgroundColor = color;
  });
  document.getElementById("square14").addEventListener("click", function () {
    document.getElementById("square14").style.backgroundColor = color;
  });
  document.getElementById("square15").addEventListener("click", function () {
    document.getElementById("square15").style.backgroundColor = color;
  });

  //linha 4

  document.getElementById("square16").addEventListener("click", function () {
    document.getElementById("square16").style.backgroundColor = color;
  });
  document.getElementById("square17").addEventListener("click", function () {
    document.getElementById("square17").style.backgroundColor = color;
  });
  document.getElementById("square18").addEventListener("click", function () {
    document.getElementById("square18").style.backgroundColor = color;
  });
  document.getElementById("square19").addEventListener("click", function () {
    document.getElementById("square19").style.backgroundColor = color;
  });
  document.getElementById("square20").addEventListener("click", function () {
  document.getElementById("square20").style.backgroundColor = color;
  });

//linha 5

document.getElementById("square21").addEventListener("click", function () {
document.getElementById("square21").style.backgroundColor = color;
  });
document.getElementById("square22").addEventListener("click", function () {
document.getElementById("square22").style.backgroundColor = color;
  });
document.getElementById("square23").addEventListener("click", function () {
document.getElementById("square23").style.backgroundColor = color;
  });
document.getElementById("square24").addEventListener("click", function () {
document.getElementById("square24").style.backgroundColor = color;
  });
document.getElementById("square25").addEventListener("click", function () {
document.getElementById("square25").style.backgroundColor = color;
  });

//bt clear all

btSelect.addEventListener('click',function(){
    for (let index = 0 ; index < pixelSelect.length;index += 1){
        pixelSelect[index].style.backgroundColor = "white"
    }
    
})
}
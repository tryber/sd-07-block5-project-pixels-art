// window.onload = function() 
// {
  let numberOfLines = 5;
  var lines = document.querySelectorAll(".line");
  let className="pixel";
  let color = document.getElementById("");
  var counterId=1;
  var colorBox="white";
  var selectedColor="box1";
  var idLimpa="";
  let counterLimpa=1;

  fillSquare(lines);

  function fillSquare(lines)
  {
    for (let index = 0; index < lines.length; index++)
    {
      fillLine(lines[index]);
    }
  }

  function createBox(id)
  {
    let box = document.createElement("div");
    box.className = className;
    box.id=id;
    box.backgroundColor="white";
    return(box);
  }

  function fillLine(divLine)
  {
    for (let lineColumn = 0; lineColumn < numberOfLines; lineColumn += 1)
    {
      divLine.appendChild(createBox(counterId));
      counterId++;
    }
  }

  document.getElementById("box1").style.backgroundColor = "black";
  document.getElementById("box2").style.backgroundColor = "red";
  document.getElementById("box3").style.backgroundColor = "yellow";
  document.getElementById("box4").style.backgroundColor = "orange";
  storeVariableBox1();

  function storeVariableBox1(){
    document.getElementById(selectedColor).classList.remove("selected");
    selectedColor="box1";
    document.getElementById(selectedColor).classList.add("selected");
    colorBox = document.getElementById("box1").style.backgroundColor;
  }
  function storeVariableBox2(){
    document.getElementById(selectedColor).classList.remove("selected");
    selectedColor="box2";
    document.getElementById(selectedColor).classList.add("selected");
    colorBox = document.getElementById(selectedColor).style.backgroundColor;
  }
  function storeVariableBox3(){
    document.getElementById(selectedColor).classList.remove("selected");
    selectedColor="box3";
    document.getElementById(selectedColor).classList.add("selected");
    colorBox = document.getElementById("box3").style.backgroundColor;
  }
  function storeVariableBox4(){
    document.getElementById(selectedColor).classList.remove("selected");
    selectedColor="box4";
    document.getElementById(selectedColor).classList.add("selected");
    colorBox = document.getElementById("box4").style.backgroundColor;
  }

  document.getElementById('clear-board').addEventListener("click",function(){
    
    for (counterLimpa=1; counterLimpa<=25; counterLimpa++)
    {
        idLimpa = counterLimpa.toString();
        document.getElementById(idLimpa).style.backgroundColor="white";
    }
});


// }


// fillSquare(lines);

// function fillSquare(lines) {
//     for(let index = 0; index < lines; index += 1) {
//       fillLine(lines[index]);
//     }
//   }

// function createBox(className) {
//     let box = document.createElement("div");
//     box.className = className;
//     return box;
// }

// function fillLine(divLine) {
//     for (let lineColumn = 1; lineColumn <= 5; lineColumn += 1) {
//       let box = createBox("box");
//       divLine.appendChild(box);
//       divLine.appendChild(createBox("box-empty"));
//     }
//   }
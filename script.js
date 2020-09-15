window.onload = function() {
  //const pixelBoard = document.getElementById("pixel-board"); 
  const qtMatrix = 5;
  const widthPixels = 42;
  createBoard(qtMatrix); 

  const btBlack = document.getElementById("black");
  const btRed = document.getElementById("red");
  const btBlue = document.getElementById("blue");
  const btGreen = document.getElementById("green");
  const btClear = document.getElementById("clear-board");
 
  /*colorindo*/
    let colorPalette = document.querySelectorAll('.color')
    let colors = ['black', 'red', 'green', 'blue']

  for (let index = 0; index < colors.length; index += 1) {
    colorPalette[index].style.backgroundColor = colors[index]
  } 
  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/ 
  function createBoard(qtMatrix) {
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.innerHTML = '';
    const matrixSize = qtMatrix ;
    for (let column = 0; column < matrixSize; column += 1) {
      // Creating row for the pixels
      const pixelsRow = document.createElement('div');
      pixelsRow.className = 'pixels-row';
      for (let row = 0; row < matrixSize; row += 1) {
        // Creating the pixel
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
  
        // Event for fill pixel with selected color
          pixel.addEventListener('click', function (event) {         
          const selected = document.querySelector('.selected');          
          event.target.style.backgroundColor = selected.style.backgroundColor;
         
        });
        pixelsRow.appendChild(pixel);
      }
      pixelBoard.appendChild(pixelsRow);
    }
  }

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/  

btBlack.addEventListener('click', function(){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    this.classList.add('selected');              
   
      
  });
/*--------------------------------------------------------------------------*/
  btRed.addEventListener('click', function(){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    this.classList.add('selected');              
  
    
        
  });
  /*-----------------------------------------------------------------------*/
  
  btBlue.addEventListener('click', function(e){
   let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    this.classList.add('selected');              
   
        
  });

  /*-----------------------------------------------------------------------*/
  
  btGreen.addEventListener('click', function(e){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    this.classList.add('selected');              
    
        
  });

  /*---------------------------------------------------------------------------*/
  
  btClear.addEventListener('click', function(){
   
    const pixels = document.querySelectorAll('.pixel');
   
    for (let filledPixel = 0; filledPixel < pixels.length; filledPixel += 1) {
        
       pixels[filledPixel].style.backgroundColor="white";
    }    
       
  });

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/  
}













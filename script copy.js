window.onload = function() {
  const pixelBoard = document.getElementById("pixel-board"); 
  const qtMatrix = 5;
  const widthPixels = 40;
  createLine(); 

  const btBlack = document.getElementById("black");
  const btRed = document.getElementById("red");
  const btBlue = document.getElementById("blue");
  const btGreen = document.getElementById("green");
  const btClear = document.getElementById("clear-board");
  const selectedClasse = document.getElementsByClassName("color black selected");
  selectedClasse.className="color black"; 
  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/  
  function createLine (){
    pixelBoard.style.width = qtMatrix*widthPixels+"px";    
       for(let pixels = 0; pixels < qtMatrix*5; pixels+=1){
            let pixel = document.createElement("button");
            pixel.className="pixel";
            pixel.addEventListener('click', changeBackground);
            pixelBoard.appendChild(pixel);
       }    
  }
 /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/  
  function changeBackground(){
     this.className=selectedClasse.className;
     console.log(this.className); 
  
  }  
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/  
  btBlack.addEventListener('click', function(){
    let parent = this.parentNode; // pega o elemento pai     
        for(let index = 0; index < parent.children.length; index +=1 ){
            parent.children[index].classList.remove('selected');           
        }
        selectedClasse.className = this.className;
        this.classList.add('selected');
        return selectedClasse; // retorna a classe com a cor selecionada
  });
/*---------------------------------------------------------------------------*/
  btRed.addEventListener('click', function(){
    let parent = this.parentNode; // pega o elemento pai     
    for(let index = 0; index < parent.children.length; index +=1 ){
      parent.children[index].classList.remove('selected');  // remove a classe 'selected' de todos os elementos         
    }
    selectedClasse.className = this.className;// muda a classe do pixels clicado para a mesma classe da seleção de cor
    this.classList.add('selected');// adiciona a classe selected ao seletor de cor
    return selectedClasse; // retorna a classe com a cor selecionada  
        
  });
  /*---------------------------------------------------------------------------*/
  
  btBlue.addEventListener('click', function(){
    let parent = this.parentNode; // pega o elemento pai     
    for(let index = 0; index < parent.children.length; index +=1 ){
      parent.children[index].classList.remove('selected');  // remove a classe 'selected' de todos os elementos         
    }
    selectedClasse.className = this.className;// muda a classe do pixels clicado para a mesma classe da seleção de cor
    this.classList.add('selected');// adiciona a classe selected ao seletor de cor
    return selectedClasse; // retorna a classe com a cor selecionada  
        
  });

  /*---------------------------------------------------------------------------*/
  
  btGreen.addEventListener('click', function(){
    let parent = this.parentNode; // pega o elemento pai     
    for(let index = 0; index < parent.children.length; index +=1 ){
      parent.children[index].classList.remove('selected');  // remove a classe 'selected' de todos os elementos         
    }
    selectedClasse.className = this.className;// muda a classe do pixels clicado para a mesma classe da seleção de cor
    this.classList.add('selected');// adiciona a classe selected ao seletor de cor
    return selectedClasse; // retorna a classe com a cor selecionada  
        
  });

  /*---------------------------------------------------------------------------*/
  
  btClear.addEventListener('click', function(){
    
    let parent = pixelBoard; // pega o elemento pai         
    for(let index = 0; index < parent.children.length; index +=1 ){
      parent.children[index].classList.remove();  // remove as classes de todos os elementos         
      parent.children[index].classList.add('white');
    }    
        
  });

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/  
}













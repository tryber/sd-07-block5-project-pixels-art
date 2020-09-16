window.onload= function(){
    let tamanhoLinha=5;
    let pixelBoard = document.querySelectorAll('pixel-board');

     
  const pixel = [];
  const linha =[];


 let k =0 ;

  for (let i = 0; i < tamanhoLinha; i+= 1) {
    linha[i] = document.createElement('div');
    linha[i].className ='linha';
    pixelBoard.appendChild(linha[i]);
    
  for (let j = 0; j < tamanhoLinha; j +=1) {
    pixel[j] = document.createElement('div');
    pixel[j].className ='pixel';
    linha[i].appendChild(pixel[j])
    k = k+1;
    }
   
  }



  function selecionarPaleta(event) {
    let mudaBorda = '';
    switch (event.target.id) {
      case 'black':
        mudaBorda = 'color selected';
        break;
      case 'red':
        mudaBorda = 'color selected';
        break;
      case 'green':
        mudaBorda = 'meme-image-container earth-border';
        break;
      default:
        mudaBorda = 'meme-image-container default-border';
    }

    document.getElementById('meme-image-container').className = mudaBorda;
  }

 const buttonElementos = document.getElementsByTagName('button');
  for (let index = 0; index < buttonElementos.length; index+=1) {
    buttonElementos[index].addEventListener('click',editarBorda);
  }


function colorir(){

    console.log('coloriu')
   // document.getElementById();

}

}

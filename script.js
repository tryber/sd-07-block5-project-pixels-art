window.onload = function(){
    let paleta=document.getElementsByClassName('color');
    let corUm=document.getElementById('cor-1');
    let corDois=document.getElementById('cor-2');
    let corTres=document.getElementById('cor-3');
    let corQuatro=document.getElementById('cor-4');
    let corSelecionada='rgb(0,0,0)';
    let botãoLimpar=document.getElementById('clear-board');
    let botaoCriaPixels=document.getElementById('generate-board');
    let areaPixels=document.getElementById('pixel-board');
    let qtdPixels=5;
    let contaPixel=document.querySelectorAll('.pixel');

    function criaRGB(){        
        let corR=parseInt((Math.random())*256);
        let corG=parseInt((Math.random())*256);
        let corB=parseInt((Math.random())*256);
        return corRGB=`rgb(${corR},${corG},${corB})`;
    }
    
    function criaGrid(quantidade){
    if (contaPixel.length > 0){
        for (i=0; i<contaPixel.length; i+=1){
            contaPixel[i].remove();
        }
    }
        for (i=1; i<=qtdPixels; i+=1){
            let criaDivLinha=document.createElement('div');
                areaPixels.appendChild(criaDivLinha);
            for (j=1; j<=qtdPixels; j+=1){
                let criaDiv=document.createElement('div');
                criaDiv.className='pixel';
                // criaDiv.innerText=`${i}+${j}`;
                areaPixels.appendChild(criaDiv);
                }
        }
        document.querySelectorAll('.pixel').forEach(item => {
            item.addEventListener('click', event => {
            item.style.backgroundColor=corSelecionada;
            })
        })
    }

    criaGrid(qtdPixels);

    for (i=1; i<paleta.length; i+=1){
        paleta[0].style.backgroundColor='rgb(0,0,0)';
        paleta[i].style.backgroundColor=criaRGB();
    }

    corUm.addEventListener('click',function(){
        corUm.className='color selected';
        corDois.className='color';
        corTres.className='color';
        corQuatro.className='color';
        let propriedadeCSS=window.getComputedStyle(corUm,null).getPropertyValue("background-color");
        corSelecionada=propriedadeCSS;
    })

    corDois.addEventListener('click',function(){
        corUm.className='color';
        corDois.className='color selected';
        corTres.className='color';
        corQuatro.className='color';
        let propriedadeCSS=window.getComputedStyle(corDois,null).getPropertyValue("background-color");
        corSelecionada=propriedadeCSS;
    })

    corTres.addEventListener('click',function(){
        corUm.className='color';
        corDois.className='color';
        corTres.className='color selected';
        corQuatro.className='color';
        let propriedadeCSS=window.getComputedStyle(corTres,null).getPropertyValue("background-color");
        corSelecionada=propriedadeCSS;
    })

    corQuatro.addEventListener('click',function(){
        corUm.className='color';
        corDois.className='color';
        corTres.className='color';
        corQuatro.className='color  selected';
        let propriedadeCSS=window.getComputedStyle(corQuatro,null).getPropertyValue("background-color");
        corSelecionada=propriedadeCSS;
    })

    botãoLimpar.addEventListener('click', function(){
        let selectDiv=document.querySelectorAll('.pixel');
        for (i=0; i<selectDiv.length; i+=1){
            selectDiv[i].style.backgroundColor='rgb(255,255,255';
        }
    })

    botaoCriaPixels.addEventListener('click', function(){        
        let qtd=document.getElementById('board-size');
        contaPixel=document.querySelectorAll('.pixel');
        qtdPixels=qtd.value;
        if (qtdPixels>=1){
            if (qtdPixels<5){
                qtdPixels=5;
            }
            if (qtdPixels>50){
                qtdPixels=50;
            }
            criaGrid(qtdPixels);
        } else {
            alert('Board inválido!');
        }
    })
}

// 4 - A página deve possuir um quadro de pixels, com 25 pixels.
    
// As seguintes verificações serão feitas:

//     O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

//     O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;

//     A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

//     O quadro de "pixels" deve aparecer abaixo da paleta de cores.






// 6 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.
// As seguintes verificações serão feitas:
// O elemento da cor preta deve possuir, inicialmente, a classe selected;
// Note que o elemento que deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.



    
    let pixelboard = document.getElementById("pixel-board");
    let clear = document.getElementById("clear-board");
    let body = document.body;
    let aux="";
    let indice;
    let i;
    let k;
    let pixel;    
    let generate = document.getElementById("generate-board");
    let tamanho = document.getElementById("board-size");

    generate.addEventListener("click", function() {

        if (tamanho.value =="") {

            alert("Board inválido!");
        }

        else {
            if (tamanho.value <= 5 && tamanho.value>=0) {
                tamanho.value = 5;
            }

            if (tamanho.value >= 50) {
                tamanho.value = 50;
            }

            console.log(tamanho);

            pixelboard.innerHTML = "";

            for (i = 1; i <= tamanho.value; i += 1) {
            
                for (k = 1; k <= tamanho.value; k += 1) {

                    indice = i+""+k;
                    aux += "<div id='"+indice+"' class='pixel'></div>";
                                
                }

                pixelboard.innerHTML += "<div>"+aux+"</div>";
                aux = "";

            }

            pixelboard.innerHTML += "</div>";

            for (i = 1; i <= tamanho.value; i += 1) {
            
                for (k = 1; k <= tamanho.value; k += 1) {

                    indice = i+""+k;
                    pixel = document.getElementById(indice);
                    pixel.addEventListener('click', function (event) {

                        const selected = document.querySelector('.selected');
                        event.target.style.backgroundColor = selected.style.backgroundColor;

                    });
                }
            }

            clear.addEventListener("click", function() {

                for (i = 1; i <= tamanho.value; i += 1) {
            
                    for (k = 1; k <= tamanho.value; k += 1) {
            
                        indice = i+""+k;
                        pixel = document.getElementById(indice);
                        pixel.style.backgroundColor = "white";
                
                    }    
                }
            });
        }
    });

    body.style.backgroundColor = "rgb("+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+")";



        for (i = 1; i <= 5; i += 1) {
        
            for (k = 1; k <= 5; k += 1) {

                indice = i+""+k;
                aux += "<div id='"+indice+"' class='pixel'></div>";
                            
            }

            pixelboard.innerHTML += "<div>"+aux+"</div>";
            aux = "";

        }

        pixelboard.innerHTML += "</div>";

        for (i = 1; i <= 5; i += 1) {
        
            for (k = 1; k <= 5; k += 1) {

                indice = i+""+k;
                pixel = document.getElementById(indice);
                pixel.addEventListener('click', function (event) {

                    const selected = document.querySelector('.selected');
                    event.target.style.backgroundColor = selected.style.backgroundColor;

                });
            }
        }

        clear.addEventListener("click", function() {

            for (i = 1; i <= 5; i += 1) {
        
                for (k = 1; k <= 5; k += 1) {
        
                    indice = i+""+k;
                    pixel = document.getElementById(indice);
                    pixel.style.backgroundColor = "white";
            
                }    
            }
        });


    let paletas = document.getElementById("color-palette");
    let paleta=[];
    paleta[0] = paletas.firstElementChild;
    paleta[1] = paletas.firstElementChild.nextElementSibling;
    paleta[2] = paletas.firstElementChild.nextElementSibling.nextElementSibling;
    paleta[3] = paletas.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
    paleta[0].className = "color selected";

    paleta[1].style.backgroundColor = "rgb("+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+")";
    paleta[2].style.backgroundColor = "rgb("+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+")";
    paleta[3].style.backgroundColor = "rgb("+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+")";

    paleta[0].addEventListener("click", function() {

        paleta[0].className = "color selected";
        paleta[1].className = "color";
        paleta[2].className = "color";
        paleta[3].className = "color";        
    });

    paleta[1].addEventListener("click", function() {

        paleta[1].className = "color selected";
        paleta[0].className = "color";
        paleta[2].className = "color";
        paleta[3].className = "color";
    });

    paleta[2].addEventListener("click", function() {

        paleta[2].className = "color selected";
        paleta[1].className = "color";
        paleta[0].className = "color";
        paleta[3].className = "color";
    });

    paleta[3].addEventListener("click", function() {

        paleta[3].className = "color selected";
        paleta[1].className = "color";
        paleta[2].className = "color";
        paleta[0].className = "color";
    });


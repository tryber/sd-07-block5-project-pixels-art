let colorPalette = document.getElementById("color-palette"),
    pixelBoard = document.getElementById("pixel-board"),
    buttonClear = document.getElementById('clear-board'),
    colors = ['black', 'blue', 'pink', 'green'],
    colorSelected,
    lastElementSelected;

function creatColorsPalette() {

    for( let i = 0 ; i < 4 ; i++ ) {
        let color = document.createElement('div');
        color.id = `paletteColor${i+1}`;
        color.className = "color";
        color.style.backgroundColor = colors[i];
        colorPalette.appendChild(color);
    };
};

function createPixelBoard() {

    let cont = 0;

    for( let i = 0 ; i < 5 ; i++ ) {

        let linePixel = document.createElement('div');

        linePixel.style.height = '40px' ;
        pixelBoard.appendChild(linePixel);
            
        for( let j = 0 ; j < 5 ; j++ ) {

        let pixelElement = document.createElement('div');
            cont++;
            pixelElement.className = "pixel";
            pixelElement.id = `pixel${cont}`;
            linePixel.appendChild(pixelElement);
        };
    };

};

function changeClass(element){

    let thisElement = element;

    if(lastElementSelected === undefined ) {

        lastElementSelected = thisElement;
        thisElement.className = 'color selected';

    }
    else {

        document.querySelector(`#${lastElementSelected.id}`).className = 'color';
        lastElementSelected = thisElement ;
        thisElement.className = 'color selected';

    };

};

function selectColor(element) {

    let color = element,
        n = color.id.replace("paletteColor","");
    colorSelected = colors[n-1];

    changeClass(color);

};

function selectPixel(element) {

    let pixel = element;
    pixel.style.backgroundColor = colorSelected;

};

function selectClear() {
    
    let pixel = document.querySelectorAll('.pixel');

    for( let i = 0 ; i < pixel.length ; i++) {

        pixel[i].style.backgroundColor = "white";

    };

};

function  whichElement(id) {

    let el = document.querySelector(`#${id}`);

    if( id.indexOf('pixel') !== -1 ){
        
        selectPixel(el);

    }
    else if( id.indexOf('paletteColor') !== -1 ){

        selectColor(el);

    }
    else {

        selectClear();

    };

};

function creatEvents() {

    let pixels = pixelBoard.querySelectorAll('.pixel'),
        col = document.querySelectorAll(".color"), 
        getClick = e => {
        whichElement(e.target.id);        
        };

    for( let i = 0 ; i < pixels.length ; i++) {

        let pixel = pixels[i],
            color = col[i];

        pixel.addEventListener('click',getClick);

        if ( i < col.length ) { 

            color.addEventListener('click',getClick);

        };
    };

    buttonClear.addEventListener('click',getClick);
    document.addEventListener('load' ,
    selectColor(colorPalette.querySelector('#paletteColor1')));
};

window.addEventListener('DOMContentLoaded', () => { 

    creatColorsPalette();
    createPixelBoard();
    creatEvents();

});

/*

Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.	
*/

/*
A cor preta deve ser a primeira na paleta de cores.	
A página deve possuir uma paleta de quatro cores distintas.	
*/
let divtotal=document.getElementById("pixel-board");
let nLinha = 5;
let pixel =[];
let linha = [];
let k=0;
/* criação da div em linhas*/
for(let i=0; i < nLinha; i += 1){

    linha[i]= document.createElement("div");
    linha[i].className = "linha";
    divtotal.appendChild(linha[i]);
    console.log(linha[i]);

        for(let j=0; j < nLinha; j += 1){

            pixel[k]= document.createElement("div");
            pixel[k].className="pixel";
            linha[i].appendChild(pixel[k]);
            k=k+1;
        }
}
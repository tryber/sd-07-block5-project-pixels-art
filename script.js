const bot = document.getElementById('clear-board');
const cpreto = document.getElementById('cpreto');
const cvermelho = document.getElementById('cvermelho');
const cazul = document.getElementById('cazul');
const camarelo = document.getElementById('camarelo');
let coratual = 'black';
const pixels = document.getElementsByClassName('pixel');
function deletar() {
  bot.addEventListener('click', function () {
    for (let i = 0; i <= pixels.length; i += 1) {
      pixels[i].style.background = 'white';
    }
  });
}

function escolherCor() {
  cpreto.addEventListener('click', function () {
    cpreto.className = 'color selected preto';
    cvermelho.className = 'color vermelho';
    cazul.className = 'color azul';
    camarelo.className = 'color amarelo';
    coratual = 'black';
  });
  cvermelho.addEventListener('click', function () {
    cpreto.className = 'color preto';
    cvermelho.className = 'color selected vermelho';
    cazul.className = 'color azul';
    camarelo.className = 'color amarelo';
    coratual = 'red';

  });
  cazul.addEventListener('click', function () {
    cpreto.className = 'color preto';
    cvermelho.className = 'color vermelho';
    cazul.className = 'color selected azul';
    camarelo.className = 'color amarelo';
    coratual = 'blue';
  });
  camarelo.addEventListener('click', function () {
    cpreto.className = 'color preto';
    cvermelho.className = 'color vermelho';
    cazul.className = 'color azul';
    camarelo.className = 'color selected amarelo';
    coratual = 'yellow';
  });
}

function linha1() {
  document.getElementById('p1').addEventListener('click', function () {
    document.getElementById('p1').style.background = coratual;
  });
  document.getElementById('p2').addEventListener('click', function () {
    document.getElementById('p2').style.background = coratual;
  });
  document.getElementById('p3').addEventListener('click', function () {
    document.getElementById('p3').style.background = coratual;
  });
  document.getElementById('p4').addEventListener('click', function () {
    document.getElementById('p4').style.background = coratual;
  });
  document.getElementById('p5').addEventListener('click', function () {
    document.getElementById('p5').style.background = coratual;
  });
}

function linha2() {
  document.getElementById('p6').addEventListener('click', function () {
    document.getElementById('p6').style.background = coratual;
  });
  document.getElementById('p7').addEventListener('click', function () {
    document.getElementById('p7').style.background = coratual;
  });
  document.getElementById('p8').addEventListener('click', function () {
    document.getElementById('p8').style.background = coratual;
  });
  document.getElementById('p9').addEventListener('click', function () {
    document.getElementById('p9').style.background = coratual;
  });
  document.getElementById('p10').addEventListener('click', function () {
    document.getElementById('p10').style.background = coratual;
  });
}

function linha3() {
  document.getElementById('p11').addEventListener('click', function () {
    document.getElementById('p11').style.background = coratual;
  });
  document.getElementById('p12').addEventListener('click', function () {
    document.getElementById('p12').style.background = coratual;
  });
  document.getElementById('p13').addEventListener('click', function () {
    document.getElementById('p13').style.background = coratual;
  });
  document.getElementById('p14').addEventListener('click', function () {
    document.getElementById('p14').style.background = coratual;
  });
  document.getElementById('p15').addEventListener('click', function () {
    document.getElementById('p15').style.background = coratual;
  });
}

function linha4() {
  document.getElementById('p16').addEventListener('click', function () {
    document.getElementById('p16').style.background = coratual;
  });
  document.getElementById('p17').addEventListener('click', function () {
    document.getElementById('p17').style.background = coratual;
  });
  document.getElementById('p18').addEventListener('click', function () {
    document.getElementById('p18').style.background = coratual;
  });
  document.getElementById('p19').addEventListener('click', function () {
    document.getElementById('p19').style.background = coratual;
  });
  document.getElementById('p20').addEventListener('click', function () {
    document.getElementById('p20').style.background = coratual;
  });
}

function linha5() {
  document.getElementById('p21').addEventListener('click', function () {
    document.getElementById('p21').style.background = coratual;
  });
  document.getElementById('p22').addEventListener('click', function () {
    document.getElementById('p22').style.background = coratual;
  });
  document.getElementById('p23').addEventListener('click', function () {
    document.getElementById('p23').style.background = coratual;
  });
  document.getElementById('p24').addEventListener('click', function () {
    document.getElementById('p24').style.background = coratual;
  });
  document.getElementById('p25').addEventListener('click', function () {
    document.getElementById('p25').style.background = coratual;
  });
}

function pintar() {
  linha1();
  linha2();
  linha3();
  linha4();
  linha5();
}

window.onload = function () {
  escolherCor();
  pintar();
  deletar();
};

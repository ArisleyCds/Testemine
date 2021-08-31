var canvas = document.querySelector('#Fornalha');
var imagem = canvas.getContext('2d');
var select = document.getElementById('carvão')

var fornalha = new Image();
fornalha.src = "furnacea.png";

var carvãof = new Image();
carvãof.src = "carvão.png";

var varaf = new Image();
varaf.src = "vara.png";

var madeiraf = new Image();
madeiraf.src = "madeira.png";

var blcarvãof = new Image();
blcarvãof.src = "blcarvão.png";

var lavaf = new Image();
lavaf.src = "lava.png";

var gravetof = new Image();
gravetof.src = "pal.png";

var cb = new Array(
  "none",
  carvãof,
  varaf,
  madeiraf, 
  blcarvãof, 
  lavaf,
  gravetof
  );
var slo = cb[select.value];

function fornalhaf() {
  slo = cb[select.value];
  imagem.clearRect(0, 0, 176, 160);
  cex.clearRect(0, 0, 176, 160)
  imagem.drawImage(fornalha, 0, 0);
  if(slo != "none") {
    imagem.drawImage(slo, 55, 48);
    cex.drawImage(slo, 0, 20);
  }
}
setInterval(fornalhaf, 100);

var qitens = document.getElementById('Itens');
var queima = new Array(
  0,
  8,
  12,
  1,
  80,
  100,
  0.5
)
function alertar() {
  var selecdecimal = document.getElementById('2carvão');
  var decimalvalores = new Array(2, 1);
  var decimvl = decimalvalores[selecdecimal.value]
  var cbd = new Array(gravetof, madeiraf);
  var cbde = cbd[selecdecimal.value];
  var queimando = queima[select.value];
  if(qitens.value < 8 && select.value == 0 && qitens.value != 0) {
    select.value = 3;
  }
  if(qitens.value < 1 && select.value == 0 && qitens.value != 0) {
    select.value = 6;
  }
    var calculoinicial = qitens.value/queimando;
    var calculofinal = calculoinicial.toFixed(0);
    var queimadura = calculofinal*queimando;
    var calculodecimal = qitens.value - queimadura;
    if(calculodecimal < 0) {
      calculodecimal = calculodecimal + queimando;
      calculofinal = calculofinal - 1;
    }
    if(!isNaN(calculodecimal)){
    if(calculodecimal != 0) {
      calculodecimal = calculodecimal*decimvl;
      imagem.drawImage(cbde, 75, 48);
      imagem.fillStyle = "Black";
      imagem.fillText(calculodecimal, 80, 75);
      cex.drawImage(cbde, 0, 50);
      cex.fillStyle = "Black";
      cex.fillText(calculodecimal, 20, 70);
    }
    if(qitens.value != 0 && select.value != 0) {
      if(qitens.value >= queimando) {
        imagem.fillStyle = "Black";
        imagem.fillText(calculofinal, 60, 75);
        cex.fillStyle = "Black";
        cex.fillText(calculofinal, 20, 40);
      }
    }
    }
}
setInterval(alertar, 100)
var canvase = document.querySelector('#esquerda');
var cex = canvase.getContext('2d');
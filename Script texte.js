//Váriavel para as Funções//
  var d1 = document.getElementById('one');

//Funções//
  function w(frase) {
    d1.insertAdjacentHTML('beforebegin', frase);
  }

  function p(frase) {
    w("<br>");
  }

  function wp(frase) {
    d1.insertAdjacentHTML('beforebegin', frase);
    p()
    p()  
  }

  function pg(frase) {
    return prompt(frase);
  }

  function verificar_Combustivel() { 
        var achou = false;
    for(var posicao = 0; posicao < combustiveis.length; posicao++) {
      if(combustivel == combustiveis[posicao])  {
        alert("Você acertou!");
        achou = true;
        break;
      }
    }
    if(achou == false)  {
      alert("Tente novamente");
      document.location.reload(true);
    } 
    return achou
  }

  function teste() {
    wp(carvão);
    wp(vara_de_Blase);
    wp(madeira);
    wp(palito);
    wp(bloco_de_carvão);    
  }

//Váriaveis de preços//
  function valores() {
    carvão = 8
    vara_de_Blase = 12
    madeira = 1
    palito = 0.5
    bloco_de_carvão = 9
    itens = 0
  }
  var carvão = 'carvão'
  var vara_de_Blase = 'vara_de_Blase'
  var madeira = 'madeira'
  var palito = 'palito'
  var bloco_de_carvão = 'bloco_de_carvão'
  var itens = 0
  let combustiveis = [carvão, vara_de_Blase, madeira, palito, bloco_de_carvão];
  console.log(combustiveis)
//Interação com o usuario//
  itens = prompt('Quantos itens');
  itens
  combustivel = prompt('Qual combustivel');
  verificar_Combustivel()
  valores()
  w("AAAAAAAAAAAAAAAAAAAAAAAA");


//Queima
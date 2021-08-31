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

  
//Trazer os valores para o script//

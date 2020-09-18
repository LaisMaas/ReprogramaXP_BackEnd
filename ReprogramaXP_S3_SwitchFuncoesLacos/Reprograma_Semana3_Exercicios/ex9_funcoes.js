const readline = require('readline-sync')

//Exemplo 3 
function resultado3Mais3() {
    console.log(3 + 3)
}

console.log(resultado3Mais3() * 30) /*Neste caso o programa não conseguirá reaproveitar a função, pois é necessário o return, 
visto que, estamos tentado pegar o resultado da função e reaproveitar multiplicando por 30.*/
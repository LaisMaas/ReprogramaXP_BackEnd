const readline = require('readline-sync')

//Declaração de função com parâmetros -> Ressaltan do que neste momento estamos apenas, determinando a estrutura e regras/argumentos da função.
function dizerOlaParaUsuario(nomeUsuario){ // -> o parâmetro é um dado que será recebido do meio externo
    console.log(`Olá, ${nomeUsuario}!`)
}

dizerOlaParaUsuario('Pietro') /*Chamando a função para apresentar os dados de saída. Neste momento estamos chmando a 
função para realizar a ação e resultado delineado. */
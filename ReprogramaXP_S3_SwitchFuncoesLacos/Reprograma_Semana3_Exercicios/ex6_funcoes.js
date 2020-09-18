const readline = require('readline-sync')

//Declaração da função 

function dizerOlaParaUsuario(nomeUsuario, profissaoUsuario){ //dizerOlaParaUsuario('Sheila')
console.log(`Olá ${nomeUsuario} - ${profissaoUsuario}`) //Olá Fulano
}

const readLine = require('readLine-sync') // Usando o readline-sync

const nome = readLine.question('Digite seu nome: ')
const profissao = readLine.question('Digite sua profissão: ')

dizerOlaParaUsuario(nome, profissao) //a ordem dos parametros importam, por isso, fique atento(a).
/*dizerOlaParaUsuario(null, profissao)  // Caso venha mostrar somente um parâmetro dos definidos, 
porém neste caso é nbecessário fazer um tratamento para verificar se o parâmetro está sendo recebido*/
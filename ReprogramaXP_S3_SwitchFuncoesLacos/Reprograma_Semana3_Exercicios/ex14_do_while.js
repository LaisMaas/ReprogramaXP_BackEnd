const read = require('readline-sync')

//Declarando a variável global para uso dento do laço Do e fora do laço no While. 
let num

do{
    num = read.question("Digite um número: ")
}while(num < 10) 
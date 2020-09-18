/*Faça um programa que peça um valor entre zero e dez, monstrando uma mensagem caso o valor de entrada seja inválido. O programa deverá continuar solicitando a nota até que o usuário digite um valor válido.*/

const read = require('readline-sync')

let num = parseInt(read.question("Digite um valor: "))

//07:37 Aula

/*console.log(num > 0)
console.log(num < 10)
console.log(num > 0 || num < 10)*/

console.log("Número é menor que 0: ", + num < 0)
console.log("Número é maior que 10: ", + num > 10)
console.log("Número é menor que 0 ou maior que 10: ", + num < 0 || num > 10)

while(num < 0 || num > 10){
    num = parseInt(read.question("Digite um valor novamente: "))
}

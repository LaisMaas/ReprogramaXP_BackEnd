/*Crie um programa que imprima números inteiros de N a 1.
Exemplo: o usuário digita 10, deverá aparecer
10
9
8
...
2
1
*/

const read = require('readline-sync')
let num =parseInt(read.question("Digite um valor: "))

for(let contador = num; contador >= 1; contador--){
    console.log(contador)
}
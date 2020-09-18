/*Crie um programa que exiba somente números inteiros e pares de N a 1.
Exemplo: o usuário digita 20, deverá aparecer
20
18
16
...
4
2
*/

const read = require('readline-sync')

function resultado(numero){
    console.log(`{Números pares: ${numero}`)
}
let num =parseInt(read.question("Digite um valor: "))

for(let contador = num; contador >= 1; contador--){
    if(contador % 2 === 0){
        console.log(contador)
    }
    
}
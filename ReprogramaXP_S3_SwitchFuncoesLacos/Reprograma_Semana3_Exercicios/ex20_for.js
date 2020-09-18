/*Crie um programa que exiba somente números inteiros e ímpares de 1 a N.
Exemplo: o usuário digita 20, deverá aparecer
1
3
5
7
...
15
17
19
*/

const read = require('readline-sync')

function resultado(numero){
    console.log(`{Números ímpares: ${numero}`)
}
let num =parseInt(read.question("Digite um valor: "))

for(let contador = num; contador >= 1; contador++){
    if(contador % 2 !== 0){
        console.log(contador)
    }
    
}
//Crie um programa que exiba os números divisíveis por 3 e 5 de 1 a N.

const read = require('readline-sync')

function resultado(numero){
    console.log(`{Números divisíveis por 3 e 5: ${numero}`)
}
let num =parseInt(read.question("Digite um valor: "))


for(let contador = 1; contador <= num; contador++){
    if(contador % 3 === 0  && contador % 5 === 0){
        console.log(contador)
    }    
}
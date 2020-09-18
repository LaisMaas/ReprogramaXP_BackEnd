
const readline = require('readline-sync')

const dia = "Segunda"
const diaFormatada = dia.toLocaleLowerCase()

switch (dia) {
    case "Segunda":
        console.log("Você tem uma reunião às 10h")
        break;
    case "Terça":
        console.log("Você tem yoga às 8h");
        break;
    case "Sexta":
        console.log("Happy hour virtual às 18h!")
        break;
    default:
        console.log("Não achamos hora na agenda")
}


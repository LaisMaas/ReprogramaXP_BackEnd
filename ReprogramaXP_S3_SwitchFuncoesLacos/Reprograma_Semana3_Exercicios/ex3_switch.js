const readline = require('readline-sync')

//Revisar e fazer as correções

const anos = readline.question("Quantos anos de casado você tem? ",{encoding:'utf-8'})
console.log()

switch (anos) {
	case 25:
		console.log("Bodas de Prata!")
		break;
	case 50:
		console.log("Bodas de Ouro!")
		break;
	case 75:
		console.log("Bodas de Diamante!")
		break;
	default:
		console.log("Vc chega lá...");
}

const dia = "Segunda"
const MesesDoAno = readLine.question("Digite o mês do ano que deseja consultar: ")
const mesFeriado = MesesDoAno.toLowerCase()
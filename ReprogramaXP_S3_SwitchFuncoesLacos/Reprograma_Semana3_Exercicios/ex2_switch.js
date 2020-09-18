const readline = require('readline-sync')

const dia = "Segunda"
const MesesDoAno = readLine.question("Digite o mês do ano que deseja consultar: ")
const mesFeriado = MesesDoAno.toLowerCase()

switch (dia) {
    case "Janeiro":
        console.log("Feliz ano novo!")
        break;

    case "Fevereiro":
        console.log("Que tal aproveitar o feriado prolongado para uma viagem.");
        break;

    case "Março":
        console.log("Feliz dia internacional da mulher!")
        break;
        
    case "Abril":
        console.log("Cuidados com as pegadinhas em 01/04!")
        break;
        
    case "Maio":
        console.log("Muito bom trabalhador. Só falta a riqueza, hein!")
        break;
        
    case "Junho":
        console.log("Férias chegando!")
        break;
        
    case "Julho":
        console.log("Enfim férias!")
        break;
        
    case "Agosto":
        console.log("Dia da informática...E o estudo nunca acaba:-)!")
        break;
        
    case "Setembro":
        console.log("Povo independente, será?")
        break;
        
    case "Outubro":
        console.log("O importante é ser cirança!")
        break;
        
    case "Novembro":
        console.log("Proclamação da República! E aí Brail..")
        break; 
    
    case "Dezembro":
        console.log("Só alegria! Contagem regressiva para coisas novas!")
        break;
    default:               
    
}

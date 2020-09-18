
//Inserindo o input dentro das variáveis
var inputSalarioPorMes = document.querySelector("#ganho-mes");

var inputHorasPorDia = document.querySelector("#horas-dia");

var spanValorHora = document.querySelector("#resposta");


//Declaração da função para execução do resultado e exibição deste ao usuário
function calcularValorHora(){
    
    var qtdTotalDeHoras = inputHorasPorDia.value * 22;
    var valorDeHora = (inputSalarioPorMes.valueAsNumber / qtdTotalDeHoras).toFixed(2)

    spanValorHora.textContent ="R$" + valorDeHora;    
}
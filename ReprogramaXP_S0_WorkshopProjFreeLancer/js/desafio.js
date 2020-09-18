/*Desafio Reprograma: desenvolva um programa que efetue o cálculo do valor de um projeto e informe ao usuário o resultado do valor total do projeto.*/ 

// Atribuindo os input's dentro das variáveis
var inputHorasTotalProjeto = document.querySelector("#horas-projeto");

var inputValorHoraProjeto = document.querySelector("#valor-hora");

var spanValorTotal = document.querySelector("#resposta");


//Declarando a função para execução do programa/cálculo 

function calcular(){  
    
    //Valor do projeto por hora multiplicado pelo total de horas designados para o projeto
    var valorTotalProjeto = (inputValorHoraProjeto.value * inputHorasTotalProjeto.value).toFixed(2); 

    //Dados de saída com resultado a ser apresentado ao usuário
    spanValorTotal.textContent ="R$" + valorTotalProjeto;    
}
//Quarto desafio de lógica de programação
//Em teoria é um novo curso onde é ensinado a fazer o JS interagir com o HTML, mas é também uma continuação do curso anterior

//A primeira aula foi sobre como procurar elementos no código HTML (mais especificamente o título "h1" e alguns botões)
//e também como usar document.querySelector(), innerText e function
//confesso que tive um pouco de dificuldade nas primeiras tentativas e ainda tenho um pouco para lembrar desses códigos e como usa-los

//A primeira etapa do desafio era alterar o conteúdo do "h1" com document.querySelector()
let titulo = document.querySelector('h1');
titulo.innerText = 'Hora do Desafio';


//As etapas 2 3 4 e 5 eram adicionar funções aos botões
function consoleButton(){
    console.log('O botão foi clicado');//Etapa 2, ao clicar no botão console, mostrar um alerta de que o botão console foi clicado
};

function alertButton(){
    alert('Eu amo JS');//Etapa 3, ao clicar no botão alerta, mostrar uma mensagem com alert
};

function promptButton(){
    let cidade = prompt('Diga o nome de uma cidade do Brasil');
    alert('Estive em ' + cidade + ' e lembrei de você');//Etapa 4, ao clicar no botão prompt, perguntar uma cidade e mostrar um alerta com o nome da cidade mencionada pelo usuário
};

function somaButton(){
    let somaNum1 = parseInt(prompt('Escolha o primeiro número para somar'));
    let somaNum2 = parseInt(prompt('Escolha o segundo número para somar'));
    let soma = somaNum1 + somaNum2;

    alert(somaNum1 + ' + ' + somaNum2 + ' é igual a ' + soma);//Etapa 5, ao clicar no botão soma, pedir 2 números inteiros e mostrar o resultado da soma
 //Não procurei saber se era possivel pedir os dois números no mesmo prompt, mas fiz do jeito que eu sei até o momento.
};
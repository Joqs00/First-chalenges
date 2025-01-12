//Terceiro desafio de lógica de programação, nesta aula foi ensinado:
//Break, operador ternarioe Math.random()

//A primeira etapa dizia: 
//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
//E a segunda dizia:
//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem 
//"Olá, [seu nome]!" no console do navegador.
//Então acabei juntado as duas nesta parte e adiconei também oque a terceira etapa dizia:
//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome = "João";

console.log('Bem vindo, ' + nome + '!');//primeira e segunda etapa
alert('Bem vindo, ' + nome + '!');//terceira etapa

//A quarta etapa pedia um prompt para armazenar o nome de uma linguagem de progração dada pelo usuário
let linguaguemDeProgramacao = prompt('Qual linguaguem de programação que você mais gosta?');
console.log('Linguagem de programação escolhida: ' + linguaguemDeProgramacao);//esta parte não foi solicitada, mas achei interessante também mostrar a escolha


//A quinta e sexta etapa pedia para criar duas variáveis com os nomes a seguir e atribuir números de minha escolha
let valor1 = 1;
let valor2 = 2;

let resultado = valor1 + valor2;//Ainda na quinta etapa, era solicitado somar as duas variávies

console.log('A soma entre ' + [valor1] + ' e ' + [valor2] + ' é igual a ' + resultado);//E enfim mostra-las no console

//Na sétima etapa, era solicitado um prompt perguntando a idade do usuário
let idade = parseInt(prompt('Qual a sua idade?'));

//E então mostrar se o usuário é maior ou menor de idade
idade >= 18 ? alert('Você é maior de idade') : alert('Você é menor de idade');

//A oitava etapa pedia para criar uma variavel com o nome a seguir, onde era solicitado um número ao usuário
let numero = prompt('Escolha um número positivo, negativo ou 0');

//E então pedia para criar uma função para saber se o número dado é positivo, negativo ou zero
if(numero > 0){
    alert(numero + ' é positivo')//E também mostrar ao usuário
}
else if(numero < 0){
    alert(numero + ' é negativo')
}else{
    alert(numero + ' é zero')
};


//Etapa 9, pedia um loop while para imprimir os numeros de 1 a 10 no console
let contagem = 1;

while(contagem < 11){
    console.log(contagem)
    contagem++
};


//A etapa 10, pedia uma variável "nota" e atribuir um valor a ela
let nota = parseInt(Math.random() * 10 + 1)
//como o Math.random() gera um número entre 0 e 1, ele acaba gerando números com várias casas decimais
//foi mostrado que se tranformar o dado em número inteiro e multiplica-lo por 10, iria gerar um número de 0 a 9

console.log('Nota: ' + nota);//Esta parte não foi solicitada, mas fiz esta função para saber se estava funcionando
nota >= 7 ? console.log('Aprovado') : console.log('Reprovado');//E então imprimir "Aprovado" ou "Reprovado" caso a nota seja maior ou menor que 7

//As etapas 11,12 e 13 pediam um Math.random() para gerar um número aleatório entre 1 e 10 (1 e 100 na etapa 12, 1 e 1000 na etapa 13)
//Porém como eu já usei algo similar na etapa 10, não achei necessário, pois só precisaria mudar o "* 10" por * 100 e  * 1000.
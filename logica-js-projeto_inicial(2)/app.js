//Segundo desafio de logica de programação

//A primeira etapa pedia:
//"Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número."

//criei uma variável para armazenar a contagem
let contador = 0

//e então fiz uma simples função para primeiro adicionar 1 no contador e depois mostrar a contagem
while(contador < 10) {
    contador++
    alert('Contagem ' + contador)
}

//A segunda etapa pedia algo similar porem começando do 10 até o 0 mostrando todos os números

let contadorRegressivo = 10

//tive um problema com loop infinito porque usei o nome da variável errado
while(contadorRegressivo > 0) {
    alert('Contagem Regressiva (' + contadorRegressivo + ')')
    contadorRegressivo--
    if (contadorRegressivo == 0){
        alert ('Kabum!')
    }
}

//A terçeira etapa foi similar a segunda, porém o número inicial sendo decidido pelo usuário através do prompt
let contagem = prompt('Digite um número e o programa fará uma contagem regressiva até chegar a 0')

while (contagem > 0){
    alert('Contagem Regressiva (' + contagem + ')')
    contagem--
}

//A quarta etapa é similar a primeira, porém com a contagem parando no número definido pelo usuário
//Esta etapa tive que pensar um pouco mais, pois as etapas anteriores tinham um número definido para parar o loop
//Então tive que criar uma nova variável, talvez tenha um jeito melhor de fazer isso, mas foi a solução que achei
let inputNum = prompt('Digite um número e o programa fará uma contagem até este número')
let contagem2 = 0

while (contagem2 != inputNum){
    contagem2++
    alert('Contagem (' + contagem2 + ')')
}
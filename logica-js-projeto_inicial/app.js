// Pequeno desafio das primeiras aulas de logica de programação


//Primeira etapa foi descrito o seguinte:

// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo",
// mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

//primeiro defini uma variavel para pegar o input do usuário e armazena-lá
let diaDaSemana = prompt('Qual é o dia da semana?')

//depois criei a função de checar se o input coincide com oque foi solicitado pelo desafio
//e mostrar a resposta para o usuário
if (diaDaSemana == 'Sábado' || diaDaSemana == "Domingo") {
    alert('Bom fim de semana!')
} else{
    alert('Boa semana!')
}

//segunda parte do desafio:

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

//usei a mesma lógica para armazenar o input do usuário
let positivoOuNegativo = prompt('Digite um número positivo ou negativo')

//criei a função para checar se o número é positivo ou negativo e mostrei o alerta informando
if (positivoOuNegativo > 0 ){
    alert ('O número (' + positivoOuNegativo + ') é positivo')
} else{
    alert('O número (' + positivoOuNegativo + ') é negativo')
}


//terçeira parte do desafio: 

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns,
// você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

//primeiro pensei em um jogo onde o usuário teria de acertar um número ou próximo dele
//quanto mais próximo mais pontos ganhava

//primeiro criei as variáveis para definir o número alvo (ainda não sei como fazer este número ser aleatório)
//e a variavel de pontos
let alvo = 50
let pontos = 0

//depois criei a variavel de chute que vai armazenar o input do chute do usuário
//até este momento do curso não tinha aprendido sobre "parseInt"
//estava tendo problemas porque o input do usuário estava sendo registrado como string
//então usei o GPT para me ajudar e ele me sujeriu usar o "parseInt" que transfora a variavel em números
let chute = parseInt(prompt('Chute um número entre 1 a 100, quanto mais próximo mais pontos ganha'))

//então criei a função do jogo onde o programa compara o chute do usuário com o número alvo
if (chute == alvo) {
    alert('O número era ' + alvo + '. Seu chute foi ' + chute)
    pontos = 100
    alert('Você fez ' + pontos + ' pontos.')
}

//também não tinha conhecimento sobre os "else if" juntos, a primeira vez eu usei apenas "if"
//acabou dando problemas na pontuação
//também ao invés de definir a variavel "pontos" diretamente eu achava que era sempre necessário o uso do "let"
//porém isso sempre criava uma variável nova, o gpt me ajudou com isso também
else if (chute >= alvo - 5 || chute <= alvo + 5) {
    alert('O número era ' + alvo + '. Seu chute foi ' + chute)
    pontos = 50
    alert('Você fez ' + pontos + ' pontos.')
}

else if (chute >= alvo - 10 || chute <= alvo + 10) {
    alert('O número era ' + alvo + '. Seu chute foi ' + chute)
    pontos = 10
    alert('Você fez ' + pontos + ' pontos.')
} 

else{
    alert('O número era ' + alvo + '. Seu chute foi ' + chute)
    pontos = 0
    alert('Você fez ' + pontos + ' pontos.')
}

//existiam outras duas partes do desafio, mas por acidente acabei criando algo similar nas etapas anteriores
//as outras duas etapas eram criar um alerta informando uma string e a outra era usar o prompt para
//pegar o input do usuário e depois mostar um alerta com o input inserido.
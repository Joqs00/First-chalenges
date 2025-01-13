//Sexto desafio de lógica de programação
//Nesta aula foi ensinado algumas coisas para puxar informções do htmb e interagir através do javascript
//Exemplos: foi criado um botão em um jogo onde ele é desativado em uma função apos o jogador ganhan em um jogo
//E desativar após o jogo reiniciar
//Porém oque foi ensinado na aula de fato foi como um reforço para funções.
//Diferente da aula anterior, agora eu aprendi a usar corretamente o function e o return. Tive um pouco de ajuda da IA da Alura para conseguir intender.
//Ainda tive alguns erros mas foi por falta de atenção


//Primeira etapa do desafio:
//"Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro."

//Não tive problemas para criar esta função, porém tive um pequeno erro por desatenção
function calculoImc(altura, peso) {
    let imc = peso/(altura * altura);
    return imc;
}
let calculo = calculoImc(1.70,70);//Aqui acabei confundindo e trocando "calculoImc" po "calculoFatorial" que foi usado na etapa seguinte(não sei como isso aconteceu)
console.log(calculo);



//Segunda etapa do desafio:
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

//Para criar a função em si, não tive problema, meu problema foi que eu não sabia como calcular o fatorial de um número
//Então tive de usar ajuda do gpt para algumas coisa
function calculoFatorial(numero) {
    if (numero == 0){
        return 1;
    }
    if(numero < 0){
        return 'O número precisa ser positivo';//Até esta parte sem problemas, parece que a formula não funciona se o número for negativo, e se for 0 o resultado vai ser 1
    }

    let fator = numero;
    let fatorial = 1;

    while (fator > 1 ){
         fatorial = fatorial * fator;
        fator = fator - 1
    }
   return fatorial//Aqui é praticamente código do gpt, eu tinha pensado em algo similar após aprender a formula, porém eu acabei fazendo de forma errada sem ser um loop while(mas corrigi)
}
let calculo2 = calculoFatorial(5);
console.log(calculo2);



//Terceira etapa do desafio:
//"Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80."

//Esta foi mais simples que a anterior, sem problemas nesta etapa
function conversaoDolar(valor){
    return valor * 4.8;
}

let conversao = conversaoDolar(5.7);
console.log(conversao);


//Quarta etapa do desafio:
//"Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro."

//Também sem problemas, apenas tive que ver a fórmula através do gpt, pois também não sabia exatamente como calcular algumas coisas
function calculoAreaPerimetro(altura, largura){
    let perimetro = 2 * (altura + largura);
    let area = largura * altura;//Aqui eu tive um erro, acabei colocando largura * largura, mas acabei corrigindo

    return('Area: ' + area + ', Perimetro: ' + perimetro );
}

let AreaPerimetro = calculoAreaPerimetro(7, 8);
console.log(AreaPerimetro);


//Quinta etapa do desafio:
//"Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14."

//Praticamente a mesma coisa da etapa anterior, sem problemas, apenas tive que olhar a formula correta para o calculo
function calculoAreaPerimetroCircular(raio){
    let areaCircular = 3.14 * (raio * raio);
    let circunferencia = 2 * 3.14 * raio;

    return('Area da Sala circular: ' + areaCircular + ', Perimetro da sala circular: ' + circunferencia);
}

let calculoCirculo = calculoAreaPerimetroCircular(9)
console.log(calculoCirculo)

//Sexta etapa do desafio:
//"Crie uma função que mostre na tela a tabuada de um número dado como parâmetro."

//Aqui sem problemas também, apenas um pequeno erro
function tabuada(numero){
    let tabuadaDez = 1

    while(tabuadaDez <= 10){//Eu tinha atribuido o valor 0 para "tabuadaDez", oque causava o código imprimir do 0 até o 9, mas foi corrigido alterando 0 por 1 e usando <=10 ao invés de apenas < 10
        let calculoTabuada = numero * tabuadaDez
        console.log(tabuadaDez +  ' * ' + numero + ' = ' + calculoTabuada)
        tabuadaDez++
    }
}

let mostrarTabuada = tabuada(9)
console.log(mostrarTabuada)

//Como dito anteriormente foi mais um reforço para funções e retornos.
//Além de algumas interações com HTML.
//Tive bastante ajudas das IAs, principalmente o GPT que me ajudou com as formulas e a IA da alura que me ajudou a intender function e return.
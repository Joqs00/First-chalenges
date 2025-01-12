//Quinto desafio de logica de programação em JS
//Nesta aula foi ensinado um pouco mais sobre funções e sobre return
//Ainda estou tendo dificuldades com funções e não intendi muito bem como funciona o return
//Acabei cometendo alguns erros por conta disso

//A primeira etapa pedia: "Criar uma função que exibe "Olá, mundo!" no console."
function saudacao(){
    console.log('Olá, Mundo!')//Esta eu consegui sem problemas, porém tinha esquecido de chamar a função depois para mostrar no console (esqueci em todas as funções)
}

saudacao();

//A segunda etapa pedia: "Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console."
function saudacaoComNome(nome){
    console.log('Olá ' + nome + '!')//Novamente consegui sem problemas, mas também esqueci de chamar a fução posteriormente
}

saudacao('Jorge')


//A terceira etapa pedia: "Criar uma função que recebe um número como parâmetro e retorna o dobro desse número."
function dobrarNum(numero){//Aqui começou o desastre, como eu não sabia como usar o return, acabei fazendo do jeito que eu achei que fosse, terei de estudar melhor como funciona o return
    //let dobrar = numero * 2 [ERRO]
    //return dobrar [ERRO]
    return numero * 2//[CORREÇÃO]
}

let dobro = dobrarNum(7)
console.log(dobro)


//A quarta etapa pedia:"Criar uma função que recebe três números como parâmetros e retorna a média deles." 
function mediaFuncao(num1, num2, num3){//Novamente cometi o mesmo erro de não usar o return corretamente
    //let media = num1 + num2 + num3 / 3 [ERRO]
    //return media [ERRO]
    return (num1 + num2 + num3) / 3 //[CORREÇÃO]
}

let mediaVar = mediaFuncao(4, 7, 10)
console.log(mediaVar)



//A quinta etapa pedia: "Criar uma função que recebe dois números como parâmetros e retorna o maior deles."
function maiorDeDois(nume1, nume2){
    //let maior = nume1 [ERRO]
   // if(nume1 < nume2){ [ERRO]
   //     maior = nume2 [ERRO]
   // } [ERRO]
   // return maior [ERRO]
   return nume1 > nume2 ? nume1 : nume2 // [CORREÇÃO]
}

let maior = maiorDeDois(2, 5)
console.log(maior)


//A sexta etapa pedia: "Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo"
function multiplicacao(numeroMulti){
    //let multiplicacaoVar = numeroMulti * numeroMulti [ERRO]
    //return multiplicacaoVar [ERRO]
    return numeroMulti * numeroMulti; // [CORREÇÃO]
}

let resultadoMulti = multiplicacao(4)
console.log(resultadoMulti)

//Conclusão, até certo ponto minha lógica estava correta, porém com o uso errado do return, terei de intender melhor como funciona o return
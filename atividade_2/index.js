// ## Importe a biblioteca ##
let rs= require('readline-sync')
// ## Faça o código ##
let positive = "Ótimo, mas..."
let negative = "ei! Você precisa utilizar máscara para sair de casa, assim protegerá as pessoas que ama e a si mesmo!Não seja um babaca!"
let muitobem = "Maravilha, continue assim pra sairmos dessa merda de quarentena logo!"
let negativetwo ="Poxa bro, faz um esforço né"

let perguntaUsuario = rs.question('Você está utilizando máscara para sair? Digite 1 para sim e 2 para não :)');

if (perguntaUsuario == 1) {
    console.log(positive);
} else if (perguntaUsuario == 2) {
    console.log(negative);
}
let perguntanumerodois =rs.question('Você está lavando as mãos frequentemente? Digite 1 para sim e 2 para não :) ');

if (perguntanumerodois == 1) {
    console.log(muitobem)
} else if (perguntanumerodois == 2) {
    console.log(negativetwo)
}
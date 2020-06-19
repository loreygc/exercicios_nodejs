// ## Importe a biblioteca ##
let rs= require('readline-sync')
// ## Faça o código ##
let positive = "Ótimo, continue protegendo as pessoas que você ama!"
let negative = "Ei! Você precisa utilizar máscara para sair de casa, assim protegerá as pessoas que ama e a si mesmo!"

let perguntaUsuario = rs.question('Você está utilizando máscara para sair? Digite 1 para sim e 2 para não :)');



if (perguntaUsuario == 1) {
    console.log(positive);
} else if (perguntaUsuario == 2) {
    console.log(negative);
}
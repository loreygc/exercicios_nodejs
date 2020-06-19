// ## Importe a biblioteca ##
let rs= require ("readline-sync")
// ## Faça o código ##
let voo = rs.question('Qual o número do seu vôo?')
let fileira = rs.question('Em qual fileira você quer se sentar?')

console.log('********************')
console.log('Cartão de embarque para o numero de vôo: ' +voo)
console.log('Você se sentará na fileira '+fileira)
console.log('********************')
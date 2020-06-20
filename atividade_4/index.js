let rs = require('readline-sync')
let mesdenascimento = rs.question ("Digite o número de seu mês de nascimento: ");
let diadenascimento = rs.question ("Digite seu dia de nascimento: ");

if (mesdenascimento == 3 && diadenascimento > 21) {
    console.log("Seu signo é áries")} 
    else if (mesdenascimento == 4 && diadenascimento < 20){
        console.log("Seu signo é áries")}

    else if (mesdenascimento == 4 && diadenascimento > 21) {
        console.log("Seu signo é touro")}
    else if (mesdenascimento == 5 && diadenascimento < 20){
        console.log("Seu signo é touro")}

    else if (mesdenascimento == 5 && diadenascimento > 21 ){
        console.log("Seu signo é gemêos")}
    else if (mesdenascimento == 6 && diadenascimento <20){
        console.log("Seu signo é gêmeos")}

    else if (mesdenascimento == 6 && diadenascimento >21){
        console.log("Seu signo é cancêr")} 
    else if (mesdenascimento == 7 && diadenascimento < 22){
        console.log("Seu signo é cancêr")}
        
    else if (mesdenascimento == 7 && diadenascimento > 23){
        console.log("Seu signo é leão")}
    else if (mesdenascimento == 8) if (diadenascimento < 22){
        console.log("Seu signo é leão!")}

    else if (mesdenascimento == 8 && diadenascimento >23){
        console.log("Seu signo é virgem")} 
    else if (mesdenascimento == 9 && diadenascimento < 22){
        console.log("Seu signo é virgem!")}

    else if (mesdenascimento == 9 && diadenascimento > 23){
        console.log("Seu signo é libra")}
    else if (mesdenascimento == 10 && diadenascimento <22){
        console.log("Seu signo é libra!")}

    else if (mesdenascimento == 10 && diadenascimento >23){
        console.log("Seu signo é escorpião")}
    else if (mesdenascimento == 11 && diadenascimento <21){
        console.log("Seu signo é escorpião!")}

    else if (mesdenascimento == 11 && diadenascimento > 22){
        console.log("Seu signo é sagitário")}
    else if (mesdenascimento == 12 && diadenascimento < 21){
         console.log("Seu signo é sagitário!")}


    else if (mesdenascimento == 12 && diadenascimento > 22){
        console.log("Seu signo é capricórnio")}
    else if (mesdenascimento == 1 && diadenascimento < 20){
        console.log("Seu signo é capricórnio!")}


    else if (mesdenascimento == 1 && diadenascimento >21){
        console.log("Seu signo é aquário")} 
    else if (mesdenascimento == 2 && diadenascimento <18){
        console.log("Seu signo é aquário!")}

    else if (mesdenascimento == 2 && diadenascimento >19){
        console.log("Seu signo é peixes")} 
    else if (mesdenascimento == 3 && diadenascimento <20){
        console.log("Seu signo é peixes!")}
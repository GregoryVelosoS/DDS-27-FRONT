// DESVIOS CONDICIONAIS

// IF = SE
var estaVivo = true

// Primeira comparação 
if(estaVivo){
    console.log("Parabéns, que legal")
}
// segunda comparação. só vem pra cá se a primeira der errado
else if (estaVivo == undefined){
    console.log("Mano, sei como cê tá.")
}
// último caso, só entra aqui se todos acima derem errado
else{
    console.log("Morreu, mas passa bem")
}

// SWITCH/CASE
var camisa = "Vermelha"

switch(camisa){
    case "Preta":
        console.log("PARABÉNS, ACABA DE GANHAR UM NIVIL DA SABRINA CARPENTER");
    break
    case "Branca":
        console.log("Você ganhou, um body splash da Virgínia");
    break
    case "Vermelha":
        console.log("VOCÊ GANHOU UMA FERRARI, 3 PORTAS, COM TETO SOLAR E ESCADA")     
    break
    default:
        console.log("Puxa, não foi dessa vez que você conseguiu");
    break
}

/*
// PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR 
var preferido = prompt("QUAL É O SEU PET FAVORITO DO MUNDO DOS FILMES:")

console.log("Seu PET preferido é:", preferido)

*/
console.log("Coloque apenas valores acima de 1, e menor do que 1000");

var caixa1 = Number(prompt("Valor da caixa 1:"))
var caixa2 = Number(prompt("Valor da caixa 2:"))
var caixa3 = Number(prompt("Valor da caixa 3:"))

// 1 VIAGEM
// && = e, || = ou
if((caixa1 < caixa2 && caixa2 < caixa3) || (caixa1 + caixa2 < caixa3)) {
    console.log("1 viagem necessária");
}
else if((caixa1 < caixa2 && caixa2 == caixa3) || (caixa1 == caixa2 && caixa2 < caixa3)){
    console.log("2 viagens necessárias");
}
else{
    console.log("3 viagens necessárias");
}


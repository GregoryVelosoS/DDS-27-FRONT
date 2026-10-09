/*

console.log("AOBA")

// LAÇOS DE REPETIÇÃO 

// FOR = PARA / DURANTE
// i = variável de controle
// i < 10 = duração do laço 
// i++ = aumenta a interação de 1 em 1
for(var i = 0; i < 3 ; i++ ){
    console.log("Eu sou o milior 🤖");
}

console.log("ACA BOU !")

// WHILE = ENQUANTO
var contagem = 1
while(contagem < 51){
    console.log("Oi, meu chapa 🦨");
    contagem = contagem + 5
}

console.log("FIN ALI SOU !?")


// ARRAY 
var lista = ['Arroz', 6, true, "outro", 7.7, ["Sim", ["Não"]]]

// mostra o array
console.log(lista);

// mostra um elemento específico
console.log(lista[3]);

// length - retorna o número de itens no array
console.log(lista.length)

// LISTA DE TIMES
var times = ["São Paulo", "Gama", "Santos", "Real Madrid", "Desportiva"]

// INTERAGE COM VALOR FIXO
for(var i = 0; i < 5; i++){
    console.log("O time atual é:", times[i]);
}
// INTERAGE COM VALOR RETORNADO
for(var i = 0; i < times.length; i++){
    console.log("O time atual é:", times[i]);
}

*/
// FUNÇÕES PARA INTERAGIR COM UM ARRAY
var frutas = ["Tangerina", "Guaraná", "Morango","Maçã","Uva verde","Goiaba"]

// ARRAY ORIGINAL
console.log(frutas);

// PRA ADIÇÃO DE ELEMENTOS
// push - adiciona no fim do array
frutas.push("Uva")
console.log(frutas);

// unshift - adiciona no inicio do array
frutas.unshift("Maracujá")
console.log(frutas);

// PRA REMOÇÃO DE ELEMENTOS
// pop - remove o último elemento
var frutaRetirada = frutas.pop()
console.log("A última fruta era:", frutaRetirada)

frutas.unshift("Banana")

// shift - remover do inicio do array
var exPrimeiraFruta = frutas.shift()
console.log("A ex primeira fruta era:", exPrimeiraFruta);

//includes - descobrir se há um valor específico nesse array
console.log("Garçom, tem pitu?:", frutas.includes("Pitu"));
console.log("Garçom, tem maracujá?:", frutas.includes("Maracujá"));

//sort- ordenar o array 
frutas.sort()
console.log(frutas);

// reverse - inverter o array
frutas.reverse()
console.log(frutas);

// convertendo o array
// console.log(frutas.toString())

// junta o array, e troca o separador deles
// console.log(frutas.join(" - "));

// SLICE - copia 
// (em qual indice começa, quantos elementos serão copiados)
console.log(frutas.length)
var parteCopiada = frutas.slice(2,4)
console.log("Cópia:", parteCopiada);

// SPLICE
// pra remover
var removidos = frutas.splice(1,2)
console.log("Removidos:", removidos);

//pra adicionar
// adiciona, sem substituir ninguém 
frutas.splice( 2, 0, "Coca-cola", "Laranja", "Caju")
console.log(frutas);

// adicionar com substituição
frutas.splice(1, 3, "Computador", "Mouse")
console.log(frutas);
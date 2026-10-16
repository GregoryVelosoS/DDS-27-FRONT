console.log('SHAZAM');


var musicas = ["Pera aí", "Se..." , "Segredos"]
var cantores =["Cirilo" , "Djavan", "Frejat"]

for(var i = 0; i < musicas.length; i++){
    console.log(musicas[i] , "-", cantores[i]);    
}

// OBJETO
var filme1 = {
    // "chave": "valor"
    titulo: "Rei leão",
    genero: "Animação",
    anoLan: 1996
}

console.log(filme1);

// ACESSANDO UMA CHAVE ESPECÍFICA COM O NOME
console.log(filme1.titulo);

console.log(`O filme: ${filme1.titulo} foi lançado em ${filme1.anoLan}`);

console.log(`Gênero: ${filme1["genero"]}`);

// objeto vazio
var garrafa = {}
console.log(garrafa)

// criar as propriedades
garrafa.cor = "Bege"
garrafa.preco = 99
garrafa.tamanho = "710ml"
garrafa["tampada"] = false
console.log(garrafa)

// altera uma propriedade existente
garrafa.cor = "Vermelho"
console.log(garrafa)

// peça ao usuário uma nova propriedade para adicionar na garrafa
// em seguida, peça o valor dessa nova propriedade
// ao fim, adicione-as no objeto garrafa

// var novaPropriedade = prompt("Nova propriedade:")
// garrafa[novaPropriedade] = prompt("Valor:")
// console.log(garrafa[novaPropriedade]);

// AINDA SOBRE OBJETOS
var leao = {
    // Propriedades    
    nome: "Simba",
    temPelo: true,
    especie: "Doméstico",
    peso: 60,
    // Métodos,
    andar: function (){
        console.log("Estou andando, confia")
    },
    falar: () => {
        console.log("MIAAAAAAAAAAAAAAAAAAAAUU");
    }
}

console.log(leao);
// mostra o texto do método
console.log(leao.andar);
//executar o método do leão
leao.falar()
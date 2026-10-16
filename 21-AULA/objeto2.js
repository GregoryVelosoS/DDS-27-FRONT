// CRIA UMA FUNÇÃO EXTERNA
function opcoes(){
    // THIS NESSE CONTEXTO, É O CARA QUE ESTÁ CHAMANDO A FUNÇÃO
    console.log("as opções são:", this.tamanho.toString())
}
var produto1 = {
    nome: "Coca-Cola",
    categoria: "Bebidas",
    quantidade: 30,
    tamanho: ["200ml", "Lata", "600ml", "3l", "Ks"],
    // CRIA UM MÉTODO INTERNO
    descricao: function (){
        // this - referencia o próprio
        console.log(`A ${this.nome} é da categoria ${this.categoria}`);
    },
    // USA UMA FUNÇÃO EXTERNA COMO SEU MÉTODO
    verTamanhos : opcoes
}
produto1.descricao()
produto1.verTamanhos()

var produto2 = {
    nome: "Coxinha",
    categoria: "Salgados",
    quantidade: 3,
    tamanho: ["P", "M", "G"],
    descricao: function (){
        console.log(`A ${this.nome} é da categoria ${this.categoria}`);
    }  
}
produto2.descricao()
produto2.verTamanhos()

// METENDO O LOKO (POR CAUSA DO LUCAS)
var aluno = {
    nome: "Cristiano Ronaldo",
    anoEscolar: "7°",
    turma: "C",
    notas: [6,7,8],
    media: function(){
     
        let n1 = this.notas[0]
        let n2 = this.notas[1]
        let n3 = this.notas[2]

        return ((n1+n2+n3) / 3)
    }
}
console.log(aluno.media());

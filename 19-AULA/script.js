console.log("Manda um oi ai pra eu ver...")

// FUNÇÕES
// SÓ EXECUTA
function teste(){
    console.log("ESTOU FUNCIONANDO");
}

// EXECUTANDO A FUNÇÃO 
teste()

// com retorno
function soma(num1, num2){
    return num1 + num2
}
console.log(soma());

// Mostra apenas o texto da função, não executa
console.log(soma);


// com parametros
function teste2(parametro){
    console.log("O parametro enviado foi:", parametro);
}

// executado
teste2("Arroz")

var nome = "Cláudio"
teste2(nome)

// FAZ AÇÕES E RETORNA RESULTADOS
function media(n1,n2){
    let resultado = (n1 + n2) / 2
    return resultado 
}

// GUARDA RESULTADO EM VÁRIÁVEL, PRA DEPOIS UTILIZAR
var final = media(9,7)
console.log("Resultado da média:",final);

// FUNÇÃO ANÔNIMA
// é uma função que não tem nome, e seu texto é guardado emm uma variável
var mensagem = function (){
    console.log("OI, MEU CHAPA🦡");
}

// mostra o texto da função
console.log(mensagem);

// Apenas guarda o texto função 
mensagem

// Executa a função, coloco os ()
mensagem()

// ARROW FUNCTION - FUNÇÃO DE SETA
// FORMA MAIS COMUM DE ESCREVER FUNÇÕES NO JAVASCRIPT
const multiplicar = (x,y) => {
    let result, primeiro = x, segundo = y
    result = primeiro * segundo
    return result
}

console.log("O resultado da multiplication é:", multiplicar(7,4));


// MAIS MENOR AINDA
// QUANDO SÓ TEM UMA LINHA DE RETORNO, O RETURN PODE SER OMITIDO TAMBÉM
const dobro = numero => numero * 2

console.log("O dorobo é:", dobro(42));

// FAÇA UM PEDIDO DE UM NÚMERO AO USUÁRIO, E UTILIZE O VALOR INFORMADO PARA PASSAR A UMA FUNÇÃO DE SETA, E RETORNAR A DIVISÃO POR DOIS DAQUELE VALOR. E MOSTRE NO CONSOLE O RESULTADO

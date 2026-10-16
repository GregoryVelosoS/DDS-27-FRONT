/*
click — quando clica em um elemento.
dblclick — quando dá duplo clique.
input — quando o valor de um campo muda durante a digitação.
change — quando o valor de um campo é alterado e confirmado.
submit — quando envia um formulário.
mouseover — quando o mouse entra sobre um elemento.
mouseout — quando o mouse sai de um elemento.
mousemove — quando o mouse se movimenta sobre um elemento.
mousedown — quando pressiona um botão do mouse.
mouseup — quando solta um botão do mouse.
keydown — quando pressiona uma tecla.
keyup — quando solta uma tecla.
focus — quando um elemento recebe foco.
*/

// =====================================================

// EVENTO CHANGE
// CHANGE DISPARA QUANDO O USUÁRIO SAI DA CAIXINHA

document.getElementById("campoChange").addEventListener("change", () =>{

    // PEGA O VALOR DIGITADO PELO USUÁRIO
    const textoDigitado = document.getElementById("campoChange").value
   
    // PEGA O TESTO DE BAIXO E TROCA O VALOR, PELO QUE A PESSOA DIGITOU E 
    // GUARDEI NA VARIÁVEL
    document.getElementById("resultadoChange").innerText = "Você digitou:" + textoDigitado
})

// EVENTO INPUT
// INPUT DISPARA QUANDO O USUÁRIO ALTERA O VALOR DA CAIXINHA

document.getElementById("campoInput").addEventListener("input", function (){

    // PEGA O VALOR DIGITADO PELO USUÁRIO
    const textoDigitado = this.value

    // PEGA O TESTO DE BAIXO E TROCA O VALOR, PELO QUE A PESSOA DIGITOU E 
    // GUARDEI NA VARIÁVEL   
    document.getElementById("resultadoInput").innerText = textoDigitado
})


// ================================================================================== //
// ================================================================================== //
// ================================================================================== //
// ================================================================================== //

// guarda todo o html do formulário
const formulario = document.getElementById("formJogador")

// guarda o html da lista de jogadores (que se inicia vazia)
const lista = document.getElementById("listaJogadores")


// função para ativar quando o usuario tentar enviar os dados
formulario.addEventListener("submit", function(evento){

    // PARAR DE RECARREGAR A PÁGINA QUANDO TENTA ENVIAR, ALÉM DE OUTRAS 
    evento.preventDefault()

    // VERIFICA O CONTEÚDO DIGITADO NAS CAIXINHAS, E GUARDA EM VARIÁVEIS
    const inputNome = document.getElementById("nome").value
    const inputPosicao = document.getElementById("posicao").value
    const inputCamisa = document.getElementById("camisa").value
    const inputTime = document.getElementById("time").value

    // CRIAR UM OBJETO COM AS INFORMAÇÕES
    const jogador = {
        nome: inputNome,    
        posicao: inputPosicao,
        camisa: Number(inputCamisa),
        time: inputTime
    }
    console.log(jogador);
    
    // CHAMA A FUNÇÃO PARA ADICIONAR O CARD
    adicionarJogador(jogador)


    // RESETAR O FORMULÁRIO DEPOIS QUE ENVIA
    formulario.reset()
})


// FUNÇÃO PARA CRIAR UM CARD
function adicionarJogador(jogadorAtual){

    // cria o elemento card - pai de todos
    const card = document.createElement("div")

    // cria elementos do card
    const titulo = document.createElement("h4")
    const textoPosicao = document.createElement("p")
    const textoCamisa = document.createElement("p")

    // preencher os elementos, com os valores do objeto
    titulo.textContent = jogadorAtual.nome
    textoPosicao.textContent = "Posição: " + jogadorAtual.posicao
    textoCamisa.textContent =  "Camisa: "  + jogadorAtual.camisa

    // Construo o card
    card.appendChild(titulo)
    card.appendChild(textoPosicao)
    card.appendChild(textoCamisa)

    // adiciona o card, como filho da lista de jogadores
    lista.appendChild(card)
}
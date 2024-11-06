let listasDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 e 10';


function exibirTextoNaTela(tag){
    let campo = document.querySelectot(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.2});
}

exibirTextoNaTela('h1', 'jogo do número secreto')

function vereficarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute==numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você acertou o numero secreto com 5 ${tentativa} ${palavraTentativa}!`;
        exibirTextonaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if(chute > numeroScreto) {
            exibirTextonaTela('p', 'o número secreto é menor');
         } else {
            exibirTextonaTela('p','o número secreto é maior');
         }
         tentativa ++;
         limparCampo();
}
    function gerarNumeroAleatorio() {
      let numeroEscolhido = parseInt(Math.random() * 4 + 1);
      let quantidadeDeElementosNaLista = listasDeNumerosSorteados.length;
    
      if (quantidadeDeElementosNaLista == numeroLimite){
         listasDeNumerosSorteados =  [];
      }

      if (listasDeNumerosSorteados.includes(numeroEscolhido)) {
          return gerarNumeroAleatorio (); 
    } else {
        listasDeNumerosSorteados.push(numeroEscolhido);
        console.log(listasDeNumerosSorteados)
        return numeroEscolhido;
      }

    }

   function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';
   }

}

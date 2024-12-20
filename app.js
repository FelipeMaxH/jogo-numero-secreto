alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 20;
// O parseInt é para trazendo um numero inteiro, porque o Math.random traz o numeros com casa decimais e aí multiplicamos por 10 + 1 para que esse numero seja maior que 1
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);  
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto){
        
        chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
        // se chute for igual ao número secreto já usamos o break e ele para essa parte do código, se não ele vai continuar até acertar
if (chute == numeroSecreto) {
    break;
} else {
    if (numeroSecreto > chute) {
        alert(`numero secreto é maior que ${chute}`);
}   else {
            alert(`numero secreto é menor que ${chute}`);
        }
    }
    // Isso é usado para somar, é igual a : tentativas = tentativas + 1;
    tentativas++;
}

//Isso é um operador ternário, e como se fosse uma frase (A palavra tentativa é maior que 1? se sim escreva tentativas se não (:) tentativa)
let palavraTentativa =  tentativas > 1 ? 'tentativas': 'tentativa'

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1){
//   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }



// Operador	    Nome	            Exemplo	                Resultado
// ==	        Igual	            A == B	                Verdadeiro se A for igual a B
// !=	        Diferente	        A != B	                Verdadeiro se A não for igual a B
// <	        Menor que	        A < B	                Verdadeiro se A for menor que B
// >	        Maior que	        A > B	                Verdadeiro se A for maior que B
// <=	        Menor ou igual	    A <= B	                Verdadeiro se A for menor ou igual a B.
// >=	        Maior ou igual	    A >= B	                Verdadeiro se A for maior ou igual a B.
// &&	        E / AND	            (A > B) && (B == C)	    Verdadeiro se A fo maior que B E B for igual a C
// ǀǀ	        OU / OR	            (A > B) ǀǀ (B == C)	    Verdadeiro se A for maior que B OU B for igual a C
// !	        NEGAÇÃO	            !(A == B)	            Verdadeiro se A NÃO for igual a B
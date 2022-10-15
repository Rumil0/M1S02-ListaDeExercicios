function somatorio() {

    let numero = 0;
    let soma = 0;

    while (true){
        
        numero = parseFloat(prompt("Digite um número inteiro para a somatória: "));

        if (numero === -1){
            break;
        }

        if (!isNaN(numero) && numero>=0){
            soma += numero;
        } else {
            alert ("Valor inválido.")
        }
    }
    alert ("A soma é "+soma);
}
somatorio();
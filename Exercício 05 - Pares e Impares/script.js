function contador() {

    let numero = 0;
    let contPar = 0;
    let contImpar = 0;

    numero = parseInt(prompt("Digite um número: "));

    for (let cont = 0; cont<=numero; cont++){
        if ((cont % 2) === 0){
            contPar++;
        } else {
            contImpar++;
        }
    }  

    alert (`De 0 até o número ${numero} existem: \n ${contPar} números pares e \n ${contImpar} números impares.`)

}
contador();
function tabuada(){
    let numero = prompt("Digite o número que deseja a tabuada: ");

    var memoria = new Array();

    numero = parseInt(numero, 10);

    if (numero < 0 || isNaN(numero) || (numero==null)) {
        alert ("Entrada inválida, por favor digite um número")
        tabuada();
    } else {
        for (let cont = 0; cont <= 10; cont++){
            memoria[cont] = numero+ " x "+cont+" = "+numero*cont;
        }
        alert("A tabuada de "+numero+" é \n"+memoria.join("\n"));
    }
}
tabuada();
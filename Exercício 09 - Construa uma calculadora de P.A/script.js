function calculator() {

    var initial = 0;
    var root = 0;
    var pa = new Array();

    while (true){
        initial = parseInt(prompt("Digite o valor inicial (Número inteiro)"));
        if(!isNaN(initial)){
            break;
        } else {
            alert ("Entrada inválida");
        }
    }
    
    while (true){
        root = parseInt(prompt("Digite a raíz (Número inteiro)"));
        if(!isNaN(root)){
            break;
        } else {
            alert ("Entrada inválida");
        }
    }

    for (var i = 0; i < 10; i++){
        pa.push(initial+(root*i)); 
    }

    alert("A P.A de valor inicial " + initial + " e raíz " + root + " é: \n" + pa.join(", "));

}
calculator();
function classificacao(){
    let idade = prompt("Digite a idade que deseja classificar: ");

    idade = parseInt(idade, 10);

    if (idade < 0 || isNaN(idade) || (idade==null)) {
        alert ("Entrada inválida, por favor digite um número")
        classificacao();
    } else {
        if (idade<=15){
            alert("Quem tem essa idade é Jovem");
        } else if (idade <=64) {
            alert("Quem tem essa idade é Adulto");
        } else {
            alert("Quem tem essa idade é Idoso");
        }
    }
}
classificacao();
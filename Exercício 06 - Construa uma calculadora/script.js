function calculator() {

    let operator = 0;
    let number1 = 0;
    let number2 = 0;
    let result = 0;
    let repetir = true;

    do{
        operator = prompt("Qual o tipo de cálculo ele deseja fazer (+, -, * ou /): ");
        switch (operator){
            case "+":
                repetir = false;
                break;
            case "-":
                repetir = false;
                break;
            case "*":
                repetir = false;
                break;
            case "/":
                repetir = false;
                break;
            default:
                alert("Entrada inválida, entre apenas um dos operadores aceitos (+, -, * ou /): ");
                break;
        }
    } while(repetir);

    repetir = true;

    do {
        number1 = parseFloat(prompt("Digite o primeiro número: "));
        if (!isNaN(number1)){
            repetir = false;
        } else {
            alert ("Entrada inválida, apenas números são aceitos.");
            repetir = true;
        }
    }while(repetir);

    do {
        number2 = parseFloat(prompt("Digite o segundo número: "));
        if (!isNaN(number2)){
            repetir = false;
        } else {
            alert ("Entrada inválida, apenas números são aceitos.");
            repetir = true;
        }
    }while(repetir);

    if (operator == "+"){
        result = number1 + number2;
    } else if (operator == "-"){
        result = number1 - number2;
    } else if (operator == "*"){
        result = number1 * number2;
    } else if (operator == "/"){
        result = number1 / number2;
    } else {
        alert ("Erro de cálculo!")
    } 

    alert(`O resultado de ${number1} ${operator} ${number2} é: ${result}`);
}
calculator();
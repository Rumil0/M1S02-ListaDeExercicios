function seasons() {

    var option = "";
    var season = "";
    var now = new Date();
    var day = 0;
    var month = 0;
    var loop = true;
    
    do {
        option = prompt("Digite 'a' para usar a data atual;\nDigite 'b' para entrar uma data.");
        switch (option){
            case "a":
                day = now.getDate();
                month = now.getMonth() + 1;
                loop = false;
                break;
            case "b":
                while (true){
                    day = parseInt(prompt("Digite o dia do mês (Entre 1 e 31): "))
                    if (!isNaN(day) && day>=1 && day<=31){
                        break;
                    } else {
                        alert ("Entrada inválida! Digite apenas um numéro entre 1 e 31.")
                    }
                }
                while (true){
                    month = parseInt(prompt("Digite o mês (Entre 1 e 12): "))
                    if (!isNaN(month) && month>=1 && month<=12){
                        break;
                    } else {
                        alert ("Entrada inválida! Digite apenas um numéro entre 1 e 12.")
                    }
                }
                loop = false;
                break;
            default:
                alert ("Entrada inválida!")
                break;
        }
    } while(loop);

    if (month <= 3 ) {
        day <=21? season = "Verão" : season = "Outono";
    } else if (month <= 6){
        day <=21? season ="Outono" : season = "Inverno";
    } else if (month <= 9){
        day <=21? season ="Inverno" : season = "Primavera";
    } else if (month <= 12){
        day <=21? season ="Primavera" : season = "Verão";
    } 

    alert (`No hemisfério sul no dia ${day} do mês ${month} a estação será: ${season}!`)

}
seasons();
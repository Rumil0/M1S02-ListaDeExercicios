function seasons() {

    var prime = new Array();
    var primeCount = 0;
    var number = 0;

    for(let i = 1; i <=1000; i++){
        for(let j = 1; j <= i; j++){
            if (i%j==0){
                primeCount++;
            }
        }
        if (primeCount != 2){
            primeCount = 0;
        } else {
            prime.push(i);
            number++;
            primeCount = 0;
        }
    }

    alert ("Entre 0 e 1000 existem " + number + " números primos, e eles são: \n" + prime.join(", "));

}
seasons();
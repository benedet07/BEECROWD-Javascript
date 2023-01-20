var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [pares, impares, positivos, negativos] = [0 ,0 ,0 ,0];
for (i = 0; i < 5; i++){
    let num = parseInt(lines.shift().trim());
    if(num % 2 === 0){
        pares++;
    }
    if(num % 2 !== 0 ){ //precisa arrumar
        impares++;
    }
    if(num > 0){
        positivos++;
    }
    if(num < 0){
        negativos++;
    }
}
console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");
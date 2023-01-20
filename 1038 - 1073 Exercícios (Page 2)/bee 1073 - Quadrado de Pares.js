var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//Ler um valor inteiro N (5 < N < 2000). Apresentar o valor quadrado de cada valor par de 1 até N, inclusive N
let num = parseInt(lines);
for(i = 1; i <= num; i++){
    if(i % 2 === 0){
        let quadrado = i ** 2;
        console.log(`${i}^2 = ${quadrado}`);
    }
}
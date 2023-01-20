var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [X, Y] = [parseInt(lines[0]), parseInt(lines[1])];

const menor = Math.min(X, Y) + 1;
const maior = Math.max(X, Y) - 1;

let soma = 0;

for (let i = menor; i <= maior; i++){
    if(i % 2 !== 0){
        soma += i;
    }
}
console.log(soma);
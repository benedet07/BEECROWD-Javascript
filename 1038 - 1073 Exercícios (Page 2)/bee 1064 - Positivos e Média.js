var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let cont = 0;
let soma = 0;

for (i = 0; i < 6; i++ ){
    let num = parseFloat(lines.shift().trim());
    if (num > 0){
        cont++;
        soma += num;
    }
}

console.log(cont + ' valores positivos');
console.log((soma / cont).toFixed(1));
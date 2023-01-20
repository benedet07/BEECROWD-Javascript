var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(input);
var valores = [3600, 60, 1];
var resultado = [];

for(var v of valores){
    resultado.push(parseInt(valor / v))
    valor = valor % v
}

console.log(resultado.join(':'))
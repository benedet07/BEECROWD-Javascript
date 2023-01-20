var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ')

var valor1 = parseFloat(valores.shift())
var valor2 = parseFloat(valores.shift())
var valor3 = parseFloat(valores.shift())

console.log(Math.max(valor1, valor2, valor3) + " eh o maior")
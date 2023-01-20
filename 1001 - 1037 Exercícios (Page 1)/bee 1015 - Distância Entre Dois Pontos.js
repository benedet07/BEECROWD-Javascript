var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = input.split('\n')

var [x1, y1] = valores[0].split(' ')
var [x2, y2] = valores[1].split(' ')
var conta = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2))

console.log(conta.toFixed(4))
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var Num = parseInt(lines.shift());
var Quanthr = parseInt(lines.shift());
var Valorhr = parseFloat(lines.shift())

console.log('NUMBER = ' + Num)
console.log('SALARY = U$ ' + (Quanthr * Valorhr).toFixed(2))
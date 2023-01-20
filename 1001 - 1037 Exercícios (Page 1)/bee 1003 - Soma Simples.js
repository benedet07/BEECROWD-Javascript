var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift(5));
var B = parseInt(lines.shift(2));
var SOMA = A + B;
console.log('SOMA = ' + SOMA);
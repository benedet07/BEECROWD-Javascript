var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var qtdMinutos = (60 * input) / 30
console.log(qtdMinutos + ' minutos')
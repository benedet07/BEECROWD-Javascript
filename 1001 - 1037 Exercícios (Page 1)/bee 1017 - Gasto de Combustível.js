var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [tempGasto, velMedia] = input.split('\n');

var distancia = tempGasto * velMedia;
var qtdLitros = distancia / 12;

console.log(qtdLitros.toFixed(3))
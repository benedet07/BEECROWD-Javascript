var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [distanciaPercorrida, combustivelGasto] = input.split('\n')
var consumoMedio = distanciaPercorrida / combustivelGasto
console.log(consumoMedio.toFixed(3) + ' km/l')
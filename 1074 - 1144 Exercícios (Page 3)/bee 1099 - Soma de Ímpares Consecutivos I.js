var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

const N = parseInt(lines.shift())

function parseStringToNumeros(numerosEmString){
   const arrayDeNumeros = numerosEmString.split(' ')
   const [X, Y] = arrayDeNumeros.map(nro => parseInt(nro))
}
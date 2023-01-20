var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let numerosImpressos = 0


while (numerosImpressos < 6) {
    const condicao = X % 2 !== 0;

    if (condicao) {
        console.log(X)
        numerosImpressos++
    }

    X++
}

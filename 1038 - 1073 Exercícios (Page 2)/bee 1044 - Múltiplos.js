var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const val = lines.shift();
const valores = val.split(' ');
const A = parseInt(valores[0]);
const B = parseInt(valores[1]);

if (A < B){
    const numInteiro1 = parseInt(B / A)
    if(A * numInteiro1 == B){
        console.log('Sao Multiplos');
    } else {
        console.log('Nao sao Multiplos');
    }
} else if (A > B){
    const numInteiro2 = parseInt(A / B);
    if(B * numInteiro2 == A){
        console.log('Sao Multiplos');
    } else {
        console.log('Nao sao Multiplos');
    }
}
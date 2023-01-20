var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const val = lines.shift();
const valores = val.split(' ');
const numerosSeparados = valores.map(a => parseFloat(a));
const numerosOrdenados = numerosSeparados.sort(function(a, b){
    return b - a;
});
const [A, B, C] = numerosOrdenados;

if (A >= (B + C)){
    console.log('NAO FORMA TRIANGULO');
} else {
    if ((A * A) == (B * B + C * C)){
        console.log('TRIANGULO RETANGULO');
    }
    if ((A * A) > (B * B + C * C)){
        console.log('TRIANGULO OBTUSANGULO');
    }
    if ((A * A) < (B * B + C * C)){
        console.log('TRIANGULO ACUTANGULO');
    }
    if (A == B && A == C && C == B){
        console.log('TRIANGULO EQUILATERO');
    }
    if ((A == B && A != C) || (A == C && A != B) || (B == C && B != A)){
        console.log('TRIANGULO ISOSCELES');
    }
}
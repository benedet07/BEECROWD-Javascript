var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const num = lines.shift().split(' ');
const A = parseFloat(num.shift());
const B = parseFloat(num.shift());
const C = parseFloat(num.shift());
const delta = B * B - 4 * A * C;

if(A !== 0 && delta > -1){
    const R1 = (-B + Math.sqrt(delta)) / (2 * A);
    const R2 = (-B - Math.sqrt(delta)) / (2 * A);
    console.log('R1 = ' + `${R1.toFixed(5)}`);
    console.log('R2 = ' + `${R2.toFixed(5)}`);
}else{
    console.log('Impossivel calcular');
};
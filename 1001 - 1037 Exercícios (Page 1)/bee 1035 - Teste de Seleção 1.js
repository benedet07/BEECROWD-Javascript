var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const abcd = lines.shift().split(' ')
const A = parseInt(abcd.shift());

const B = parseInt(abcd.shift());

const C = parseInt(abcd.shift());

const D = parseInt(abcd.shift());

if((B > C) && (D > A) && (C + D) > (A + B) && (C > 0) && (D > 0) && (A % 2 === 0)){
    console.log('Valores aceitos')
} else {
    console.log('Valores nao aceitos')
}
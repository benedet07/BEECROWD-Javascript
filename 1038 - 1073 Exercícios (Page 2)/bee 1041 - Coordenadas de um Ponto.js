var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const ponto = lines.shift().split(' ');
const x = parseFloat(ponto.shift()).toFixed(1);
const y = parseFloat(ponto.shift()).toFixed(1);

if (x == 0.0 && y == 0.0){
    console.log('Origem');
} else if (x == 0.0 && y != 0.0){
    console.log('Eixo Y');
} else if (x != 0.0 && y == 0.0){
    console.log('Eixo X');
} else if (x > 0 && y > 0){
    console.log('Q1');
} else if (x < 0 && y > 0){
    console.log('Q2');
} else if (x < 0 && y < 0){
    console.log('Q3');
} else if (x > 0 && y < 0){
    console.log('Q4');
}

//console.log(y)
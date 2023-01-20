var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let result = 0;
for (let i = 0; i < 6; ++i ){
    let num = parseFloat(lines.shift().trim());
    if (num > 0)
    ++result;
}
console.log(result + ' valores positivos')
/*
var lines = input.split('\n');

let positivos = 0;
for(let i = 0; i < 6; ++i){
    let numero = parseFloat(lines.shift().trim());

    if(numero > 0)  ++positivos;
}
*/
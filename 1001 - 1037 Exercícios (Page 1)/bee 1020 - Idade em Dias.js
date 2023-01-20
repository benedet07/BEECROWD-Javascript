var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var idade = parseInt(input)
var dias = [365, 30, 1]
var resultado = [];

for(var diasIdade of dias){
    resultado.push(parseInt(idade / diasIdade))
    idade = idade % diasIdade
}

console.log(resultado[0] + ' ano(s)')
console.log(resultado[1] + ' mes(es)')
console.log(resultado[2] + ' dia(s)')
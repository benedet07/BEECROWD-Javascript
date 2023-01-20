var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(input)
var notas = [100, 50, 20, 10, 5, 2 ,1]

console.log('valor')

for (var nota of notas){
    var qtdNotas = parseInt(valor / nota)
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`)
    valor = valor % nota
}
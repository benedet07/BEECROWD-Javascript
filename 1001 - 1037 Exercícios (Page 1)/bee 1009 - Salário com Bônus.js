var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salario = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());
var comissao = vendas * 0.15;
var saltotal = salario + comissao;

console.log('TOTAL = R$ ' + (saltotal.toFixed(2)))
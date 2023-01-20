var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var infoItem1 = lines.shift().split(' ')
var infoItem2 = lines.shift().split(' ')

var idItem1 = infoItem1.shift()
var qtdItem1 = infoItem1.shift()
var valorUnitarioItem1 = infoItem1.shift()
var valorTotalItem1 = qtdItem1 * valorUnitarioItem1

var idItem2 = infoItem2.shift()
var qtdItem2 = infoItem2.shift()
var valorUnitarioItem2 = infoItem2.shift()
var valorTotalItem2 = qtdItem2 * valorUnitarioItem2

var TotalCompra = valorTotalItem1 + valorTotalItem2
console.log('VALOR A PAGAR: R$ ' + TotalCompra.toFixed(2))
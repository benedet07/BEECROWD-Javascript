var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var programa = lines.shift().split(' ');

var A = parseFloat(programa.shift());
var B = parseFloat(programa.shift());
var C = parseFloat(programa.shift());

var triangulo = (A * C / 2);
var circulo = (3.14159 * Math.pow(C, 2));
var trapezio = (((A + B) / 2) * C);
var quadrado = (B * B);
var retangulo = (A * B);

console.log('TRIANGULO: ' + triangulo.toFixed(3));
console.log('CIRCULO: ' + circulo.toFixed(3));
console.log('TRAPEZIO: ' + trapezio.toFixed(3));
console.log('QUADRADO: ' + quadrado.toFixed(3));
console.log('RETANGULO: ' + retangulo.toFixed(3));
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const produtos = lines.shift().split(' ')
const codigo = parseInt(produtos.shift())
const quantidade = parseInt(produtos.shift())

const prod1 = { codigo: 1, nome: 'Cachorro Quente', preco: 4.00 }
const prod2 = { codigo: 2, nome: 'X-Salada', preco: 4.50 }
const prod3 = { codigo: 3, nome: 'X-Bacon', preco: 5.00 }
const prod4 = { codigo: 4, nome: 'Torrada Simples', preco: 2.00 }
const prod5 = { codigo: 5, nome: 'Refrigerante', preco: 1.50 }


if (codigo === 1) {
    console.log('Total: R$ ' + (prod1.preco * quantidade).toFixed(2))
} else if (codigo === 2) {
    console.log('Total: R$ ' + (prod2.preco * quantidade).toFixed(2))
} else if (codigo === 3) {
    console.log('Total: R$ ' + (prod3.preco * quantidade).toFixed(2))
} else if (codigo === 4) {
    console.log('Total: R$ ' + (prod4.preco * quantidade).toFixed(2))
} else if (codigo === 5) {
    console.log('Total: R$ ' + (prod5.preco * quantidade).toFixed(2))
}
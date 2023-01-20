var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

const valores = lines.map(line => parseInt(line.split(' ')));

const resultado = valores.reduce((maiorAtual, valorAtual, idx) => {
    if (valorAtual > maiorAtual.valor) {
      return { valor: valorAtual, indice: idx };
    }
    return maiorAtual;
  }, { valor: valores[0], indice: 0 });
console.log(resultado.valor);
console.log(resultado.indice + 1);
/*
const maiorValor = valores.reduce((maiorAtual, valorAtual) => maiorAtual < valorAtual ? valorAtual : maiorAtual);

//const somaPonderadaCaso = valores[i].reduce((soma, valorAtual, idx) => soma + valorAtual * pesos[idx], 0);
*/
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

const quantidadeCasos = parseInt(lines.shift());

let totalCobaias = 0;
let numRatos = 0;
let numSapos = 0;
let numCoelhos = 0;

for (let i = 0; i < quantidadeCasos; i++) {
    let [quantia, tipo] = lines[i].split(" ");
    quantia = parseInt(quantia);
  
    totalCobaias += quantia;
  
    if (tipo === "R") {
      numRatos += quantia;
    } else if (tipo === "S") {
      numSapos += quantia;
    } else if (tipo === "C") {
      numCoelhos += quantia;
    }
}

const percentualRatos = (numRatos / totalCobaias) * 100;
const percentualSapos = (numSapos / totalCobaias) * 100;
const percentualCoelhos = (numCoelhos / totalCobaias) * 100;

console.log('Total: ' + totalCobaias + ' cobaias');
console.log('Total de coelhos: ' + numCoelhos);
console.log('Total de ratos: ' + numRatos);
console.log('Total de sapos: ' + numSapos);
console.log('Percentual de coelhos: ' + percentualCoelhos.toFixed(2) + ' %');
console.log('Percentual de ratos: ' + percentualRatos.toFixed(2) + ' %');
console.log('Percentual de sapos: ' + percentualSapos.toFixed(2) + ' %');

/*
lines.forEach((line) => {
  let [quantia, tipo] = line.split(" ");
  quantia = parseInt(quantia);
  
  totalCobaias += quantia;
  
  if (tipo === "R") {
    numRatos += quantia;
  } else if (tipo === "S") {
    numSapos += quantia;
  } else if (tipo === "C") {
    numCoelhos += quantia;
  }
});
*/
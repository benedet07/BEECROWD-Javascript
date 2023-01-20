var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const salario = parseFloat(lines.shift());

if (salario >= 0 && salario <= 400.00){
    const reajusteS1 = salario * 0.15;
    const novoS1 = salario + reajusteS1;
    console.log('Novo salario: ' + novoS1.toFixed(2) + '\nReajuste ganho: ' + reajusteS1.toFixed(2) + '\nEm percentual: 15 %');
} else if (salario >= 400.01 && salario <= 800.00){
    const reajusteS2 = salario * 0.12;
    const novoS2 = salario + reajusteS2;
    console.log('Novo salario: ' + novoS2.toFixed(2) + '\nReajuste ganho: ' + reajusteS2.toFixed(2) + '\nEm percentual: 12 %');
} else if (salario >= 800.01 && salario <= 1200.00){
    const reajusteS3 = salario * 0.10;
    const novoS3 = salario + reajusteS3;
    console.log('Novo salario: ' + novoS3.toFixed(2) + '\nReajuste ganho: ' + reajusteS3.toFixed(2) + '\nEm percentual: 10 %');
} else if (salario >= 1200.01 && salario <= 2000.00){
    const reajusteS4 = salario * 0.07;
    const novoS4 = salario + reajusteS4;
    console.log('Novo salario: ' + novoS4.toFixed(2) + '\nReajuste ganho: ' + reajusteS4.toFixed(2) + '\nEm percentual: 7 %');
} else if (salario > 2000.00){
    const reajusteS5 = salario * 0.04;
    const novoS5 = salario + reajusteS5;
    console.log('Novo salario: ' + novoS5.toFixed(2) + '\nReajuste ganho: ' + reajusteS5.toFixed(2) + '\nEm percentual: 4 %');
}
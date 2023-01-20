var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

const numeroCasos = parseInt(lines.shift());
const valores = lines.map(line => line.split(' '));

for(let i = 0; i < numeroCasos; i++){
    const pesos = [2, 3, 5];
    const somaPonderadaCaso = valores[i].reduce((soma, valorAtual, idx) => soma + valorAtual * pesos[idx], 0);
    const resultado = somaPonderadaCaso / 10;
    console.log(resultado.toFixed(1));
}
/*
const letras = ['B', 'O', 'A']
const palavra = letras.reduce((soma, letraAtual) => soma + letraAtual, '')
const aleatorio = [1, 5, 76, 34, 3]
const maximo = aleatorio.reduce((maximoAtual, valorAtual) => maximoAtual < valorAtual ? valorAtual : maximoAtual)
console.log(maximo)


let num = lines.filter(line => (parseFloat(line)));


num.forEach(function(cortar){
    const numeros = cortar.split(' ');
    console.log(numeros)
});

const mediaTesteA = ((A[0] * 2) + (A[1] * 3) + (A[2] * 5)) / 10
const mediaTesteB = ((B[0] * 2) + (B[1] * 3) + (B[2] * 5)) / 10
const mediaTesteC = ((C[0] * 2) + (C[1] * 3) + (C[2] * 5)) / 10

function calcularMedia(notas){
    return ((notas[0] * 2) + (notas[1] * 3) + (notas[2] * 5)) / 10;
}

console.log(calcularMedia(A).toFixed(1));
console.log(calcularMedia(B).toFixed(1));
console.log(calcularMedia(C).toFixed(1));



for (const teste of [A, B, C]){
    let media = 0;
    for (let i = 0; i < numeroCasos; i++) {
      media += teste[i] * pesos[i];
    }
    media /= 10;
    console.log(`${media.toFixed(1)}`);
}
*/
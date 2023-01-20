var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valorMonetario = parseFloat(input);
var notas = [100, 50, 20, 10, 5, 2];
var moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log('NOTAS:');
notas.forEach(nota => {
    console.log(`${parseInt(valorMonetario/nota)} nota(s) de R$ ${nota.toFixed(2)}`);
    valorMonetario %= nota;
})

console.log('MOEDAS:');
moedas.forEach(moeda => {
    console.log(`${parseInt(valorMonetario/moeda)} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valorMonetario = (valorMonetario % moeda) + 0.00001;
});



/*
console.log('NOTAS:')
for(valorNotas of notas){
    resultadoNotas.push(parseInt(valorMonetario / valorNotas))
    valorMonetario = valorMonetario % valorNotas
}
console.log(`${resultadoNotas[0]} nota(s) de R$ ${notas[0].toFixed(2)}`);

console.log('MOEDAS:')
for(valorMoedas of moedas){
    resultadoMoedas.push(parseInt(valorMonetario / valorMoedas))
    valorMonetario = valorMonetario % valorMoedas
}
console.log(`${resultadoMoedas[0]} nota(s) de R$ ${moedas[0].toFixed(2)}`);





/*
const indices = [0,1,2,3,4,5]
// const teste = [
//   'a',
//   'b',
//     'c'
// ]
// teste.forEach((valor, indice) => {
// console.log({valor, indice})
// })

const somar = (a,b) => {
    return a + b
}
console.log({soma: somar(1,2)})

// const escreverAsParada = (batata) => {

// } 
// function escreverAsParada(batata, maisAlgumaCoisa) {
//     console.log('õ la ', {batata, indice: maisAlgumaCoisa})
// }

// indices.forEach((x) => {
// console.log(`${resultadoMoedas[x]} moedas(s) de R$ ${moedas[x].toFixed(2)}`)
// })

// indices.forEach(escreverAsParada)

let a = 1


a = 2;

const b = 3
b =5


for ( let i = 1; i <= 5; i++ ) {
    console.log(`${resultadoMoedas[i]} moedas(s) de R$ ${moedas[i].toFixed(2)}`)
}





// 6;
// console.log(`${resultadoMoedas[1]} moedas(s) de R$ ${moedas[1].toFixed(2)}`);
// console.log(`${resultadoMoedas[2]} moedas(s) de R$ ${moedas[2].toFixed(2)}`);
// console.log(`${resultadoMoedas[3]} moedas(s) de R$ ${moedas[3].toFixed(2)}`);
// console.log(`${resultadoMoedas[4]} moe das(s) de R$ ${moedas[4].toFixed(2)}`);
// console.log(`${resultadoMoedas[5]} moedas(s) de R$ ${moedas[5].toFixed(2)}`);
*/
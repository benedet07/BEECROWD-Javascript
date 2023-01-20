var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines.shift();
const num = numeros.split(' ');

const numerosSeparados = num.map(a => parseInt(a));
const numerosOrdenados = numerosSeparados.sort(function(a, b){
    return a - b;
});

const numporlinha = (arr) => {
    arr.forEach(elemento => {
        console.log(elemento);
    });
};

numporlinha(numerosOrdenados);
console.log('');
numporlinha(num);

/*
console.log(lines)
console.log(numeros)
console.log(numerosSeparados)
console.log(numerosOrdenados)
*/





/*
console.log({input})

var lines = input.split('\n');
console.log({lines})

const primeiraLinha = lines.shift()
console.log({primeiraLinha})

const numerosMasEhString = primeiraLinha.split(' ')
console.log({numerosMasEhString})

const numerosCrus = numerosMasEhString.map(a => parseInt(a))
console.log({numerosCrus})

const numerosOrdenados =  numerosCrus.sort(function(a, b) {
        return a - b;
      });

console.log({numerosOrdenados})

const printarLinhaPorLinha = (arr) => {
    arr.forEach(elemento => {
        console.log(elemento)
    })
}




console.log('')

printarLinhaPorLinha(numerosCrus)



printarLinhaPorLinha(['a', 'b', 'batata'])

// const elementosQualquer = ['a', 'b', 'c']

// const duplicar = (str) => str + str

// // isso
// const el1 = duplicar(elementosQualquer[0])
// const el2 = duplicar(elementosQualquer[1])
// const el3 = duplicar(elementosQualquer[2])
// const novosElementos = [el1, el2, el3]


// // mema coisa
// const novosElementos2 = elementosQualquer.map(batata => duplicar(batata))

// console.log({novosElementos, novosElementos2})

      
// const number1 = parseFloat(num.shift())
// number1.sort(function(a, b) {
//     return a - b;
//   });
//   console.log(number1);
//const n1 = parseInt(numbers.shift())
//const n2 = parseInt(numbers.shift())
//const n3 = parseInt(numbers.shift())


/*
const numbersc = numbers.sort((a, b) => a - b)
const numbersd = numbers.sort((a, b) => a - b)
if (numbers.sort((a, b) => a - b)){
    console.log(numbers.shift('\n'))
    console.log(numbers.shift('\n'))
    console.log(numbers.shift('\n'))
}

console.log(numbersc)
console.log(numbersd)
*/

// const arrayQualquer = ['a', 'b', 'c']
// console.log({arrayQualquer})


// const meuShift = (arr) => {
//     const [primeiro, ...resto] = arr
//     return resto
// }

// console.log(meuShift(arrayQualquer))
